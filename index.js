import app from './app.js';
import connection from './src/config/databaseConfig.js';
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