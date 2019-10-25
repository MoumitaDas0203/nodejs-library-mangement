const db = require('../db');
 const isRegistered = (req,res) =>{
    var email = req.body.email;
    var pwd = req.body.psw;
    const connection = db.con;
    connection.connect((err) => {
        connection.query(`SELECT * FROM library.Users where email ='${email}'`, function (err, result, fields) {
          if (err) return err;
          if(result[0] == undefined) res.redirect('/html/Signup.html');
          else
          res.redirect('/html/index.html');
          //var email = JSON.parse(JSON.stringify(result[0])).email;
        });
  });
  
}

module.exports = {
    isRegistered
};
