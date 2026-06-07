# Expense Tracker Dashboard

A modern full-stack Expense Tracker Dashboard built using React, Vite, Node.js, and Express.js.

This application helps users manage daily expenses with a responsive dashboard UI, interactive analytics, category filtering, validation system, and complete CRUD operations.

The project follows a modular full-stack architecture with separate frontend and backend layers.

---

# Features

## Expense Management

* Add new expenses
* View all expenses
* Edit existing expenses
* Delete expenses
* Dynamic expense updates

---

## Dashboard Features

* Modern glassmorphism dashboard UI
* Expandable sidebar navigation
* Responsive mobile-friendly layout
* Interactive analytics dashboard
* Dynamic summary cards
* Category-based filtering
* Loading state handling
* Empty state handling
* Form validation system

---

## Analytics

* Expense category distribution
* Interactive pie chart visualization
* Total expense calculation
* Highest expense tracking
* Category-wise analytics
* Real-time dashboard updates

---

## Validation Features

* Prevent negative expenses
* Prevent zero-value expenses
* Prevent future dates
* Required category validation

---

## Backend Features

* REST API architecture
* Express.js backend server
* Modular controller structure
* Route-based API handling
* JSON file persistence
* CRUD API implementation

---

# Tech Stack

## Frontend

* React.js
* Vite
* React Router DOM
* Recharts
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
* Interactive hover effects
* Responsive dashboard layout
* Expandable sidebar navigation
* Dynamic analytics visualization
* Modern modal editing system
* Clean table design

---

# Future Improvements

* Authentication system
* MongoDB integration
* User accounts
* Monthly analytics reports
* Expense search functionality
* PDF/CSV export system
* Dark/Light mode toggle
* Budget tracking system
* Expense history insights

---

# Learning Outcomes

This project demonstrates:

* Full-stack application architecture
* REST API integration
* React state management
* CRUD operations
* Dashboard UI development
* Responsive frontend design
* Component-based architecture
* Data visualization using charts

---

# Author

Pranav Chamoli

GitHub:
[PranavChamoli06 GitHub](https://github.com/PranavChamoli06)
