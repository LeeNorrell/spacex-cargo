import { DataTypes } from '@sequelize/core';
import sequelize from '../db/index';


const launch = sequelize.define('launch', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  cargo: {
    type: DataTypes.STRING,
  },
  launchDate: {
   type: DataTypes.DATE,
  }, 
  destination: {
   type: DataTypes.STRING,
  } 
});

export default launch;