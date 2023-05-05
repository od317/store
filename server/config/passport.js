const jwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;



const db = require('../app/db');

const config = require('./main');

const opt = {
    jwtFromRequest:ExtractJwt.fromAuthHeader(),
    secretOrKey:config.secret
}



module.exports = (passport)=>{


    passport.use(new jwtStrategy(opt,(jwt_payload,callback)=>{

        db.findUser({email:jwt_payload.user_email},(res)=>{

            let user = res;
            delete user.password;
            callback(null,user);  
       
       },(err)=>{
       
          callback(err,false);
       
       })
       

    }))




    passport.use(new GoogleStrategy({
        clientID:"351082460215-9tf13u3me54aq02nognlgm36q55lg7je.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: "http://localhost:3500/auth/google",
        passReqToCallback   : true
      },
      function(request, accessToken, refreshToken, profile, done) {
          return done(err,profile);
      }
    ));
    
    passport.serializeUser((user,done)=>{
            done(null,user);
    });

    passport.deserializeUser((user,done)=>{
            done(null,user);
    });



}