# Expense Tracker Dashboard

A modern full-stack Expense Tracker Dashboard built using React, Vite, Node.js, and Express.js.

This application allows users to manage daily expenses with a clean glassmorphism UI, interactive analytics, responsive dashboard layout, and full CRUD functionality.

---

# Features

## Expense Management

* Add expenses
* View all expenses
* Edit existing expenses
* Delete expenses

## Dashboard Features

* Modern sidebar dashboard layout
* Responsive mobile-friendly UI
* Glassmorphism design system
* Interactive hover animations
* Summary analytics cards
* Dynamic expense analytics chart
* Route-based page navigation

## Analytics

* Expense category distribution
* Donut chart visualization
* Total expense calculation
* Highest expense tracking
* Latest category tracking

## Backend Features

* REST API architecture
* Express.js backend
* JSON file persistence
* Modular controller & route structure

---

# Tech Stack

## Frontend

* React.js
* Vite
* React Router DOM
* Recharts
* React Icons
* CSS3

## Backend

* Node.js
* Express.js

## Tools & Platforms

* Git & GitHub
* Postman
* VS Code

---

# Project Structure

```bash
expense-tracker/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   └── utils/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── utils/
│   ├── data/
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

## Frontend Setup

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

## Backend Setup

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

## Add Expense

```http
POST /api/expenses
```

## Update Expense

```http
PUT /api/expenses/:id
```

## Delete Expense

```http
DELETE /api/expenses/:id
```

---

# UI Highlights

* Purple gradient dashboard UI
* Glassmorphism cards and forms
* Expandable sidebar navigation
* Responsive mobile layout
* Interactive analytics visualization
* Modern dashboard styling

---

# Future Improvements

* Authentication system
* MongoDB integration
* Dark/Light theme toggle
* Search & filters
* Monthly analytics charts
* Export reports (PDF/CSV)
* User-specific expense tracking

---

# Author

Pranav Chamoli

GitHub:
https://github.com/PranavChamoli06
