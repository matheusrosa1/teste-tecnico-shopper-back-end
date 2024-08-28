import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class Reading extends Model<InferAttributes<Reading>, InferCreationAttributes<Reading>> {
  declare measureUuid: CreationOptional<string>;
  declare measureDatetime: 'WATER' | 'GAS';
  declare measureValue: number;
  declare measureType: string;
  declare hasConfirmed: boolean;
  declare imageUrl: string;
  declare customerCode: string;
  declare confirmedValue: number;
}

Reading.init(
  {
    measureUuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      field: 'measure_uuid',
    },
    measureDatetime: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'measure_datetime',
    },
    measureType: {
      type: DataTypes.ENUM('WATER', 'GAS'),
      allowNull: false,
      field: 'measure_type',
    },
    hasConfirmed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'has_confirmed',
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'image_url',
    },
    measureValue: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'measure_value',
    },
    confirmedValue: {
      type: DataTypes.DECIMAL,
      field: 'confirmed_value',
    },
    customerCode: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'customer_code',
  },
},
  {
    sequelize: db,
    tableName: 'readings',
    timestamps: false,
  })