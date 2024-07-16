import { DataTypes } from '@sequelize/core';
import sequelize from '../db/index';


const destination = sequelize.define('destination', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  destination: {
   type: DataTypes.TEXT,
  } 
});

export default destination;