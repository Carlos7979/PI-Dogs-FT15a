const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    lifeSpan: {
      type: DataTypes.STRING
    },
    urlImage: {
      type: DataTypes.STRING
    },
  }, {
    hooks: {
      beforeValidate: dog => {
        if (!dog.name) return;
        const number = parseInt(dog.name);
        if (Number.isNaN(number)) return;
        if(typeof number === 'number') throw new Error ('Name cannot be a number');
      }
    },
    indexes: [
      { 
        unique: true,   
        name: 'unique_name',  
        fields: [sequelize.fn('lower', sequelize.col('name'))]   
      }
    ]
  });
};
