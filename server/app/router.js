const express = require('express');
const db = require('./db');
const crypt = require('./crypt');
const passport = require('passport');
const config = require('../config/main');
const jwt = require('jsonwebtoken');


var requireAuth = passport.authenticate('jwt',{session:false});


module.exports = (app)=>{

    app.use(passport.initialize());

    require('../config/passport')(passport);

    const router = express.Router();

    router.post('/register',(req,res,next)=>{


        if (!req.body.email || !req.body.password) {
            res.status(400).json({success: false, message: 'Please enter email and password.'});
        }
        let email = req.body.email;
        let password = req.body.password;

        db.addUser({email:email,password:password},(ress)=>{
            let user = {user_email:email}
            const token = jwt.sign(user,config.secret);
            res.status(201).json({success: true, message: 'Successfully created new user.',token:token})

        },(err)=>{

            return res.status(400).json({success: false, message: 'That email address already exists.'});

        })

    

    });



    router.post('/login',(req,res,next)=>{

        const email = req.body.email;
        const password = req.body.password;
        db.findUser({email:email},(ress)=>{

         let user = {
            user_id: ress.user_id,
            user_email: ress.user_email,
            is_active: ress.is_active,
            user_type: ress.user_type         
        }


        crypt.compHash(req.body.password,ress.password,(err,isMatch)=>{

           if(!err&&isMatch){
             const token = jwt.sign(user,config.secret);
             res.status(201).json({success: true, token: 'JWT ' + token});
           }
           else{
            console.log(err);
            res.status(401).json({
                success: false,
                message: 'Authentication failed. Passwords did not match.'
            });
           }

        })
         

        },(err)=>{

            return  res.status(401).json({success: false, message: 'Authentication failed. User not found.'});

        })
    

    })

    router.get('/auth',requireAuth,(req,res,next)=>{
        console.log(req.body.token)
        res.json({success:true});
   });


  app.use(router);


}