# React Project Setup Guide

This project is built using **React** and **Vite**.

---

# Prerequisites

Before creating or running this project, ensure the following software is installed:

- **Node.js** (v20.19.6 or later)
- **npm** (v10.8.2 or later)

Verify your installation:

```bash
node -v
npm -v
```

Expected output:

```text
v20.19.6
10.8.2
```

---

# Creating a New React Project

## Step 1: Navigate to your projects directory

```bash
cd ~/Projects
```

or

```bash
cd /var/www/html
```

---

## Step 2: Create a React project using Vite

```bash
npm create vite@latest
```

When prompted, select the following options:

### Project Name

```text
my-react-app
```

### Framework

```text
React
```

### Language

```text
JavaScript
```

### Linter

```text
ESLint
```

After completion, Vite will generate the project structure.

---

## Step 3: Navigate into the project

```bash
cd my-react-app
```

---

## Step 4: Install project dependencies

```bash
npm install
```

or

```bash
npm i
```

This command installs all packages listed in `package.json`.

---

## Step 5: Start the development server

```bash
npm run dev
```

Example output:

```text
VITE v7.x.x ready in 400ms

➜ Local:   http://localhost:5173/
➜ Network: use --host to expose
```

Open the following URL in your browser:

```
http://localhost:5173
```

---

# Opening the Project

Open the project in Visual Studio Code:

```bash
code .
```

---

# Project Structure

```
my-react-app
│
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

# Available Commands

## Install Dependencies

```bash
npm install
```

---

## Start Development Server

```bash
npm run dev
```

---

## Build for Production

```bash
npm run build
```

The production build will be generated inside the `dist/` folder.

---

## Preview Production Build

```bash
npm run preview
```

---

## Run ESLint

```bash
npm run lint
```

---

## Install a Package

```bash
npm install package-name
```

Example:

```bash
npm install axios
```

---

## Remove a Package

```bash
npm uninstall package-name
```

---

## Update Packages

```bash
npm update
```

---

# Common Packages

## React Router

```bash
npm install react-router-dom
```

## Axios

```bash
npm install axios
```

## Bootstrap

```bash
npm install bootstrap
```

---

# Project Workflow

```text
Create Project
        │
        ▼
npm create vite@latest
        │
        ▼
cd my-react-app
        │
        ▼
npm install
        │
        ▼
npm run dev
        │
        ▼
Open http://localhost:5173
        │
        ▼
Start Developing
```

---

# Useful Files

| File | Purpose |
|------|---------|
| `main.jsx` | React application entry point |
| `App.jsx` | Main application component |
| `App.css` | Styles for App component |
| `index.css` | Global application styles |
| `package.json` | Project configuration and dependencies |
| `vite.config.js` | Vite configuration |
| `index.html` | HTML template |

---

# Technologies Used

- React
- Vite
- JavaScript (ES6+)
- ESLint

---

# Commands to run
```bash
npm install react-router-dom
```
# Author

**Dev Parmar**# learn-react
