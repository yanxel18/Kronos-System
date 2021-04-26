'use strict';
const con_info = require('./connection_info');
const mysql = require('mysql');
var open_db;
module.exports =  {
    open_db: function () {
        if (open_db) {
            return open_db;
        }
        open_db = mysql.createPool(con_info.main_db);
        return open_db;
    }
}; 