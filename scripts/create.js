const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(
  './cargo.db',
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log('Connected to the db');
  }
);

db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS cargo (
      id INTEGER PRIMARY KEY,
      weight INTEGER
    )`,
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log('created cargo table');

      db.run(`DELETE FROM cargo`,
        (err) => {
          if (err) {
            return console.error(err.message);
          }
          console.log('All rows deleted from cargo');

          const insertSql = `INSERT INTO cargo(weight) values (?)`;

          [
            300,
            400,
            500,
            600,
          ].forEach((weight) => {
            db.run(insertSql, weight, function (err) {
              if (err) {
                return console.error(err.message);
              }
              const id = this.lastID;
              console.log(`Row inserted, ID ${id}`);
            })
          })
        }
      )
    }
  );
});