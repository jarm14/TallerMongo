const sequelize = require('./common/mariadb');

const app = require('./app')
const { port } = require('./dbconfig')



sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        app.listen(port, () => {
            console.log(`Server running in port: ${port}`)
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });