# Expense Tracker Dashboard

A modern full-stack Expense Tracker Dashboard built using React, Vite, Node.js, and Express.js.

This application helps users manage daily expenses through a professional dashboard interface featuring interactive analytics, responsive design, CSV export functionality, category filtering, form validation, and complete CRUD operations.

The project follows a modular full-stack architecture with separate frontend and backend layers for scalability and maintainability.

---

# Features

## Expense Management

* Add new expenses
* View all expenses
* Edit existing expenses
* Delete expenses with confirmation
* Dynamic expense updates
* Latest expenses displayed first

---

# Dashboard Features

* Modern glassmorphism dashboard UI
* Expandable responsive sidebar navigation
* Fully responsive mobile-friendly layout
* Interactive analytics dashboard
* Dynamic summary cards
* Category-based expense filtering
* CSV export functionality
* Loading state handling
* Empty state handling
* Error handling system
* Professional table layout
* Modal-based expense editing

---

# Analytics Features

* Expense category distribution
* Interactive pie chart visualization
* Real-time analytics updates
* Total expense calculation
* Highest expense tracking
* Total transaction tracking
* Latest category tracking
* Category-wise expense analytics

---

# Validation Features

* Prevent negative expenses
* Prevent zero-value expenses
* Prevent future dates
* Required category validation
* Safe delete confirmation workflow

---

# Backend Features

* REST API architecture
* Express.js backend server
* Modular controller structure
* Route-based API handling
* JSON file persistence
* Complete CRUD API implementation
* Newest-first expense sorting

---

# Tech Stack

## Frontend

* React.js
* Vite
* React Router DOM
* Recharts
* React CSV
* React Icons
* CSS3

---

## Backend

* Node.js
* Express.js

---

## Tools & Platforms

* Git & GitHub
* Postman
* VS Code

---

# Project Structure

```bash
expense-tracker/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── styles/
│   │   ├── assets/
│   │   └── main.jsx
│   │
│   ├── public/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── utils/
│   ├── middleware/
│   ├── data/
│   ├── app.js
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# Installation & Setup

## Clone Repository

```bash
git clone https://github.com/PranavChamoli06/expense-tracker.git
```

---

# Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# Backend Setup

```bash
cd server
npm install
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

# API Endpoints

## Get All Expenses

```http
GET /api/expenses
```

---

## Add Expense

```http
POST /api/expenses
```

---

## Update Expense

```http
PUT /api/expenses/:id
```

---

## Delete Expense

```http
DELETE /api/expenses/:id
```

---

# UI Highlights

* Purple gradient dashboard UI
* Glassmorphism card design
* Responsive dashboard architecture
* Expandable animated sidebar
* Interactive hover effects
* Responsive analytics visualization
* Modern modal editing system
* Responsive expense tables
* Professional empty states
* Mobile-friendly layout system

---

# Future Improvements

* Authentication system
* MongoDB integration
* User accounts
* Monthly analytics reports
* Expense search functionality
* PDF export support
* Dark/Light mode toggle
* Budget tracking system
* Expense history insights
* Cloud database integration

---

# Learning Outcomes

This project demonstrates:

* Full-stack application architecture
* REST API development
* React state management
* CRUD operations
* Dashboard UI development
* Responsive frontend design
* Component-based architecture
* Analytics dashboard implementation
* Data visualization using charts
* Frontend-backend integration
* Professional UI/UX practices

---

# Author

Pranav Chamoli

GitHub:
https://github.com/PranavChamoli06
