const crypt =  require('./crypt');
const mysql = require('mysql');
const con  = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123',
    database:'passport-auth'
});


var db = {};

con.connect((err)=>{
    if(err){
        console.log('database is not connected');
        return;
    }
    console.log('database is connected');

})


db.addUser = function(user,successCallBack,failureCallBack){

    var passwordHash;
    crypt.genHash(user.password,(res)=>{

        con.query("INSERT INTO `passport-auth`.`users` (`user_email`, `password`) VALUES ('" + user.email + "', '" + res + "');",(err,rows)=>{
            if(err){
                failureCallBack(err);
                return;
            }
            successCallBack();
        })

    },(err)=>{
      failureCallBack(err);
    }
    )

}


db.findUser = function(user,successCallBack,failureCallBack){


    const email = user.email;
    con.query( "SELECT * FROM `passport-auth`.users WHERE `user_email` = '" + user.email + "';",(err,rows)=>{
        if(err){
            failureCallBack(err);
            console.log(err);
            return;
        }
        if(!rows.length){
            failureCallBack("no user found");
            return;
        }
        console.log(rows);
       successCallBack(rows[0]);
    })

}


module.exports = db;