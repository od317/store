<script setup>

import {ref} from 'vue';
import { useRouter } from 'vue-router';

let router = useRouter();

let email = ref('');
let password = ref('');
let conf_password = ref('');

let regs = async ()=>{
 
    if(!email.value||!password.value||!conf_password.value){
        return  
    }

    if(password.value!==conf_password.value){
        return alert('password not macth')
    }

    const res = await fetch('http://localhost:3500/register',{
        method:'POST',
        headers:{
        'Content-Type': 'application/json'  
        },
        body:JSON.stringify({
            email:email.value,
            password:password.value
        })
    }).then(res => res.json()) 

    if(res.success){
     localStorage.setItem('token',res.token)   
     router.push('/');
    }
    else{
     alert(res.message);
    }

}


let t = ref('light');

t.value = localStorage.getItem('theme')||'light';


</script>



<template>
    
    <main>
        

    <form :class="`max login_from login_from_`+t" @submit.prevent="regs">


  <div class="form_header">
            <router-link to="/"><ion-icon name="bag-handle-outline" :class="`form_icon form_icon_`+t"></ion-icon></router-link> 
        </div>



       <div class="form_h_text2">make new account</div>

        <div class="input_div">
            <label>Enter you'r email</label>
             <br>
            <input type="email" 
            v-model="email" 
            placeholder="laith@gamil.com"/>
        </div>


        <div class="input_div">
            <label>Enter you'r password</label>
            <input type="password" 
            v-model="password" 
            placeholder="********"/>
        </div>


        <div class="input_div">
            <label>conf password</label>
            <input type="password" 
            v-model="conf_password" 
            placeholder="********"/>
        </div>


        <input 
        type="submit" 
        value="Register"
        :class="`login_button_`+t" 
        >

        <footer :class="`f footer_`+t">
            Do you have an ac? <router-link to="/login">Login</router-link>
            <br>
            <a :class="`google form_icon_`+t" href="https://test.stytch.com/v1/public/oauth/google/start?public_token=public-token-test-1714908c-17e4-45ad-8f8d-1be2b5d3c4d0"><ion-icon class="google" name="logo-google"></ion-icon></a>

        </footer>

    </form>




    <div class="min min-cont">

        <form :class="` login_from login_from-min login_from_`+t" @submit.prevent="login">
    
    
           <div class="form_h_text2">            
            <router-link to="/"><ion-icon name="bag-handle-outline" :class="`form_icon form_icon_`+t"></ion-icon></router-link> 
           </div>
    
            <div :class="`input_div-min input_div-min-`+t">
                <br>
                <label class="input-icon"><ion-icon name="bag-handle-outline" :class="`form_icon-min form_icon_`+t"></ion-icon></label>
                <input type="email"
                v-model="email" 
                placeholder="email"/>
            </div>
    
    
            <div :class="`input_div-min input_div-min-`+t">
                <label class="input-icon"><ion-icon name="bag-handle-outline" :class="`form_icon-min form_icon_`+t"></ion-icon></label>
                <input type="password" 
                v-model="password" 
                placeholder="password"/>
            </div>
    
            <div :class="`input_div-min input_div-min-`+t">
                <label class="input-icon"><ion-icon name="bag-handle-outline" :class="`form_icon-min form_icon_`+t"></ion-icon></label>
                <input type="password" 
                v-model="conf_password" 
                placeholder="conf_pass"/>
            </div>

            <input
            :class="`login_button_`+t" 
            type="submit" 
            value="Login">
    
            <footer :class="`f footer_`+t">
                have an ac? <router-link to="/login">Login</router-link>
                <br>
                <a :class="`google form_icon_`+t" href="https://test.stytch.com/v1/public/oauth/google/start?public_token=public-token-test-1714908c-17e4-45ad-8f8d-1be2b5d3c4d0"><ion-icon class="google" name="logo-google"></ion-icon></a>
            </footer>
        
        </form>
    
        </div>





    <div class="max login_sec">

        <div class="login_sec_text">Search and Buy online <br>
        from one of txte texte text <br>
        website name</div>
    
    
    </div>
</main>

</template>







<style scoped>



ion-icon{
    color:var(--light5);
}
.min{display: none;}

main{
    display:flex;
    flex-direction:row;
    justify-content: center;
    height: 100vh;
    background-color:var(--light5);
    color:#FFF;
    font-family: 'Andale' 'Mono', monospace	;
    overflow: hidden;
}

.login_sec{
    background:linear-gradient(90deg, rgba(0,0,0,0.05085784313725494) 0%, rgba(0,0,0,0.4682247899159664) 0%),url('https://img.lovepik.com/photo/40187/3684.jpg_wh860.jpg');
    /*background:linear-gradient(90deg, rgba(0,0,0,0.05085784313725494) 0%, rgba(0,0,0,0.4682247899159664) 0%),url('https://img.freepik.com/free-vector/flat-hand-drawn-people-shopping-sale_23-2148825440.jpg?w=2000');*/
    background-size:cover;
    background-position:center;
    background-repeat: no-repeat;
    width:55%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.login_sec_text{
    text-align: center;
    font-size: 1.5rem;
}

header{
    width:100vw;
}

footer{
    background-color:transparent;
    color:black;
    text-align: center;
    padding: 1.5rem;
    padding-bottom: 3rem;
    
}

h2{
    font-size: 2.125rem;
    margin-bottom: 1rem;

}

h2 ~ p{
    font-weight: 500;
    font-size: 1rem;
}

form{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:var(--light4);
    box-shadow: 0px -4px 12px 4px rgba(0,0,0,0.16);
    color:black;
    width:45%;
    height: 100%;
}
.form_header{
    
width: 100%;
height: 10vh;
padding: 1rem;
font-size: 2rem;
}


.form_h_text{
    font-size: 2rem;
    margin-bottom: 2rem;
}
.form_h_text2{
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.input_div{
    display: inline-block;
    margin-bottom: 2rem;
    width: 55%;
}

label{
color:gray;    
margin-bottom: .5rem;
}

input:not([type="submit"]){

    width:100%;
    border-radius: 5px;
    border: none;
    background-color:rgb(228, 208, 208);
    padding:.5rem;
    outline: none;
}

input:not([type="submit"])L::placeholder{
    
    color:black;
    font-style: italic;
}


input[type="submit"]{
    outline: none;
    display: block;
    font-size: 1.5rem;
    color:black;
    background-color: var(--light5);
    border-radius: 0.5rem;
    cursor:pointer;
    transition: 0.2s ease;
    border:none;
    width: 40%;
}

input[type="submit"]:hover{

background-color:var(--light3);

}




.login_from_light{
    background:var(--light3);
}

.login_from_dark{
    background:var(--dark1);
    color:white;
}

.login_from_dark .login_button_dark{
    background-color:white;
}


.login_from_light .login_button_light{
    background-color:var(--light1);
    color:white;
}


.login_from_dark .login_button_dark:hover{
    background-color:var(--dark5);
    color:white;
}

.login_from_light .login_button_light:hover{
    background-color:var(--light4);
    color:black;
}


.footer_dark{
    color:white;
}


.form_icon_dark{
    color:white;
}

.footer_dark ion-icon{
    color:white;
}
.footer_light ion-icon{
    color:var(--light2);
}


.form_icon_light{
    color:var(--light2);
}
.f .google{
    margin-top: 1rem;
    font-size: 1.5rem;
}



@media only screen and (max-width:690px) {

    .max{
        display: none;
    }
    .min{
        display: block;
    }
    .min-cont{
        width:100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .min-cont form{
        width: 100vw;
    }

    .form_h_text2{
        margin-top: 20%;
        font-size: 5rem;   
       }

       .input_div-min{
        display: inline-block;
        margin-bottom: 2rem;
        width: 90%;
        height: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .input_div-min .input-icon{
        border-bottom: 1px solid white;
        padding-top: 1rem;
        height: 100%;
        width: 10%;
    }

    .input_div-min .input-icon ion-icon{
     margin-left: .5rem;
    }

    .input_div-min input{
    width:80%;
    border-radius: 0px;
    border: none;
    background-color:transparent;
    border-bottom: 1px solid white;
    border-left: 1px solid white;
    padding:.5rem;
    outline: none;
 }   
    
 .input_div-min-light .input-icon{
    border-bottom: 1px solid var(--light2);
}
 .input_div-min-light input {
    
    border-bottom: 1px solid  var(--light2);
    border-left: 1px solid var(--light2);
    
 }

    input[type="submit"]{
        outline: none;
        display: block;
        font-size: 1.5rem;
        color:black;
        background-color: var(--light5);
        border-radius: 0.5rem;
        cursor:pointer;
        transition: 0.2s ease;
        border:none;
        width: 80%;
    }
}




</style>