# User Management System

A full-stack **User Management System** built using **Flask, PostgreSQL, Docker, HTML, CSS, and JavaScript**.

This project provides a REST API for performing CRUD operations on users and includes a simple web-based frontend for managing users.

## 🚀 Features

* Add new users
* View all users
* View a single user
* Edit existing users
* Delete users
* REST API using Flask
* PostgreSQL database integration
* SQLAlchemy ORM
* Dockerized Flask application
* Dockerized PostgreSQL database
* Simple and responsive frontend
* API and frontend integration

## 🛠️ Technologies Used

| Technology       | Purpose                      |
| ---------------- | ---------------------------- |
| Python           | Backend programming          |
| Flask            | Web framework and REST API   |
| Flask-SQLAlchemy | Database ORM                 |
| PostgreSQL       | Relational database          |
| Docker           | Application containerization |
| Docker Compose   | Multi-container setup        |
| HTML             | Frontend structure           |
| CSS              | Frontend styling             |
| JavaScript       | Frontend functionality       |

## 🏗️ Architecture

```text
User
  │
  ▼
Frontend
HTML + CSS + JavaScript
  │
  │ HTTP Requests
  ▼
Flask REST API
  │
  │ SQLAlchemy
  ▼
PostgreSQL Database
```

The complete application runs using Docker Compose.

## 📁 Project Structure

```text
App/
│
├── app.py
├── Dockerfile
├── docker-compose.yml
├── requirements.txt
├── .gitignore
├── .env.example
├── README.md
│
└── frontend/
    ├── index.html
    ├── style.css
    └── script.js
```

## 🔗 API Endpoints

| Method | Endpoint      | Description         |
| ------ | ------------- | ------------------- |
| POST   | `/users`      | Create a new user   |
| GET    | `/users`      | Get all users       |
| GET    | `/users/<id>` | Get a specific user |
| PUT    | `/users/<id>` | Update a user       |
| DELETE | `/users/<id>` | Delete a user       |
| GET    | `/test`       | Test the API        |

### Example User JSON

```json
{
    "username": "Sathvika",
    "email": "sathvika@example.com"
}
```

## 🐳 Docker Setup

The project uses two Docker containers:

```text
┌─────────────────────────┐
│       Flask App         │
│        Port 4000        │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│      PostgreSQL         │
│        Port 5432        │
└─────────────────────────┘
```

Docker Compose manages both services and ensures that the Flask application starts after PostgreSQL becomes healthy.

## ▶️ How to Run

### 1. Clone the repository

```bash
git clone https://github.com/sathvikanikki5/user-management-system.git
```

### 2. Open the project

```bash
cd user-management-system
```

### 3. Create `.env`

Create a `.env` file in the project root:

```env
POSTGRES_PASSWORD=postgres
POSTGRES_USER=postgres
POSTGRES_DB=postgres
DB_URL=postgresql://postgres:postgres@flask_db:5432/postgres
```

> Do not upload `.env` to GitHub. It is already included in `.gitignore`.

### 4. Build and start the containers

```bash
docker compose up -d --build
```

### 5. Check running containers

```bash
docker compose ps
```

### 6. Open the application

Open this in your browser:

```text
http://localhost:4000
```

## 🧪 Testing

The REST API can be tested using tools such as **Postman**.

Example:

```text
POST http://localhost:4000/users
```

Request body:

```json
{
    "username": "Sathvika",
    "email": "sathvika@example.com"
}
```

## 📌 Project Highlights

* Implemented complete **CRUD operations**
* Connected Flask backend with PostgreSQL
* Used **SQLAlchemy ORM** for database operations
* Containerized the application using Docker
* Used Docker Compose for Flask and PostgreSQL services
* Built a frontend that communicates with the REST API
* Implemented PostgreSQL health checks for reliable container startup

## 👩‍💻 Author

**Sathvika Nikki**

GitHub: [sathvikanikki5](https://github.com/sathvikanikki5)

---

⭐ If you find this project useful, consider giving the repository a star.
