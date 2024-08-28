import { Model, QueryInterface, DataTypes } from 'sequelize'; 
import IReadingAttributes from '../../interfaces/IReadingAttributes';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IReadingAttributes>>('readings', {
      measureUuid: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
      },
      measureDatetime: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      measureType: {
        allowNull: false,
        type: DataTypes.ENUM('WATER', 'GAS'),
        field: 'measure_type',
      },
      hasConfirmed: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        field: 'has_confirmed',
      },
      imageUrl: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'image_url',
      },
      measureValue: {
        allowNull: false,
        type: DataTypes.DECIMAL,
        field: 'measure_value',
      },
      confirmedValue: {
        type: DataTypes.DECIMAL,
        field: 'confirmed_value',
      },
      customerCode: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'customer_code',
      },
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('readings');
  }
}