# NPI Search Application

The NPI Search Application is a full-stack web application that allows users to search for healthcare providers registered in the National Provider Identifier (NPI) registry. This application uses Node.js with Express for the backend as well as React with Typescript for the frontend.  It is organized into a monorepo using yarn.

## Project Structure

- `/backend` - Contains all the server-side code including the API integrations.
- `/frontend` - Contains all the client-side code including React components and styling.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/en/) (v18.19.1 Recommended)
- [Yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository:
   ```bash
   git clone `https://github.com/brooksmarka/npi-search-app`
   cd npi-search-app
   ```
2. Install Dependencies:
    ```bash
    yarn install
    ```

## Running the Application

1. To run both the frontend and backend run:
    ```bash
    yarn dev
    ```

The backend will start at `http://localhost:3001` and the frontend will be available at `http://localhost:5173/`.

2. Navigate to `http://localhost:5173/` to view the app.

## Environment Variables (optional)

1. While not required you can create a `.env` file in the `backend` directory with the following:
    ```bash
    PORT=3001
    ```
