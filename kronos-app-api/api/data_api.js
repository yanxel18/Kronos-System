'use strict';
const con = require('../Connection/connection');
 
module.exports = {
    GetData: function (req, res, next) {
        var board_id= req.query.boardID;
        var query = "call Sp_select_board_group("+ board_id +");";
        con.open_db().getConnection(function (err, connection) {
            try {
                if (err) {
                    res.json(err);
                    return next();
                }
                connection.query({ sql: query, timeout: 10 }, function (err, rows) {
                    res.json(rows);
                    connection.release();
                    if (err) {
                        res.json(err);
                    }
                    return next();
                });
            }
            catch (err) {
                console.error(err.message);
                return next();
            }
        });
    },
    UpdateStatusIn: function (req, res, next){
        var id_code =  req.body.idcode 
        var query = "CALL Sp_update_status_IN('"+ id_code +"')"
        con.open_db().getConnection(function (err, connection) {
            try {
                if (err) {
                    res.json(err);
                    return next();
                }
                connection.query({ sql: query, timeout: 10 }, function (err, rows) {
                    res.json(rows);
                    connection.release();
                    if (err) {
                        res.json(err);
                    }
                    return next();
                });
            }
            catch (err) {
                console.error(err.message);
                return next();
            }
        });


    },
    UpdateStatusOut: function (req, res, next){
        var id_code =  req.body.idcode 
        var query = "CALL Sp_update_status_OUT('"+ id_code +"')"
        con.open_db().getConnection(function (err, connection) {
            try {
                if (err) {
                    res.json(err);
                    return next();
                }
                connection.query({ sql: query, timeout: 10 }, function (err, rows) {
                    res.json(rows);
                    connection.release();
                    if (err) {
                        res.json(err);
                    }
                    return next();
                });
            }
            catch (err) {
                console.error(err.message);
                return next();
            }
        });


    },
    UpdateStatusLeave: function (req, res, next){
        var id_code =  req.body.idcode 
        var query = "CALL Sp_update_status_Leave('"+ id_code +"')"
        con.open_db().getConnection(function (err, connection) {
            try {
                if (err) {
                    res.json(err);
                    return next();
                }
                connection.query({ sql: query, timeout: 10 }, function (err, rows) {
                    res.json(rows);
                    connection.release();
                    if (err) {
                        res.json(err);
                    }
                    return next();
                });
            }
            catch (err) {
                console.error(err.message);
                return next();
            }
        });


    },GetStatusMenu: function (req, res, next) {
        var board_id= req.query.boardID;
        console.log(board_id)
        var query = "call Sp_select_location_perboard("+ board_id +");"; 
        con.open_db().getConnection(function (err, connection) {
            try {
                if (err) {
                    res.json(err);
                    return next();
                }
                connection.query({ sql: query, timeout: 10 }, function (err, rows) {  
                    res.json(rows[0]);
                    connection.release();
                    if (err) {
                        res.json(err);
                    }
                    return next();
                });
            }
            catch (err) {
                console.error(err.message);
                return next();
            }
        });
    },
    UpdateOtherStatus: function (req, res, next){
        var q = req.body
        var userid =  q.userid
        var locationid = q.locationid
        var remarks = q.remarks
        console.log(q)
        var query = "CALL Sp_update_location_Others_web('"+ userid +"','"+ locationid +"','"+ remarks +"')"
        //var query = "CALL Sp_update_status_Othrs('"+ id_code +"')"
        con.open_db().getConnection(function (err, connection) {
            try {
                if (err) {
                    res.json(err);
                    return next();
                }
                connection.query({ sql: query, timeout: 10 }, function (err, rows) {
                    res.json(rows);
                    connection.release();
                    if (err) {
                        res.json(err);
                    }
                    return next();
                });
            }
            catch (err) {
                console.error(err.message);
                return next();
            }
        });


    },
};
 
