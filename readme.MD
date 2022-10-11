# Node Quickstart

a template repository to QuickStart a new Project in NodeJS with express.

---

## Quickstart

To install the required packages.

```bash
npm install
```

and then to start the project

```bash
npm start
```

To run in development mode with Auto Reload by Nodemon on save

```bash
npm run dev
```

Now the project is running locally at [http://localhost:9000](http://localhost:9000)

You can change the Port by adding an env variable **PORT** and setting the required port of your choice.

## Dependencies

To get started quickly, some of the popular dependencies are installed when you run ```npm install```. They are

- [express](https://www.npmjs.com/package/express) - The HTTP server
- [cookie-parser](https://www.npmjs.com/package/cookie-parser) - for reading and parsing cookies in request and response
- [cors](https://www.npmjs.com/package/cors) - for making cross origin request from any web client framework
- [ejs](https://www.npmjs.com/package/ejs) - a simple templating language for server side rendering html from node
- [dotenv](https://www.npmjs.com/package/dotenv) - To work with environment variables
- [morgan](https://www.npmjs.com/package/morgan) - The Logger for additional information to be printed on the console.
- [nanoid](https://www.npmjs.com/package/nanoid) - Generates short url friendly unique ids. v3.1.1

## Database

This project by default is configured to work with [PostgreSQL](https://www.postgresql.org/) with [Sequelize](https://sequelize.org/). Therefore an additional two packages are used.

- [pg](https://www.npmjs.com/package/pg) - PostgreSQL client for node
- [sequelize](https://www.npmjs.com/package/sequelize) - NodeJS ORM for SQL Databases.

## Contribution

Feel free to contribute to this project by forking and making a pull request.
