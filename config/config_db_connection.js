"use strict";
exports.__esModule = true;
var sequelize_1 = require("sequelize");
var config_db_1 = require("./config_db");
var sequelize = new sequelize_1["default"](config_db_1["default"].database, config_db_1["default"].user, config_db_1["default"].password, {
    'host': 'localhost',
    'dialect': 'mysql'
});
exports["default"] = sequelize;
