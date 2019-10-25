const mysql = require('mysql');

const con = mysql.createConnection({
    host:'localhost',
    user:'user',
    password:'password'
});

const connect = con.connect((err) =>{
    if(err){
        console.log("Not connected"+err.message);
    }
     else{
         console.log("connected to database");
    }
    
});

//execute query
const queryExec = (connection, queryStr) => connection.connect(function(err) {
    connection.query(queryStr, function (err, result, fields) {
      if (err) return err;
        return result;
    });
});


module.exports= { 
    con,
    connect,
    queryExec
 };