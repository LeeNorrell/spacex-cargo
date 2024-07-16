import { db } from "../database";


export const migrate = () => {
  db.serialize(() => {
    db.run(
      `
      CREATE TABLE IF NOT EXISTS articles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        destination TEXT NOT NULL,
        cargoLimit TEXT NOT NULL,
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

// const rocket = sequelize.define('rocket', {
//   id: {
//     type: DataTypes.STRING,
//     primaryKey: true,
//   },
//   destination: {
//    type: DataTypes.STRING,
//   },
//   cargoLimit: {
//     type: DataTypes.STRING,
//   },
// });

// export default rocket;