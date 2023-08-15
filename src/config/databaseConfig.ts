import { Sequelize } from "sequelize";

const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_DIALECT } = process.env;

let CONNECTION_STRING;

if (DB_DIALECT === "mysql") {
  CONNECTION_STRING = `mysql://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;
} else if (DB_DIALECT === "postgres") {
  CONNECTION_STRING = `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;
} else if (DB_DIALECT === "sqlite") {
  CONNECTION_STRING = `sqlite:${DB_NAME}.db`;
} else if (DB_DIALECT === "mssql") {
  CONNECTION_STRING = `mssql://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;
} else {
  CONNECTION_STRING = "sqlite::memory:";
}

const sequelize = new Sequelize(CONNECTION_STRING, {
  logging: false,
});

const client = {
  connect: async (callback: (e: any) => void) => {
    try {
      await sequelize.authenticate();
      callback(null);
    } catch (err: any) {
      callback(err);
    }
  },
  sequelize,
};

export default client;
