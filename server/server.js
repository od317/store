const express = require('express');
const cors = require('cors');



const stytch = require("stytch");
const dotenv = require('dotenv');
const { faLess } = require('@fortawesome/free-brands-svg-icons');

dotenv.config()

const envs = stytch.envs;
const Client = stytch.Client;



const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const client = new Client({
    project_id:process.env.PROJECT_ID,
    secret:process.env.SECRET,
    env:envs.test
})

app.post('/register',async(req,res)=>{
    const {email,password} = req.body;
    try{
        const resp = await client.passwords.create({
            email,
            password,
            session_duration_minutes:60,
        })

        res.json({
            success:true,
            message:"done",
            token:resp.session_token
        })
    }catch(err){

      console.log('err')
      res.josn({
        success:false,
        message:err.error_message,
        err:err
      })

    }
})





app.listen(process.env.PORT||3500,console.log('server is running'));