let sqlite3 = require('sqlite3').verbose();
/* Load database file (Creates file if not exists) */
let db = new sqlite3.Database('./sqlite.db');

let init = function() {
    db.run("CREATE TABLE if not exists modelo (" +
        "codigoMarca TEXT PRIMARY KEY ," +
        " nombre TEXT" +
        ")");
    db.run("CREATE TABLE if not exists marca (" +
        "codigo TEXT PRIMARY KEY," +
        " nombre TEXT" +
        ")");
    db.run("CREATE TABLE if not exists propietario (" +
        "cedula TEXT PRIMARY KEY," +
        " nombre TEXT," +
        " fechaNacimiento TEXT" +
        ")");
    db.run("CREATE TABLE if not exists driver (" +
        "placa TEXT PRIMARY KEY  CHECK (length(placa) == 7) " +
        " modelo TEXT," +
        " marca TEXT," +
        " anio INTEGER CHECK (anio>=1980 AND anio=<2019)" +
        " transmision TEXT," +
        " motor INTEGER," +
        " propietario TEXT" +
        ")");
};

module.exports = {
    init: init,
    db: db
};