require('dotenv').config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(`postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`, {
    // logging: (...msg) => console.log('DB_LOG: ', msg)
    logging: false
});

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


module.exports = client