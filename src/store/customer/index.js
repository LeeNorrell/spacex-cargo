import { DataTypes, Model } from '@sequelize/core';
import { Attribute, PrimaryKey, AutoIncrement, NotNull } from '@sequelize/core/decorators-legacy';
import { SqliteDialect } from '@sequelize/sqlite3';
import sequelize from '../db/index';

const sequelize = new Sequelize({ dialect: SqliteDialect });

export class customer extends Model {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  id;

  @Attribute(DataTypes.STRING)
  @NotNull
  firstName;

  @Attribute(DataTypes.STRING)
  lastName;
}