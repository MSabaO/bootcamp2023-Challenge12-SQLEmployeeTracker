// -- Drop the existing database if it exists 
DROP DATABASE business_db;

// -- Create a new database
CREATE DATABASE business_db;

// -- Use the newly created database
USE business_db;

// -- Create a 'departments' table
CREATE TABLE departments (
    departmentId INT AUTO_INCREMENT PRIMARY KEY,
    departmentName VARCHAR(30) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

// -- Create a 'roles' table
CREATE TABLE roles (
    roleId INT AUTO_INCREMENT PRIMARY KEY,
    roleTitle VARCHAR(30) NOT NULL,
    roleSalary DECIMAL(10, 2) NOT NULL,
    departmentId INT NOT NULL,
    FOREIGN KEY (departmentId) REFERENCES departments(departmentId),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

// -- Create an 'employees' table
CREATE TABLE employees (
    employeeId INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(30) NOT NULL,
    lastName VARCHAR(30) NOT NULL,
    roleId INT NOT NULL,
    managerId INT,
    FOREIGN KEY (roleId) REFERENCES roles(roleId),
    FOREIGN KEY (managerId) REFERENCES employees(employeeId),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
