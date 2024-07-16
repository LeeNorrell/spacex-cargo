import { db } from "../database";


export const migrate = () => {
  db.serialize(() => {
    db.run(
      `
      CREATE TABLE IF NOT EXISTS articles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        cargo TEXT NOT NULL,
        launchDate TEXT NOT NULL,
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


// const launch = sequelize.define('launch', {
//   id: {
//     type: DataTypes.STRING,
//     primaryKey: true,
//   },
//   cargo: {
//     type: DataTypes.STRING,
//   },
//   launchDate: {
//    type: DataTypes.DATE,
//   }, 
//   destination: {
//    type: DataTypes.STRING,
//   } 
// });

// export default launch;