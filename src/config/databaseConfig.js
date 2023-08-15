import { Sequelize } from 'sequelize';

const {
    DB_NAME,
    DB_USERNAME,
    DB_PASSWORD,
    DB_HOST,
    DB_DIALECT,
} = process.env;

const sequelize = DB_DIALECT !== undefined ? new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_DIALECT,
}, { logging: false }) : new Sequelize("sqlite::memory", { logging: false });

const client = {
    connect: async (callback) => {
        try {
            await sequelize.authenticate();
            callback(null);
        } catch(err) {
            callback(err);
        }
    },
    sequelize
}


export default client;