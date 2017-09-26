"use strict";
exports.__esModule = true;
var sequelize_1 = require("sequelize");
var config_db_connection_1 = require("../config/config_db_connection");
var Post = config_db_connection_1["default"].define('Post', {
    id: {
        type: sequelize_1["default"].INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    userid: {
        type: sequelize_1["default"].STRING,
        allowNull: false
    },
    title: {
        type: sequelize_1["default"].STRING,
        allowNull: false
    },
    content: {
        type: sequelize_1["default"].STRING,
        allowNull: false
    },
    createdAt: {
        type: 'TIMESTAMP'
    },
    updatedAt: {
        type: 'TIMESTAMP'
    }
}, { tableName: "Post", createdAt: "createdAt", updatedAt: "updatedAt" });
exports["default"] = Post;
