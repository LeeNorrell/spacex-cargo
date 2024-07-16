import { DataTypes } from '@sequelize/core';
import sequelize from '../db/index';


const cargo = sequelize.define('cargo', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  customer: {
    type: DataTypes.STRING,
  },
  weight: {
   type: DataTypes.INTEGER,
  }, 
  destination: {
   type: DataTypes.STRING,
  } 
});

export default cargo;
