const db = require('../db');

const inserintoDB = (req,res) => {

    const connection = db.con;
    var fname = req.body.firstname;
    var lname = req.body.lastname;
    var dob = req.body.dob;
    var contact = req.body.contact;
    var email = req.body.email;
    console.log(fname+" "+lname+" "+dob+" "+contact+" "+email);
    var query = `Insert into library.Users(Firstname,Lastname,date_of_birth,contact_number,email) 
     values('${fname}','${lname}','${dob}','${contact}','${email}'`+");";
    console.log(query);
    try{
       var result =  db.queryExec(connection,query);
       console.log(result);
       res.redirect('/html/user.html');
    }catch(error){
        console.log(error);
        throw error;
    }
}

module.exports = {
    inserintoDB
};
