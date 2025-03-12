-- SQL Script for creating necessary tables if using a real database
CREATE TABLE Users (
    Id INT PRIMARY KEY IDENTITY,
    Username NVARCHAR(50) NOT NULL,
    Email NVARCHAR(100) NOT NULL
);

CREATE TABLE Batches (
    Id INT PRIMARY KEY IDENTITY,
    BatchName NVARCHAR(100) NOT NULL
);
