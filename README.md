# Movie Database System

A comprehensive web application for managing and exploring movie information, built with React and MySQL.

## Features

- Browse and search movies
- View detailed movie information
- User authentication and authorization
- Admin privileges for managing movie data
- CRUD operations for movie entries
- View actor, director, and crew details
- Track movie revenue and performance
- Genre-based movie categorization

## Tech Stack

- Frontend: React.js
- Backend: Node.js
- Database: MySQL
- Styling: CSS

## Prerequisites

Before running this project, make sure you have the following installed:
- Node.js (v14 or higher)
- MySQL Server
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd Movie-Database-system
```

2. Install dependencies:
```bash
npm install
```

3. Import the database:
```bash
mysql -u [username] -p [database_name] < Dump20231110.sql
```

4. Start the development server:
```bash
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

- `/src` - Contains all React components and application logic
  - `/components` - React components including Navbar, MovieCard, etc.
  - `/images` - Static image assets
  - `/views` - EJS templates for server-side rendering

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
