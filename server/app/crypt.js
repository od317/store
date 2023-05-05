const bcrypt = require('bcrypt-nodejs');

let crypt= {};

crypt.genHash = (data,successCallBack,failureCallBack)=>{

   bcrypt.genSalt(10,(err,salt)=>{

     if(err){
      failureCallBack(err);
      return;
     }

     bcrypt.hash(data,salt,null,(err,hash)=>{

      if(err){
         failureCallBack(err)
         return;
      }

      successCallBack(hash);

     })

   })

}



crypt.compHash = (data,encrypted,successCallBack,failureCallBack)=>{


    bcrypt.compare(data,encrypted,(err,isMatch)=>{
      if(err){
         failureCallBack(err)
         return;
      }

      successCallBack(err,isMatch);

    })

}


module.exports = crypt;