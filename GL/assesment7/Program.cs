var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllersWithViews();

var app = builder.Build();

app.UseRouting();

// 🛑 Middleware 1: Terminate chain when URL contains "/end"
app.Use(async (context, next) =>
{
    if (context.Request.Path.Value.Contains("/end"))
    {
        await context.Response.WriteAsync("Request terminated.");
        return; // Stop further processing
    }
    await next(); // Move to the next middleware
});

// 👋 Middleware 2: Display "hello1" before and "hello2" after
app.Use(async (context, next) =>
{
    await context.Response.WriteAsync("Hello1 ");
    await next(); // Move to next middleware/controller
    await context.Response.WriteAsync(" Hello2");
});

// 🔄 Middleware 3: If URL contains "hello", display "Hello" and continue
app.Use(async (context, next) =>
{
    if (context.Request.Path.Value.Contains("hello"))
    {
        await context.Response.WriteAsync("Hello ");
    }
    await next();
});

// ✅ Ensure MVC routing is enabled
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllerRoute(
        name: "default",
        pattern: "{controller=First}/{action=Index1}/{id?}"
    );

    endpoints.MapControllerRoute(
        name: "first",
        pattern: "first/{action}/{id?}",
        defaults: new { controller = "First", action = "Index1" }
    );

    endpoints.MapControllerRoute(
        name: "second",
        pattern: "second/{action}/{id?}",
        defaults: new { controller = "Second", action = "Index1" }
    );
});

app.Run();
