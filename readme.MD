# Node.js Starter

This is a starter template for building Node.js applications. It includes a set of tools and packages commonly used in Node.js development. Use this template as a foundation to quickly kickstart your projects.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)
- [License](#license)

## Features

- Express.js framework for building web applications.
- Middleware like `morgan` for HTTP request logging, `cookie-parser` for handling cookies, and `cors` for handling cross-origin requests.
- `dotenv` for loading environment variables from a `.env` file.
- Templating with `ejs`.
- Database integration using `sequelize` with support for PostgreSQL and SQLite.
- `nodemailer` for sending emails.
- Logging with `winston`.
- Development tools like `nodemon` and `concurrently`.
- Code linting with `eslint`.
- Code formatting with `prettier`.
- Written in TypeScript.

## Prerequisites

Before using this starter template, ensure you have the following software installed:

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- Package manager: npm (v8 or higher) or yarn

## Getting Started

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/nodejs-starter.git
   cd nodejs-starter
   ```

2. Install the project dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and configure your environment variables:

    For different database types (`mysql`, `postgres`, `sqlite`, `mssql`), use the following variables:

    - **DB_DIALECT** : The type of database you're using.
    - **DB_NAME** : The name of your database.
    - **DB_USERNAME** : The username for accessing the database.
    - **DB_PASSWORD** : The password for the database user.
    - **DB_HOST** : The host or connection URL for your database.

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Your Node.js application should now be running at http://localhost:9000.

## Scripts

- `build`: Compiles TypeScript files into JavaScript files using the TypeScript compiler.
- `start`: Runs the compiled JavaScript files in the `dist` directory.
- `dev`: Starts the development server using `nodemon` and watches for changes with TypeScript compiler in watch mode.
- `lint`: Lints your code using ESLint.
- `format:write`: Formats your code using Prettier and applies changes.
- `format:check`: Checks if your code is formatted correctly using Prettier.

For running these scripts, use the command: `npm run script-name`.

## Dependencies

This project uses a variety of dependencies. Some of the key ones include:

- `express`: Web framework for building web applications.
- `sequelize`: Multi-dialect ORM (Object-Relational Mapping) for Node.js.
- `dotenv`: Loads environment variables from a `.env` file.
- `ejs`: Templating engine for rendering views.
- `winston`: Logging library.
- And more. Check `package.json` for the full list.

## Dev Dependencies

Development tools and typescript-related packages are included as dev dependencies. Some of them are:

- `typescript`: A superset of JavaScript that provides optional static typing.
- `eslint`: A tool for identifying and reporting on patterns in JavaScript and TypeScript code.
- `prettier`: Code formatter that helps maintain consistent coding styles.
- `nodemon`: Monitors for changes and automatically restarts the server.
- `concurrently`: Runs multiple commands concurrently.
- And more. Check `package.json` for the full list.

## License

This project is licensed under the [ISC License](LICENSE). Feel free to modify and use it for your own projects.

---

Feel free to customize this starter template to fit your project's requirements. Happy coding! 🚀
