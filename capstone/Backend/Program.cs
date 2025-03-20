using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Capstone.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System.Reflection;
using System;
using System.IO;

var builder = WebApplication.CreateBuilder(args);

// ✅ Load configuration from appsettings.json
var configuration = new ConfigurationBuilder()
    .SetBasePath(Directory.GetCurrentDirectory())
    .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
    .Build();

// ✅ Get the connection string
var connectionString = configuration.GetConnectionString("DefaultConnection");
if (string.IsNullOrEmpty(connectionString))
{
    throw new Exception("Database connection string is missing! Check appsettings.json.");
}

// ✅ Register DbContext with SQL Server
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(connectionString));

// ✅ Add services to the container
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo
    {
        Title = "Job Management API",
        Version = "v1",
        Description = "API for managing job applications",
        Contact = new Microsoft.OpenApi.Models.OpenApiContact
        {
            Name = "Your Name",
            Email = "your@email.com",
            Url = new Uri("https://yourwebsite.com")
        }
    });

    // ✅ Add XML comments for Swagger documentation
   // var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
    //var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
    //options.IncludeXmlComments(xmlPath);
});

// ✅ Enable CORS for React Frontend
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactFrontend",
        policy =>
        {
            policy.WithOrigins("http://localhost:3000") // ✅ Allow React frontend
                  .AllowAnyMethod()
                  .AllowAnyHeader();
        });
});

// ✅ Add Authentication & Authorization
builder.Services.AddAuthentication();
builder.Services.AddAuthorization();

var app = builder.Build();

// ✅ Enable Swagger for API documentation
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors("AllowReactFrontend");
app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Job Management API v1");
    c.RoutePrefix = string.Empty;
});

// ✅ Middleware Pipeline
app.UseHttpsRedirection();
//app.UseCors("AllowReactFrontend"); // ✅ Allow React frontend
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();

// ✅ Run the application
app.Run();