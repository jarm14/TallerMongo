let sqlite3 = require('sqlite3').verbose();
/* Load database file (Creates file if not exists) */
let db = new sqlite3.Database('./sqlite.db');

let init = function() {
    db.run("CREATE TABLE if not exists car (" +
        "id INTEGER PRIMARY KEY AUTOINCREMENT," +
        " maker TEXT," +
        " model TEXT," +
        " year INT," +
        " driver INT" +
        ")");

    db.run("CREATE TABLE if not exists driver (" +
        "id INTEGER PRIMARY KEY AUTOINCREMENT," +
        " firstName TEXT," +
        " lastName TEXT," +
        " car INT" +
        ")");
};

module.exports = {
    init: init,
    db: db
};