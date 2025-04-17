MERN Todo App

A simple Todo application built with the MERN stack (MongoDB, Express, React, Node.js) that allows users to perform CRUD operations on tasks.
Features

    Create: Add a new task to your todo list.

    Read: View all tasks in the todo list.

    Update: Edit an existing task's details.

    Delete: Remove a task from the todo list.

Technologies Used

    Frontend: Vite + React + TypeScript

    Backend: Node.js, Express

    Database: MongoDB (Mongoose ORM)

Installation
1. Clone the repository

git clone https://github.com/DimitrisKarkanorachakis/MERN-todo-app.git
cd MERN-todo-app

2. Install dependencies for both frontend and backend
Frontend:

Navigate to the frontend folder and install the frontend dependencies:

cd frontend
npm install

Backend:

Navigate to the backend folder and install the backend dependencies:

cd ../backend
npm install

3. Set up environment variables

Create a .env file in the backend folder and add the following variables:

MONGO_URI=your_mongodb_connection_string
PORT=5000

4. Run the application
Frontend:

cd frontend
npm run dev

Backend:

cd backend
npm start

The frontend will be available at http://localhost:3000 and the backend at http://localhost:5000.
