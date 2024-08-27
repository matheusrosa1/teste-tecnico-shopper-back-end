import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';
import db from './index';
import { User } from '../../types/User';

export type UserInputtableFields = Optional<User, 'id'>;

type UserSequelizeMOdelCreator = ModelDefined<User, UserInputtableFields>;

export type UserSequelizeModel = Model<User, UserInputtableFields>;

const UserModel: UserSequelizeMOdelCreator = db.define('User', {
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'users',
  timestamps: false,
  underscored: true,
});

export default UserModel;