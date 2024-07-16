import { DataTypes } from '@sequelize/core';
import sequelize from '../db/index';


const rocket = sequelize.define('rocket', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  destination: {
   type: DataTypes.STRING,
  },
  cargoLimit: {
    type: DataTypes.STRING,
  },
});

export default rocket;