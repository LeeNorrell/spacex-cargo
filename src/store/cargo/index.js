import { db } from "../database";

export const create = (props) => {
  const {
    weight,
  } = props;

  if (weight == null) {
    return false;
  }

  db.serialize(() => {
    db.run(
      `CREATE TABLE IF NOT EXISTS cargo (
        id INTEGER PRIMARY KEY,
        weight INTEGER
      )`,
      (err) => {
        if (err) {
          console.error(err.message);
          return false;
        }

        db.run(`INSERT INTO cargo(weight) values (?)`, weight, function(err) {
          if (err) {
            console.error(err.message);
            return false;
          }
          return true;
        });
      }
    );
  });

  return true;
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
