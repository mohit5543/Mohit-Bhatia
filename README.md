# Developer Portfolio (Full Stack)

This is a full-stack developer portfolio project that dynamically fetches repositories from GitHub and displays them in a clean and responsive interface. The goal of this project is to showcase projects in a structured and automatically updated way without manually editing portfolio content.

---

## Features

* Fetches repositories using the GitHub API
* Backend built with Node.js and Express
* Frontend connected to backend for dynamic data
* Projects update automatically based on GitHub profile
* Clean and responsive UI
* Structured layout with About and Contact sections

---

## Tech Stack

Frontend:

* HTML
* CSS
* JavaScript

Backend:

* Node.js
* Express.js
* Axios

---

## Installation and Setup

1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

2. Install backend dependencies

```bash
cd backend
npm install
```

3. Start the backend server

```bash
npm start
```

4. Run the frontend

If using a simple setup:

* Open `index.html` with Live Server

If using a bundler (Vite, etc.):

```bash
cd frontend
npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file inside the backend folder:

```
PORT=5000
GITHUB_USERNAME=your-github-username
```

Optional (recommended for higher rate limits):

```
GITHUB_TOKEN=your_token_here
```

---

## Project Structure

```
project-root/
│
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── .env
│
├── frontend/
│   ├── index.html
│   ├── src/
│
└── README.md
```

---

## Deployment

Frontend can be deployed on Vercel or Netlify.
Backend can be deployed on Render or Railway.

---

## Author

Mohit Bhatia
