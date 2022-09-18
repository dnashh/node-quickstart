const app = require('./app');
const connection = require('./src/config/database');
const PORT = process.env.PORT || 9000;
const HOST = process.env.HOST || 'http://localhost';

app.listen(PORT, () => {
    console.log(`Server Listening at ${HOST}:${PORT}`);
    connection.connect(err => {
        if (err) {
            console.log(err);
        }
    });
});