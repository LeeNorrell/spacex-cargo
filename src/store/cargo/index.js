import { Sequelize, DataTypes } from '@sequelize/core';
import { SqliteDialect, OPEN_READWRITE } from '@sequelize/sqlite3';

const sequelize = new Sequelize({
  storage: 'file:./db/spacexcargo.db',
  mode: OPEN_READWRITE,
});

const cargo = sequelize.define('cargo', {
  customer: DataTypes.STRING,
  weight: DataTypes.INTEGER,
  destination: DataTypes.STRING
});

export default cargo;
