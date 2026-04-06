# Developer Portfolio

A React + Vite portfolio for showcasing projects, skills, and background in a single-page layout. The Projects section pulls the latest public repositories directly from GitHub so the portfolio stays fresh as new work is pushed.

## Features

- Responsive single-page portfolio with Hero, Skills, Projects, About, and Contact sections
- GitHub-powered Projects section sorted by most recent push
- Light and dark theme toggle
- Smooth scrolling and animated UI with Framer Motion
- Centralized content configuration for profile details, skills, and links

## Tech Stack

- React
- Vite
- CSS
- Framer Motion
- React Icons
- GitHub REST API

## Getting Started

```bash
cd frontend
npm install
npm run dev
```

To create a production build:

```bash
cd frontend
npm run build
```

## Content Updates

Portfolio content is stored in:

```text
frontend/src/data/portfolioData.js
```

Update that file to change:

- name and hero text
- skills and proficiency values
- GitHub username and project limit
- contact links and email address

## Project Structure

```text
portfolio/
|-- frontend/
|   |-- public/
|   |-- src/
|   |   |-- components/
|   |   |-- data/
|   |   |-- assets/
|   |   |-- App.css
|   |   |-- App.jsx
|   |   `-- main.jsx
|   |-- package.json
|   `-- vite.config.js
`-- README.md
```

## Notes

- The email button is shown only when an email is provided in `portfolioData.js`.
- The Projects section reads public repositories from GitHub and may be rate-limited if the API is hit too often.

## Author

Mohit Bhatia
