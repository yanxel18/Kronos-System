'use strict';
const con_limit = 10;
const con_db_ip = '172.21.75.144';
const con_user = 'bryan';
const con_pass = 'password';
const con_db = 'db_kronos';
module.exports =  {
    main_db: {
        connectionLimit: con_limit,
        host: con_db_ip,
        user: con_user,
        password: con_pass,
        database: con_db,
        debug: false
    }
};
 