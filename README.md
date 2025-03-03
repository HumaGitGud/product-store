# product-store

Product Store Web App 🛍️

A backend web application for managing product inventory using Node.js, Express.js, Sequelize, and MySQL. This app allows users to browse product listings, filter by categories, view product details, and add new products through a dynamic form.

Features:
* Full CRUD Operations (Create, Read, Update, Delete)
* Sequelize ORM with MySQL Database
* MVC Architecture
* Server-side rendering with Pug Templating Engine
* Dynamic Category Filtering
* Responsive modern UI
* Product features input via comma-separated lists
* Dockerized environment with Docker Compose
* phpMyAdmin integration for database management

Technologies Used:
* Node.js
* Express.js
* Sequelize ORM
* MySQL
* Pug
* Docker
* phpMyAdmin
* Nodemon

Installation:
* Clone Repository
* git clone <repository_url>
Install Dependencies:
* npm install
* Configure Environment Variables
* Create a .env file in the project root with the following variables:

DB_NAME=db_mname
DB_USER=username
DB_PASSWORD=user_password
DB_HOST=db
DB_PORT=3307
DB_DIALECT=mysql

Database Setup with Docker:
To start MySQL and phpMyAdmin containers:
* docker-compose up -d
* go to localhost:8080, login as root, set privileges for user
* go to localhost:8080, login as user to see if its working
* Run server - npm run dev
* Seed database - npm run seed

Server will be running at http://localhost:3000

Folder Structure

.
├── db               # Database connection
├── models           # Sequelize models
├── controllers      # Controller functions
├── routes           # Express routes
├── views            # Pug templates
├── public           # CSS and static files
└── scripts          # Database seeding scripts