// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get("sequelizeClient");
  const users = sequelizeClient.define(
    "users",
    {
      first_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      avatar: {
        type: DataTypes.STRING,
        allowNull: true
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false
      },
      gender: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      bod: {
        type: DataTypes.DATE,
        allowNull: true
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      bio: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      point: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      bank_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      no_rek: {
        type: DataTypes.STRING,
        allowNull: false
      },
      id_joblevel: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      id_region: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      id_branch: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      manager: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true
      }
    },
    {
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    }
  );

  users.associate = function(models) {
    // eslint-disable-line no-unused-vars
    // Define associations here
    users.hasMany(models.jobslevel, {
      foreignKey: "id_joblevel",
      sourceKey: "id_joblevel"
    });
    users.hasMany(models.regionals, {
      foreignKey: "id_region",
      sourceKey: "id_region"
    });
    users.hasMany(models.branches, {
      foreignKey: "id_branch",
      sourceKey: "id_branch"
    });
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return users;
};
