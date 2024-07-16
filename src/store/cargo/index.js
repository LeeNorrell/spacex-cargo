import { db } from "../database";


export const migrate = () => {
  db.serialize(() => {
    db.run(
      `
      CREATE TABLE IF NOT EXISTS articles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        customer TEXT NOT NULL,
        weight TEXT NOT NULL,
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


// const cargo = sequelize.define('cargo', {
//   id: {
//     type: DataTypes.STRING,
//     primaryKey: true,
//   },
//   customer: {
//     type: DataTypes.STRING,
//   },
//   weight: {
//    type: DataTypes.INTEGER,
//   }, 
//   destination: {
//    type: DataTypes.STRING,
//   } 
// });

// export default cargo;
