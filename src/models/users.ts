// import client from "../dbconnect";

//-------------------Sequelize------------------------------------------------------------------------//
import Sequelize from "sequelize";
import DataTypes from "sequelize";
import db from '../config/dbconnect';



const usermodel = db.define('user', {
  firstname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  middlename: {
    type: DataTypes.STRING
  },
  lastname: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  phonenumber: {
    type: DataTypes.INTEGER
  },

  role: {
    type: DataTypes.STRING
  },
  address: {
    type: DataTypes.STRING
  }
}, {
});

export default usermodel;

 // ---------------Sequelize ------------------------------------------------//

