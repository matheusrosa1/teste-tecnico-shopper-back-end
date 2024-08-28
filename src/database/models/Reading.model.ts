import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class Reading extends Model<InferAttributes<Reading>, InferCreationAttributes<Reading>> {
  declare measure_uuid: CreationOptional<string>;
  declare measure_datetime: 'WATER' | 'GAS';
  declare measure_type: string;
  declare has_confirmed: boolean;
  declare image_url: string;
  declare customer_code: string;
}

Reading.init(
  {
    measure_uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    measure_datetime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    measure_type: {
      type: DataTypes.ENUM('WATER', 'GAS'),
      allowNull: false,
    },
    has_confirmed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    measure_value: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    confirmed_value: {
      type: DataTypes.DECIMAL,
    },
  },
  {
    sequelize: db,
    tableName: 'readings',
  })