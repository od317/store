<script setup>

import nav2 from '../components/nav.vue';
import {ref,watch,computed} from 'vue';
import imgH from '../components/img-header.vue';
import { useRouter } from 'vue-router';

 

window.scrollTo({ top: 0, behavior: 'smooth' })
let router = useRouter();
 let token = ref(null);
 token.value = localStorage.getItem('token');

let i=-1;




let laps = [{
    name:'Vivio-K23',
   price:1500,
   count:1,
   img:"https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/659859_509349_01_front_comping.jpg",
   date:2021,
   rating:5,
   reco:10,
   disc:1300
    
},{
    name:'x1-yoga-g6',
   price:1400,
   count:1,
   img:"https://p2-ofp.static.pub/fes/cms/2022/03/16/te0f46qyrb1r0uh9tvu2ofhiwdxwwn224817.png",
   date:2020,
   rating:3.5,
   reco:7,
   disc:null 
},{
    name:'nitro5_an515',
   price:1200,
   count:1,
   img:"https://static-ecpa.acer.com/media/catalog/product/cache/b568084fb1fb9fe6f77a8cbee20ff747/n/i/nitro5_an515-45_bl1_bk_modelmain_8.png",
   date:2020,
   rating:4,
   reco:8,
    
},{
    name:'9-yoga-1',
   price:1000,
   count:1,
   img:"https://5.imimg.com/data5/SELLER/Default/2021/4/EE/MH/AR/89530022/9-yoga-1-500x500.jpg",
   date:2020,
   rating:2.5,
   reco:5,
},{
    name:'Lenovo_Yoga_7i',
   price:1800,
   count:1,
   img:"https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Lenovo_Yoga_Slim_7i_Pro_Entertainment96.jpg",
   date:2021,
   rating:4,
   reco:9,
   disc:1500 
},{
    name:'1565-dell-xps-15',
   price:1600,
   count:1,
   img:"https://img.pccomponentes.com/articles/1029/10294662/1565-dell-xps-15-9520-intel-core-i7-12700h-16gb-1tb-ssd-rtx3050-ti-156.jpg",
   date:2020,
   rating:3,
   reco:7,
    
},{
    name:'XPS-17-3',
   price:1550,
   count:1,
   img:"https://www.jagatreview.com/wp-content/uploads/2020/10/XPS-17-3.jpg",
   date:2021,
   rating:4.5,
   reco:10,
    
},{
    name:'GemiBook-Pro',
   price:1200,
   count:1,
   img:"https://sc04.alicdn.com/kf/H04f6f8f728e44924b90b41cb7780d481D.jpg",
   date:2020,
   rating:3.5,
   reco:10,
    
},{
    name:'Asus-23-XV',
   price:1900,
   count:1,
   img:"https://media.4rgos.it/s/Argos/2777867_R_SET?$Main768$&w=620&h=620",
   date:2020,
   rating:4,
   reco:8,
   disc:1750
    
},
];


let mobiles = [
  {
  name:'i-phone-12',
   price:1500,
   count:1,
   img:"https://m.media-amazon.com/images/I/71E5zB1qbIL._SX522_.jpg",
   date:2021,
   rating:5,
   reco:10,
   disc:1300
    
},{
  name:'Vivio-t1',
   price:1500,
   count:1,
   img:"https://www.sathya.in/media/80993/catalog/6b8a43661cf21bd7df8c6a1cd6a43e4a.png",
   date:2021,
   rating:5,
   reco:10,
   disc:1300
    
},{
  name:'infinx-smart',
   price:1500,
   count:1,
   img:"https://www.infinixmobility.com/fileadmin/assets/images/product/list/hot10.jpg",
   date:2021,
   rating:5,
   reco:10,
   disc:1300
    
},{
  name:'TCL-30-XE',
   price:1500,
   count:1,
   img:"https://phonetechx.com/wp-content/uploads/2022/01/TCL-30-XE-5G.jpg",
   date:2021,
   rating:5,
   reco:10,
   disc:1300
    
},{
  name:'tecno-spark-9',
   price:1500,
   count:1,
   img:"https://www.jiomart.com/images/product/420x420/493177163/tecno-spark-9-128gb-6gb-ram-sky-mirror-mobile-phone-digital-o493177163-p592917646-10-202207222123.jpeg",
   date:2021,
   rating:5,
   reco:10,
   disc:1300
    
},{
  name:'note12',
   price:1500,
   count:1,
   img:"https://www.infinixmobility.com/fileadmin/assets/v/note/note12/note12_2023/list/note122023-2.jpg",
   date:2021,
   rating:5,
   reco:10,
   disc:1300
    
},{
  name:'Vivio-K23',
   price:1500,
   count:1,
   img:"https://www.yugatech.com/wp-content/uploads/2017/04/nokia-3210_1.jpg",
   date:2021,
   rating:5,
   reco:10,
   disc:1300
    
},{
  name:'Infinix-Note',
   price:1500,
   count:1,
   img:"https://mobiler.pk/wp-content/uploads/2021/10/Infinix-Note-10-Pro-256GB.png",
   date:2021,
   rating:5,
   reco:10,
   disc:1300
    
},
]




let shirts = [{
    name:'shirt1',
   price:10,
   count:1,
   img:"https://media.gq.com/photos/5e839e84d73e2d00084f1a4f/master/w_1280%2Cc_limit/Uniqlo-U-crew-neck-short-sleeve-T-shirt.jpg",
   date:2019,
   rating:3.5,
   reco:4,
   disc:4
    
},{
    name:'shirt1',
   price:25,
   count:1,
   img:"https://media.gq.com/photos/5e839e84d73e2d00084f1a4f/master/w_1280%2Cc_limit/Uniqlo-U-crew-neck-short-sleeve-T-shirt.jpg",
   date:2017,
   rating:4.5,
   reco:10,
   disc:0
    
},{
    name:'shirt1',
   price:30,
   count:1,
   img:"https://media.gq.com/photos/5e839e84d73e2d00084f1a4f/master/w_1280%2Cc_limit/Uniqlo-U-crew-neck-short-sleeve-T-shirt.jpg"
    
}]




let T_shirts = [{
    name:'tshirt1',
   price:27,
   count:1,
   img:"https://images.squarespace-cdn.com/content/59d2bea58a02c78793a95114/1533744372275-89SQDE9JMMSO09CMNBOS/%28RED%29_Men%27s%2BINSPI%28RED%29%2BTshirt.jpg?format=1500w&content-type=image%2Fjpeg"
    
},{
    name:'tshirt1',
   price:40,
   count:1,
   img:"https://images.squarespace-cdn.com/content/59d2bea58a02c78793a95114/1533744372275-89SQDE9JMMSO09CMNBOS/%28RED%29_Men%27s%2BINSPI%28RED%29%2BTshirt.jpg?format=1500w&content-type=image%2Fjpeg"
    
},{
    name:'tshirt1',
   price:35,
   count:1,
   img:"https://images.squarespace-cdn.com/content/59d2bea58a02c78793a95114/1533744372275-89SQDE9JMMSO09CMNBOS/%28RED%29_Men%27s%2BINSPI%28RED%29%2BTshirt.jpg?format=1500w&content-type=image%2Fjpeg"
    
}]




let cheers = [{
    name:'chair',
   price:10,
   count:1,
   img:"https://static3.depositphotos.com/1001806/140/i/600/depositphotos_1409994-stock-photo-isolated-white-wood-chair.jpg",
   date:2020,
   rating:3,
   reco:8,
   disc:7
    
},{
    name:'chair1',
   price:25,
   count:1,
   img:"https://thumbs.dreamstime.com/b/wooden-chair-isolated-11718982.jpg"
    
},{
    name:'chair2',
   price:30,
   count:1,
   img:"https://t3.ftcdn.net/jpg/02/53/00/88/360_F_253008809_TOKoPQxqWSrwFiDIczZjNAOsfni7VRro.jpg"
    
},{
    name:'chair',
   price:10,
   count:1,
   img:"https://static3.depositphotos.com/1001806/140/i/600/depositphotos_1409994-stock-photo-isolated-white-wood-chair.jpg",
   date:2020,
   rating:3,
   reco:8,
   disc:7
    
},{
    name:'chair1',
   price:25,
   count:1,
   img:"https://thumbs.dreamstime.com/b/wooden-chair-isolated-11718982.jpg"
    
},{
    name:'chair2',
   price:30,
   count:1,
   img:"https://t3.ftcdn.net/jpg/02/53/00/88/360_F_253008809_TOKoPQxqWSrwFiDIczZjNAOsfni7VRro.jpg"
    
}]




let tabels = [{
    name:'table 1',
   price:27,
   count:1,
   img:"https://media.istockphoto.com/id/614716660/photo/coffee-table-with-top-made-of-different-kinds-of-wood.jpg?s=612x612&w=0&k=20&c=uNFSyVI1hzCnRs_O3PGuFPkG1DheNUg60OpojuJGPz0=",
  date:2021,
   rating:5,
   reco:7,
   disc:0
},{
    name:'table2',
   price:40,
   count:1,
   img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgrO2ZqiGSz-JEf8Xj3pkaVLgMxUrdyHrGnQ&usqp=CAU",
  date:2020,
   rating:4.5,
   reco:3,
    
},{
    name:'table3',
   price:35,
   count:1,
   img:"https://aca8cd9d105dbd447097-f6f51e4cef559c9308eef9d726fd38a7.ssl.cf1.rackcdn.com/463138-2.jpg",
  date:2021,
   rating:4,
   reco:3,
   disc:20
    
},{
    name:'table 1',
   price:27,
   count:1,
   img:"https://media.istockphoto.com/id/614716660/photo/coffee-table-with-top-made-of-different-kinds-of-wood.jpg?s=612x612&w=0&k=20&c=uNFSyVI1hzCnRs_O3PGuFPkG1DheNUg60OpojuJGPz0=",
  date:2021,
   rating:5,
   reco:7,
   disc:0
},{
    name:'table2',
   price:40,
   count:1,
   img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgrO2ZqiGSz-JEf8Xj3pkaVLgMxUrdyHrGnQ&usqp=CAU",
  date:2020,
   rating:4.5,
   reco:3,
    
},{
    name:'table3',
   price:35,
   count:1,
   img:"https://aca8cd9d105dbd447097-f6f51e4cef559c9308eef9d726fd38a7.ssl.cf1.rackcdn.com/463138-2.jpg",
  date:2021,
   rating:4,
   reco:3,
   disc:20
    
}]



let all_pro = ref([]);

all_pro.value = laps.concat(mobiles);

let pro = ref([]);

pro.value = [];

if(all_pro.value.length-pro.value.length<9){
if(pro.value.length!==all_pro.value.length)
pro.value.concat (all_pro.value.slice(pro.value.length,all_pro.value.length));
console.log('ok1');
} 

else{
  pro.value=all_pro.value.slice(pro.value.length,pro.value.length+9);
}


let ss = ()=>{
  pro.value=[];
if(all_pro.value.length-pro.value.length<9){
if(pro.value.length!==all_pro.value.length)
pro.value = pro.value.concat (all_pro.value.slice(pro.value.length,all_pro.value.length));
console.log('ok1');
} 

else{
  pro.value=all_pro.value.slice(pro.value.length,pro.value.length+9);
}
}


let sort_type='';

let addmore = false;

let add_elements = ()=>{
  addmore=true;
  if(all_pro.value.length-pro.value.length<9){
if(pro.value.length!==all_pro.value.length){
  pro.value=pro.value.concat(all_pro.value.slice(pro.value.length,all_pro.value.length));
console.log('ok1');
}
} 

else{
  pro.value=all_pro.value.slice(0,pro.value.length+8);
}

checkt(sort_type);

}  


let cart = ref([]);

cart.value =[];


let total = computed(()=>{
    let sum =0;
    cart.value.forEach(i=> sum+=(i.price*i.count));  
    return sum;
})
 
let count = computed(()=>{
    let sum =0;
    cart.value.forEach(i=> sum+=(i.count));  
    return sum;
   
})


const addi = (item)=>{



    i++;
    let done =false;
    cart.value.forEach(c=>{
      if(c.name===item.name){
        c.count+=1;
        done = true;
        return;
    }
    })
    if(done){
      return
    }
      item.count=1;
    cart.value.push(item);
}

const removei= (item)=>{
    if(i<0)
     return;
    let k=0;
    console.log(i); 
    cart.value = cart.value.filter(t=> {
        if(k>0)
           return t;
        if(t.name==item.name){
            k++;
            if(t.count>0){
              t.count--;
            }
            if(t.count>0)
            return t;
            else
            return;
        }
        return t;
    });
    console.log(cart.value.toString());
    if(k==1)
    i--;
}

let header_label =  ref('tech');


let checkt = type=>{

  console.log(type);
  sort_type = type;
  switch(type){

case 'reco':
 all_pro.value.sort((a,b)=> b.reco-a.reco);
 pro.value=all_pro.value.slice(0,pro.value.length);
  break;

case 'rating':
 all_pro.value.sort((a,b)=> b.rating-a.rating);
 pro.value=all_pro.value.slice(0,pro.value.length);
   break;

case 'date':
 all_pro.value.sort((a,b)=> b.date-a.date);
 pro.value=all_pro.value.slice(0,pro.value.length); 
  break;

case 'low':
all_pro.value.sort((a,b)=> a.price-b.price);
 pro.value=all_pro.value.slice(0,pro.value.length); 
  break;

case 'hight':
all_pro.value.sort((a,b)=> b.price-a.price);
 pro.value=all_pro.value.slice(0,pro.value.length); 
  
  break;


default:
  break;

}
if(!addmore)
window.scrollTo(0, 0);
addmore=false;
}


let filters2 = ref([]);
filters2.value= ['none','none','none','none','none','none'];

let filter2 = (i)=>{
  if(filters2.value[i]==='fill'){
  filters2.value.fill('none');
  }
  else{
  filters2.value.fill('none');
  filters2.value[i]='fill';
  }
}





let target = ref('');


let change_tech = (target2,num)=>{
    console.log(num);
    filter2(num);
    if(target.value===target2){
       all_pro.value = laps.concat(mobiles);
      console.log('ok');
      ss();
      checkt(type.value);
      return;
    }
    
    switch(target2){
      case 'all':
      all_pro.value = laps.concat(mobiles);
        break
      case 'laptops':
      all_pro.value = laps;
        break
      case 'mob':
      all_pro.value = mobiles;
        break
      default: break  
    }
    target.value = target2;
    ss();
    checkt(type.value);
}




let change_fash = (target2,num)=>{
    filter2(num);
    if(target.value===target2){
      all_pro.value = shirts.concat(T_shirts);
      console.log('ok');
      ss();
      checkt(type.value);
      return;
    }
    
    switch(target2){
      case 'all':
      all_pro.value = shirts.concat(T_shirts);
        break
      case 'shirts':
      all_pro.value = shirts;
        break
      case 'T-shirts':
      all_pro.value =T_shirts;
        break
      default: break  
    }
    target.value = target2;
    ss();
    checkt(type.value);
}





let change_furn = (target2,num)=>{
    filter2(num);
    if(target.value===target2){
      all_pro.value = cheers.concat(tabels);
      console.log('ok');
      ss();
      checkt(type.value);
      return;
    }
    
    switch(target2){
      case 'all':
      all_pro.value = cheers.concat(tabels);
        break
      case 'chare':
      all_pro.value = cheers;
        break
      case 'table':
      all_pro.value =tabels;
        break
      default: break  
    }
    target.value = target2;
    ss();
    checkt(type.value);
}



let tech_filters = [
{
  name:'all',
  func:change_tech,
  num:0
},
{
  name:'laptops',
  func:change_tech,
  num:1
},
{
  name:'mob',
  func:change_tech,
  num:2
}]



let fashion_filters = [
{
  name:'all',
  func:change_fash,
  num:1

},
{
  name:'shirts',
  func:change_fash,
  num:2
},
{
  name:'T-shirts',
  func:change_fash,
  num:3
},
]


let frun_filters = [
{
  name:'all',
  func:change_furn,
  num:1

},
{
  name:'table',
  func:change_furn,
  num:2
},
{
  name:'chare',
  func:change_furn,
  num:3
},
]

let filterss = ref([]);

filterss.value = tech_filters;


let tech = ()=>{

  all_pro.value = laps.concat(mobiles);
  filterss.value = tech_filters;
  header_label.value='tech';
  filters2.value.fill('none');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  ss();
}


let fashion = ()=>{

  all_pro.value = shirts.concat(T_shirts);
  filterss.value = fashion_filters;
  header_label.value='fashion';
  filters2.value.fill('none');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  ss();
}



let frun = ()=>{

  all_pro.value = cheers.concat(tabels);
filterss.value = frun_filters;
header_label.value='frun';
filters2.value.fill('none');
window.scrollTo({ top: 0, behavior: 'smooth' });
  ss();
}






let type = ref('');
















let dark = ref(true);

dark.value=false;

let all = ref('light');
let background= ref('light');
let nav = ref('nav-light');
let card = ref('card-light');
let button = ref('button-light');
let circle_theme = ref('light');
let side_theme = ref('light');
let border_theme = ref('boro-light');

all.value = localStorage.getItem('all')||'light';

if(all.value==='dark'){
  dark.value=true;
    background.value= 'dark';
    nav.value = 'nav-dark';
    card.value = 'card-dark';
    button.value = 'button-dark';
    circle_theme.value = 'dark';
    side_theme.value = 'dark';
    border_theme.value = 'boro-dark';
  
}

let change_dark = ()=>{
  console.log('dark');
  dark.value= !dark.value;
  background.value='dark';
  nav.value='nav-dark';
  card.value='card-dark'
  button.value='button-dark';
  all.value='dark';
  circle_theme.value = 'dark';
  side_theme.value='dark';
  border_theme.value='boro-dark';
  localStorage.setItem('theme','dark');
  localStorage.setItem('all','dark');

}

let change_light = ()=>{
  console.log('light');
  dark.value= !dark.value;
  background.value='light';
  nav.value='nav-light';
  card.value='card-light';
  button.value='button-light';
  all.value='light';
  circle_theme.value = 'light';
  side_theme.value='light';
  border_theme.value='boro-light';
  localStorage.setItem('theme','light');
  localStorage.setItem('all','light');
}



let filters = ref([]);
filters.value= ['none','none','none','none','none','none'];




let filter = (item,i,type2)=>{

  console.log(type2);

  if(type.value === type2){
     type.value='';
    }
  else
    type.value=type2;   
  
   checkt(type.value);

  if(filters.value[i]==='fill'){
  filters.value.fill('none');
  }
  else{
  filters.value.fill('none');
  filters.value[i]='fill';
  }


}











let page_num =ref(1);


let sort = ()=>{
  pro.value.sort((a,b)=> a.price-b.price);
}


let start = ()=>{
  let lab = localStorage.getItem('header_label');
  if(lab!=null){
    localStorage.removeItem('header_label');
    if(lab==='fashion'){
      fashion();
      return;
    }
    if(lab==='frun'){
      frun();
      return;
    }
    tech();
    return;
  }
  else{
    console.log('no');
  }
}

start();






let dis_rating = (rating)=>{
  let ans = ['-outline','-outline','-outline','-outline','-outline'];
  switch(rating){
    case 0.5:
    ans[0] = '-half';  
      break;
    case 1:
    ans[0] = '';  
      break;
    case 1.5:
    ans[0] = '';  
    ans[1] = '-half';
      break;
    case 2:
    ans[0] = '';  
    ans[1] = '';  
      break;
    case 2.5:
    ans[0] = '';  
    ans[1] = '';
    ans[2] = '-half';
      break;
    case 3:
    ans[0] = '';  
    ans[1] = '';
    ans[2] = '';
      break;
    case 3.5:
    ans[0] = '';  
    ans[1] = '';
    ans[2] = '';
    ans[3] = '-half'; 
      break;
    case 4:
    ans[0] = '';  
    ans[1] = '';
    ans[2] = '';
    ans[3] = '';
      break;  
   case 4.5:
    ans[0] = '';  
    ans[1] = '';
    ans[2] = '';
    ans[3] = '';
    ans[4] = '-half';
      break;
   case 5:
    ans[0] = '';  
    ans[1] = '';
    ans[2] = '';
    ans[3] = '';
    ans[4] = '';
      break;  
   default:
    break;   
  }
  return ans;
}




</script>


<template>
    
    <nav :class="nav+` navbar`">
        <div class="container-fluid">
            <div class="main-flex d-flex justify-content-center">

              <label   :class="button+` button1 button2`" data-bs-toggle="modal" >
                <router-link to="/" class="logo_main">
                <ion-icon name="bag-handle-outline" class="cart-icon"></ion-icon>
              </router-link>
              </label>

              <div class="flex-grow-1 sec-flex d-flex ">
                <label class="flex-item nav-link" @click="tech">tech</label>
                <label class="flex-item nav-link" @click="fashion">fashion</label>
                <label class="flex-item nav-link" @click="frun">furniture</label>
            </div>
 
            

            <button  type="button" :class="button+` button1`" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <ion-icon name="cart-outline" class="cart-icon"></ion-icon> 
              <label v-if="count>0" class="count-label">{{count}}</label>
              </button>

            
              <button v-if="!dark" class="theme-button theme-button1" @click="change_dark" ><ion-icon name="moon" class="moon"></ion-icon></button>
              <button v-if="dark" class="theme-button theme-button2" @click="change_light" ><ion-icon name="sunny" class="sun"></ion-icon></button>  
              
              <div class="modal fade max" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div :class="`modal-content  modal_`+all">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">items in cart</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <div v-if="cart.length===0">No items selected</div>
                      <div v-for="item in cart">
                        <div class="modal-item-text modal-text">{{item.name}}</div>
                        <div class="modal-flex d-flex justify-content-evenly ">
                          <img class="item-img " :src="item.img" alt=""> 
                        </div> 
                        <div class=" d-flex justify-content-between ">
                          <div>  
                            <label class="modal-text">price for each: {{item.price}}  </label><br> 
                            <label class="modal-text">total count: {{item.count}} </label> <br>
                            <label class="modal-text">total price: {{item.count*item.price}} </label>
                          </div>
                          <button @click="removei(item)" class="remove-but">remove</button>
                        </div>
                      </div>


                    </div>
                    <div class="modal-footer">
                      <button type="button" class="submit-pur " data-bs-dismiss="modal">Close</button>
                      <button type="button" data-bs-dismiss="modal" class="can-pur">{{total}}$  <router-link to="/login" :class="`login_butt_main login_butt_main`+all">
                        login
                       </router-link></button>
                    </div>
                  </div>
                </div>
              </div>
            
           
            </div>

        </div>
      </nav>





      <nav :class="nav+` navbar2`">
        <div class="container-fluid">
            <div :class="`main-flex2 d-flex justify-content-between main-flex2-`+all">

              
              <button  type="button" :class="button+` button1`" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <ion-icon  name="cart-outline" class="cart-icon"></ion-icon>
                <label v-if="count>0" class="count-label">{{count}}</label>
                </button>

           

              <label  @click="tech" :class="button+` button1 button2`"  >
                <label class="logo_main">
                  
                <ion-icon v-if="header_label==='tech'" name="phone-portrait-outline" class="cart-icon cart-icon-active"></ion-icon>
                <ion-icon v-else name="phone-portrait-outline" class="cart-icon"></ion-icon>
              </label>
              </label>
 
 
              <label  @click="fashion" :class="button+` button1 button2`"  >
                <label class="logo_main">
                <ion-icon v-if="header_label==='fashion'" name="shirt-outline" class="cart-icon cart-icon-active"></ion-icon>
                <ion-icon v-else name="shirt-outline" class="cart-icon"></ion-icon>
              </label>
              </label>
 
              
              <label  @click="frun" :class="button+` button1 button2`"  >
                <label class="logo_main">
                <ion-icon v-if="header_label==='frun'" name="bed-outline" class="cart-icon cart-icon-active"></ion-icon>
                <ion-icon v-else name="bed-outline" class="cart-icon"></ion-icon>
              </label>
              </label>
 

              
              
 
            
           
            </div>

        </div>
      </nav>



      <div class="min-header min">
        <div class="min-header-cont">
        <label   :class="button+` button1 button2`" >
          <router-link to="/" class="logo_main">
          <ion-icon name="bag-handle-outline" class="cart-icon"></ion-icon>
        </router-link>
        </label>


        <div :class="`min min-theme min-theme-`+all">
          <button v-if="!dark" class="theme-button theme-button1" @click="change_dark" ><ion-icon name="moon" class="moon"></ion-icon></button>
          <button v-if="dark" class="theme-button theme-button2" @click="change_light" ><ion-icon name="sunny" class="sun sunn"></ion-icon></button>  
        </div>
      </div>
      </div>

      <div :class="`min-img-home min min-img-home-`+all">
        <div v-if="header_label=='fashion'" class="imgg img-fash">fashion</div>
        <div v-else-if="header_label=='tech'" class="imgg img-tech">tech</div>
        <div v-else class="imgg img-furn">furniture</div>
      </div>

     


     <div :class="`min search-cont search-cont-`+all">
      <div class="search-contc">
      <ion-icon name="search-outline"></ion-icon>
       <input  type="text">

       <button :class="`filters-min-butt filters-min-butt-`+all" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
        <ion-icon class="filter-outline" name="filter-outline"></ion-icon>
      </button>

       <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
         <div :class="`offcanvas-header offcanvas-header-`+all">
           <h5 class="offcanvas-title" id="offcanvasScrollingLabel">
            <ion-icon name="bag-handle-outline" class="cart-icon-min"></ion-icon>
            <br>
             Sort and Filters
           </h5>
           <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
         </div>
         <div :class="`offcanvas-body offcanvas-body-`+all">
        


         
            <div :class="`filter-container-min `+border_theme">
             <label for="" :class="`sort-by  filter-color-`+circle_theme">sort by</label>
             <div class="filter-min"><label :class="`filter-color-`+circle_theme" for="" @click="filter('laptops',0,'reco')">
               <ion-icon v-if="filters[0]==='none'" name="ellipse-outline" class=""></ion-icon>
               <ion-icon v-if="filters[0]!=='none'" name="ellipse" :class="`filled-circel-`+circle_theme"></ion-icon>Recomended</label>
             </div>
           
             <div class="filter-min"><label :class="`filter-color-`+circle_theme" for="" @click="filter('laptops',1,'hight')">
               <ion-icon v-if="filters[1]==='none'" name="ellipse-outline" class=""></ion-icon>
               <ion-icon v-if="filters[1]!=='none'" name="ellipse" :class="`filled-circel-`+circle_theme"></ion-icon>Hight-end</label>
             </div>
           
             <div class="filter-min"><label :class="`filter-color-`+circle_theme" for="" @click="filter('laptops',2,'low')">
               <ion-icon v-if="filters[2]==='none'" name="ellipse-outline" class=""></ion-icon>
               <ion-icon v-if="filters[2]!=='none'" name="ellipse" :class="`filled-circel-`+circle_theme"></ion-icon>Low-end</label>
             </div>
           
             <div class="filter-min"><label :class="`filter-color-`+circle_theme" for="" @click="filter('laptops',3,'date')">
               <ion-icon v-if="filters[3]==='none'" name="ellipse-outline" class=""></ion-icon>
               <ion-icon v-if="filters[3]!=='none'" name="ellipse" :class="`filled-circel-`+circle_theme"></ion-icon>New</label>
             </div>
           
             <div class="filter-min"><label :class="`filter-color-`+circle_theme" for="" @click="filter('laptops',4,'rating')">
               <ion-icon v-if="filters[4]==='none'" name="ellipse-outline" class=""></ion-icon>
               <ion-icon v-if="filters[4]!=='none'" name="ellipse" :class="`filled-circel-`+circle_theme"></ion-icon>Rating</label>
             </div>
           

     
            </div>
     
         
     
     
     
            <div :class="`filter-container-min `+border_theme">
             <label for="" :class="`sort-by filter-color-`+circle_theme">Filters </label> 
             <div v-for="p in filterss" class="filter-min"><label :class="`filter-color-`+circle_theme" for="" @click="p.func(p.name,p.num)">
               <ion-icon v-if="filters2[p.num]==='none'" name="square-outline" class=""></ion-icon>
               <ion-icon v-if="filters2[p.num]!=='none'" name="square" :class="`filled-circel-`+circle_theme"></ion-icon>{{p.name == 'mob'? 'mobiles':p.name}}</label>
             </div>
            </div>
     
     
     
          
     
     
    
     </div>


         </div>
       </div>
   

      </div>


    <div class="min b-cards">
      
    </div>

      
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog " >
          <div :class="`modal-content  modal_`+all">
            <div class="modal-header">
              <h1 :class="`modal-title fs-5 min-title-`+all" id="staticBackdropLabel">your cart</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
              <div style="color:white" v-if="cart.length===0">No items selected</div>
              <div v-for="item in cart">
                <div class="modal-item-text modal-text">{{item.name}}</div>
                <div class="modal-flex d-flex justify-content-evenly ">
                  <img class="item-img " :src="item.img" alt=""> 
                </div> 
                <div class=" d-flex justify-content-between ">
                  <div>  
                    <label class="modal-text">price for each: {{item.price}}  </label><br> 
                    <label class="modal-text">total count: {{item.count}} </label> <br>
                    <label class="modal-text">total price: {{item.count*item.price}}
                    
                       </label>
                  </div>
                  <button @click="removei(item)" class="remove-but">remove</button>
                </div>
              </div>
            </div>

            <div class="modal-footer">
              <button type="button" class="submit-pur " data-bs-dismiss="modal">Close</button>
              <button type="button" data-bs-dismiss="modal" class="can-pur">{{total}}$  <router-link to="/login" :class="`login_butt_main login_butt_main`+all">
                login
               </router-link></button>
            </div>

          </div>
        </div>
      </div>














      <div :class="`all all`+all">


      <imgH class="max" :label="header_label" />
      
     

      <div class="max disc_cont">
        <div :class="`disc disc-`+all">discount by <span> 60% </span> when you buy more than 3 items</div>
        </div>

      <div class="fixed-cont">

      <div class="max grid-header">

      <div :class="`filter-text-h filter-color-`+circle_theme">
        viewing {{ pro.length }} item of {{ all_pro.length }}
      </div>

      
    </div>
  

        <div :class="`max side-`+side_theme+` side`">
       <div :class="`fliters-fiters filter-color-`+circle_theme"> 
        Fliters & Sort
      </div>
       <div :class="`filter-container `+border_theme">
        <label for="" :class="`sort-by filter-color-`+circle_theme">sort by</label>
        <div class="filter"><label :class="`filter-color-`+circle_theme" for="" @click="filter('laptops',0,'reco')">
          <ion-icon v-if="filters[0]==='none'" name="ellipse-outline" class=""></ion-icon>
          <ion-icon v-if="filters[0]!=='none'" name="ellipse" :class="`filled-circel-`+circle_theme"></ion-icon>Recomended</label>
        </div>
      
        <div class="filter"><label :class="`filter-color-`+circle_theme" for="" @click="filter('laptops',1,'hight')">
          <ion-icon v-if="filters[1]==='none'" name="ellipse-outline" class=""></ion-icon>
          <ion-icon v-if="filters[1]!=='none'" name="ellipse" :class="`filled-circel-`+circle_theme"></ion-icon>Hight-end</label>
        </div>
      
        <div class="filter"><label :class="`filter-color-`+circle_theme" for="" @click="filter('laptops',2,'low')">
          <ion-icon v-if="filters[2]==='none'" name="ellipse-outline" class=""></ion-icon>
          <ion-icon v-if="filters[2]!=='none'" name="ellipse" :class="`filled-circel-`+circle_theme"></ion-icon>Low-end</label>
        </div>
      
        <div class="filter"><label :class="`filter-color-`+circle_theme" for="" @click="filter('laptops',3,'date')">
          <ion-icon v-if="filters[3]==='none'" name="ellipse-outline" class=""></ion-icon>
          <ion-icon v-if="filters[3]!=='none'" name="ellipse" :class="`filled-circel-`+circle_theme"></ion-icon>New</label>
        </div>
      
        <div class="filter"><label :class="`filter-color-`+circle_theme" for="" @click="filter('laptops',4,'rating')">
          <ion-icon v-if="filters[4]==='none'" name="ellipse-outline" class=""></ion-icon>
          <ion-icon v-if="filters[4]!=='none'" name="ellipse" :class="`filled-circel-`+circle_theme"></ion-icon>Rating</label>
        </div>
      


       </div>

    



       <div :class="`filter-container `+border_theme">
        <label for="" :class="`sort-by filter-color-`+circle_theme">Filter </label>
        <div v-for="p in filterss" class="filter"><label :class="`filter-color-`+circle_theme" for="" @click="p.func(p.name,p.num)">
          <ion-icon v-if="filters2[p.num]==='none'" name="square-outline" class=""></ion-icon>
          <ion-icon v-if="filters2[p.num]!=='none'" name="square" :class="`filled-circel-`+circle_theme"></ion-icon>{{p.name == 'mob'? 'mobiles':p.name}}</label>
        </div>
       </div>



     


  



</div>


<div :class="background+`   max`">



<div class="  cont ">


       

    
        <div v-for="p in pro" :class="card+` cardsss`">

          <div v-if="p.date>2020" :class="`card_new card_new_`+all">new</div>

          <div class=" relativess">
            <img :src="p.img" class="card-img-top" alt=""  />
        </div>
            <div class="card-body">
              <h5 class="card-title">{{p.name}}</h5>
              <div class="rating">
              <ion-icon v-for="s in dis_rating(p.rating)" :name="`star`+s" class="star"></ion-icon>
              
            </div>
              <label v-if="p.disc==null" class="card-text">price:${{p.price}}</label>
              <label v-else class="card-text">price:<span class="removed_price">${{p.price}}</span><span class="disc_price">${{p.disc}}</span></label>
              <div class="d-flex flex-row-reverse but-con">
              <button class="add-butt" @click="addi(p)">add to cart</button>
            </div>
            </div>
          </div>
</div>


</div>



<div :class="background+` min con-flex-min`">



  <div class=" container-min">
  
  
         
          
          <div v-for="p in pro" :class="card+` card-min`">
            <img :src="p.img" class="card-img-top" alt=""  />
            <div v-if="p.date>2020" :class="`card_new card_new_min card_new_`+all">new</div>
              <div class="card-body card-body-min">
                <div class="min-card-body-cont">
                <h5 class="card-title-min">{{p.name}}</h5>
                <div class="rating">
                <ion-icon v-for="s in dis_rating(p.rating)" :name="`star`+s" class="star"></ion-icon>
              </div>
                <label v-if="p.disc==null" class="card-text-min">price:${{p.price}}</label>
                <label v-else class="card-text-min">price:<span class="removed_price">${{p.price}}</span><span class="disc_price">${{p.disc}}</span></label>
              </div>
                <div class="d-flex flex-row-reverse but-con">
                <button class="add-butt-min" @click="addi(p)">add to cart</button>
              </div>
              </div>
            </div>
      
      
  
  </div>
  
  
  </div>




<div class="footer">

  <button v-if="pro.length!==all_pro.length" class="view_more" @click="add_elements">view more</button>
  <label :class="`end_of end_of_`+all" v-else>no more products to view</label>

</div>

</div>




      </div>
</template>


<style>

</style>