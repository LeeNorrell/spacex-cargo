import { db } from "../database";


export const migrate = () => {
  db.serialize(() => {
    db.run(
      `
      CREATE TABLE IF NOT EXISTS articles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        destination TEXT NOT NULL,
      );
    `,
      (err) => {
        if (err) {
          console.error(err.message);
        }
        console.log("articles table created successfully.");
      }
    );
  });
}


// import { DataTypes } from '@sequelize/core';
// import sequelize from '../db/index';


// const destination = sequelize.define('destination', {
//   id: {
//     type: DataTypes.STRING,
//     primaryKey: true,
//   },
//   destination: {
//    type: DataTypes.TEXT,
//   } 
// });

// export default destination;