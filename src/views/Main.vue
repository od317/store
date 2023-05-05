<script setup>

import {ref} from 'vue';
import {useRouter} from 'vue-router'


let router = useRouter();

let fashion = ()=>{

  localStorage.setItem('header_label','fashion');
  router.push('/main');
  return;

}


let tech = ()=>{

localStorage.setItem('header_label','tech');
router.push('/main');
return;

}


let furn = ()=>{

localStorage.setItem('header_label','frun');
router.push('/main');
return;

}


let button_ac = ref(1);

let set_button_ac = (num)=>{
    console.log(num);
    button_ac.value=num;
}

let grid1 = [{
 src:"https://www.paylessfurnituretexas.com/www/clients/bestbuyhomefurnitureup/clientfiles/homePageAd_col-3-small/0380FBAA-5056-BF1C-1C44A2DAFC0BC5E3-0.jpeg",
 type:'frun'
},{
 src:"https://wallpaperaccess.com/full/899863.jpg",
 type:'tech'
},{
 src:"https://8outfits.com/orig/0/36/368/3685/8outfits.com-hijabista-fashion-modest-fashion-368567.jpg",
 type:'fashion'
},{
 src:"https://paramountbathrooms.co.uk/wp-content/uploads/Gallio-Supermatt-Marine-Blue-1-1024x724.jpg",
 type:'frun'
},{
 src:"https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Original_Xiaomi_Gaming_Mouse_Lite_YXSB01YM_5_Gear_DPI_TTC_Clicking_RGB_Ambient_Light_72g_Body.jpg_1000x1000.jpg",
 type:'tech'
},{
  src:"https://i.pinimg.com/736x/f6/1d/f9/f61df9c12b4b5e6ccb4cce0ee84580e0.jpg",
  type:'fashion'
},{
  src:'https://thumbs.dreamstime.com/b/charming-good-looking-caucasian-young-woman-short-blonde-hair-sunglasses-black-suit-smiling-looking-camera-145531341.jpg',
  type:'fashion'
},{
  src:'https://media.istockphoto.com/id/1259705254/photo/stylish-fashionable-blonde-woman-with-smoky-eye-makeup-in-jeans-white-t-shirt-and-black.jpg?s=612x612&w=0&k=20&c=jsfMFnIiaVZdxPg933bLGn1J3RVqqzFhycWeY0ZBJ18=',
  type:'fashion'
},{
  src:"https://pbs.twimg.com/media/FdMUPRVXkAAusYv.jpg",
  type:'tech'
},{
  src:"https://cdn.narellanpools.com.au/wp-content/uploads/2020/03/11-decorating-and-furniture-01.jpg",
  type:'frun'
},{
  src:"https://i.pinimg.com/originals/4f/79/90/4f799057143aa8c9025ac7d90748e8c3.jpg",
  type:'frun'
}];






let grid2 = [{
 src:"https://images.firstpost.com/wp-content/uploads/2019/09/realme-xt-1024.jpg",
 type:'tech'
},{
 src:"https://www.lulus.com/images/product/xlarge/5616536_1156691.jpg?w=195&hdpi=1",
 type:'fashion'
},{
 src:"https://dxbgamers.com/wp-content/uploads/2022/05/GLO-GMMK2-65-FOX-W-3.jpg",
 type:'tech'
},{
 src:"https://cdn.popbela.com/content-images/post/20171027/eva-chen-went-new-york-fashion-week-wearing-head-toe-823c025f3f224c1b336a7841459c6a72.jpg",
 type:'fashion'
},{
  src:"https://linea-inc.com/images/made/images/subpromo/Professionals-Sup-Promo-hq-3_620_354_60_s_c1.jpg",
  type:"frun"
},{
  src:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gh-080322-best-laptop-backpacks-1659969009.png?crop=0.466xw:0.717xh;0.0385xw,0.234xh&resize=640:*",
  type:'tech'
},{
  src:'https://thumbs.dreamstime.com/b/young-fashion-blond-woman-sunglasses-mall-interior-young-fashion-blond-woman-wearing-black-suit-jacket-sunglasses-121893301.jpg',
  type:'fashion'
},{
  src:'https://www.mychicobsession.com/wp-content/uploads/2020/11/classic-style-fall-fashion-15-of-57-1600x2400.jpg',
  type:'fashion'
},{
  src:"https://super.homelane.com/prodsnew/HLKT0000072.jpg",
  type:'frun'
},{
  src:'https://www.duravit.com/dimg/6046810_web_mil_zoom.jpg',
  type:'frun'
},{
  src:'https://www.huset.com.au/uploads/thumbnail2/jpg/blog_txt_img/145/878x878/uploads/blog/145/modern-furniture.jpg',
  type:'frun'
}];




let grid3 = [{
 src:"https://i.pinimg.com/736x/dd/73/53/dd73534e9c18bc23fc8211f05715b520.jpg",
 type:'fashion'
},{
 src:"https://static.asianpaints.com/content/dam/asian_paints/resources/aphomes-categorypage/furniture/ap-homes-usage-furniture-living-room-asian-paints.jpg.transform/cc-width-630-height-490/image.jpg",
 type:'frun'
},{
 src:"https://cdn.cliqueinc.com/posts/211261/winter-outfit-ideas-211261-1664366395408-main.700x0c.jpg",
 type:'fashion'
},{
 src:"https://www.ikea.com/images/f2/bf/f2bf399ba439dbee9519d60478cac7db.jpg?f=s",
 type:'frun'
},{
  src:"https://www.digitaltrends.com/wp-content/uploads/2021/09/iphone-13-pro-review-dan-baker-35.jpg?p=1",
  type:'tech'
},{
  src:"https://assets2.cbsnewsstatic.com/hub/i/2022/06/21/67dee043-3be1-4392-a07c-13b202a77960/razer-enki-pro.jpg",
  type:'frun'
},{
  src:'https://images.unsplash.com/photo-1581338834647-b0fb40704e21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
  type:'fashion'
},{
  src:'https://i.pinimg.com/736x/d9/87/82/d987823feadc75635e60162c98574489.jpg',
  type:'fashion'
},{
  src:"https://c0.wallpaperflare.com/preview/356/29/266/apple-dark-macbook-pro.jpg",
  type:'tech'
},{
  src:"https://images.hindustantimes.com/tech/img/2022/04/15/1600x900/IMG_3325_1648798858723_1649998363775.jpg",
  type:'tech'
}];





let grid4 = [{
 src:"https://media.karousell.com/media/photos/products/2022/2/10/k9_onikuma_pink_kitty_gaming_h_1644507960_11254ac8_progressive.jpg",
 type:'tech'
},{
 src:"https://external-preview.redd.it/HYz3YXfOiviq9fboNpvzO-tiNgT8Ng2dyko3p73l-gE.jpg?auto=webp&s=147322cbd996f955a56b4262c200ad0a7c5c616d",
 type:'fashion'
},{
 src:"https://thefader-res.cloudinary.com/private_images/w_760,c_limit,f_auto,q_auto:best/heeey3d28riqazrxdyqs_ijvnew/the-evolution-of-tyler-the-designer.jpg",
 type:'fashion'
},{
 src:"https://i.pinimg.com/originals/84/39/c7/8439c72e9a08c6be236c30faaa2201b0.jpg",
 type:'tech'
},{
  src:"https://thumbs.dreamstime.com/b/young-fashion-blond-woman-sunglasses-mall-interior-young-fashion-blond-woman-wearing-black-suit-jacket-sunglasses-121893301.jpg",
  type:'fashoin'
},{
  src:"https://i0.wp.com/invader.be/wp-content/uploads/2022/06/Steam-Deck-review-1-scaled.jpg?fit=768%2C433&ssl=1",
  type:'tech'
},{
  src:"https://media.bergdorfgoodman.com/f_auto,q_auto/01/bg_4187908_100244_m",
  type:'fashion'
},{
  src:"https://thumbs.dreamstime.com/b/fashion-model-street-beautiful-woman-fashionable-clothes-sexy-stylish-fall-shirt-scarf-pants-sweater-shoes-sitting-stairs-79059506.jpg",
  type:'fashion'
},{
  src:'https://images.squarespace-cdn.com/content/v1/6042a94f08e8ab42a10b9a95/1617577123610-Y8B5RMHU88W0O0LNLJ5P/unsplash-image-gaIaLZO9q1I.jpg',
  type:'fashion'
},{
  src:'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2022/01/xbox-series-x-2579481.jpg?itok=nrs5jHbh',
  type:'tech'
},{
  src:'https://i.pinimg.com/originals/61/6a/a2/616aa21d4f44219df85b108db22bfe0a.png',
  type:'frun'
},{
  src:'https://media.norwalkfurniture.com/wysiwyg/Colton_Wilson-moble-home-page.jpg',
  type:'frun'
},{
  src:'https://img1.homary.com/filters:format(webp)/mall/file/2022/05/06/52930fbf32a04a989fc8dbd5eb260373.jpg',
  type:'frun'
}];


let fashion_but = ref('active');
let tech_but = ref('');
let furn_but = ref(' ');

let grid_type = ref('f');

let g1 = ref([]);
g1.value = grid1.filter(a=>a.type==='fashion');

let g2 = ref([]);
g2.value = grid2.filter(a=>a.type==='fashion');

let g3 = ref([]);
g3.value = grid3.filter(a=>a.type==='fashion');

let g4 = ref([]);
g4.value = grid4.filter(a=>a.type==='fashion');




let dark = ref(false);




let theme = ref('light');

theme.value = localStorage.getItem('theme')||'light';

if(theme.value==='dark')
   dark.value=true;


let change_dark = ()=>{
  dark.value= true;
  theme.value = 'dark';
  localStorage.setItem('theme','dark');
  localStorage.setItem('all','dark');
}

let change_light = ()=>{
  dark.value= false;
  theme.value = 'light';
  localStorage.setItem('theme','light');
  localStorage.setItem('all','light');
}










let token = ref('');

token.value = localStorage.getItem('token');



let change_grid = type => {

  switch(type){
    case 'f':
      fashion_but.value='active';
      tech_but.value='';
      furn_but.value='';
      grid_type.value = 'f';
      g1.value = grid1.filter(a=>a.type==='fashion');
      g2.value = grid2.filter(a=>a.type==='fashion');
      g3.value = grid3.filter(a=>a.type==='fashion');
      g4.value = grid4.filter(a=>a.type==='fashion');
      break;
    case 't':
      tech_but.value='active';
      fashion_but.value='';
      furn_but.value='';
      grid_type.value = 't';
      g1.value = grid1.filter(a=>a.type==='tech');
      g2.value = grid2.filter(a=>a.type==='tech');
      g3.value = grid3.filter(a=>a.type==='tech');
      g4.value = grid4.filter(a=>a.type==='tech');
      break;
    case 'ff':
      furn_but.value='active';
      tech_but.value='';
      fashion_but.value='';
      grid_type.value = 'ff';
      g1.value = grid1.filter(a=>a.type==='frun');
      g2.value = grid2.filter(a=>a.type==='frun');
      g3.value = grid3.filter(a=>a.type==='frun');
      g4.value = grid4.filter(a=>a.type==='frun');
      
      break;
    default:
      break;      
  }

}


</script>


<template>

<div :class="`main_all main_all-`+theme">




  <nav :class="nav+` max navbar-main navbar-main-`+theme">
    <div class="container-fluid">
        <div class="main-flex d-flex justify-content-center">

          <label   :class="button+` button1 button2`" data-bs-toggle="modal" >
            <router-link to="main" class="logo_main">
            <ion-icon name="bag-handle-outline" class="cart-icon"></ion-icon>
          </router-link>
          </label>

          <div class="flex-grow-1 sec-flex d-flex ">
            <label class="flex-item nav-link" @click="tech">tech</label>
            <label class="flex-item nav-link" @click="fashion">fashion</label>
            <label class="flex-item nav-link" @click="furn">furn</label>
        </div>

        

    

          <button v-if="token==null" type="button" :class="button+` button1 `">
          <router-link to="/login" :class="`login_butt_main login_butt_main`+all">
           login
          </router-link>
        </button>
          <button v-if="!dark" class="theme-button theme-button1" @click="change_dark" ><ion-icon name="moon" class="moon"></ion-icon></button>
          <button v-if="dark" class="theme-button theme-button2" @click="change_light" ><ion-icon name="sunny" class="sun"></ion-icon></button>  
          
       
       
        </div>

    </div>
  </nav>










<div class="max main_first">

    <div id="carouselExampleIndicators" :class="`carousel slide carousel-`+theme" >
     
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="main-header-grid">
              <img class="img1" src="https://thumbs.dreamstime.com/b/beauty-brunette-model-girl-perfect-makeup-trendy-accessories-fashion-wear-88929334.jpg"  alt="...">
              <img class="img2" src="https://i.pinimg.com/736x/54/8d/25/548d25216e6b405515f00c8514d666ad.jpg"  alt="...">
              <img class="img3" src="https://thumbs.dreamstime.com/b/beautiful-young-hipster-woman-fashionable-sunglasses-stylish-black-t-shirt-trendy-denim-jacket-relaxes-outdoors-city-160729817.jpg"  alt="...">
              <div class="gsec">
                <label for="">NEW STYLIST <br> FASHOIN COLLECTION</label><br>
                <button @click="fashion">check</button>
              </div> 
            </div> 
          </div>
          <div class="carousel-item">
            <div class="main-header-grid">
              <img class="img1" src="https://photos5.appleinsider.com/gallery/47551-93006-Apple-Studio-Display-Front-Angled-xl.jpg"  alt="...">
              <img class="img2" src="https://qph.cf2.quoracdn.net/main-qimg-c6bdebbb6de6934fe6fcba8f1bc50720-lq"  alt="...">
              <img class="img3" src="https://www.plus.mv/wp-content/uploads/2021/08/ps5-600x900.jpg"  alt="...">
              <div class="gsec">
                <label for="">NEW STYLIST <br> FASHOIN COLLECTION</label><br>
                <button @click="tech">check</button>
              </div> 
            </div> 
          </div>
          <div :class="`carousel-item `">
            <div class="main-header-grid">
              <img class="img1" src="https://homeklondike.site/wp-content/uploads/2017/06/5-1-Lago-Italian-furniture-for-famous-women-Mauricia-Cacciatore-living-room-interior-design-contemporary-style-big-white-corner-sofa-throw-pillows-bookshelves-open-racks-dining-table-chair-glass-legs-base.jpg"  alt="...">
              <img class="img2" src="https://oxfordhouse.com.mt/wp-content/uploads/2021/06/lia-06-600x848.jpg"  alt="...">
              <img class="img3" src="https://propertyfurniture.com/wp-content/uploads/2016/12/arflex-location-232-600x900.jpg"  alt="...">
              <div class="gsec">
                <label for="">NEW STYLIST <br> FASHOIN COLLECTION</label><br>
                <button>check</button>
              </div> 
            </div> 
          </div>

          <div class="car_buttons">
            <div class="car_button_con d-flex align-items-end justify-content-end">
             <button @click="set_button_ac(1)"  type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1">
                <ion-icon v-if="button_ac===1" name="ellipse"></ion-icon>
                <ion-icon v-else name="ellipse-outline"></ion-icon>
            </button>
             <button @click="set_button_ac(2)" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">
                <ion-icon v-if="button_ac===2" name="ellipse"></ion-icon>
                <ion-icon v-else name="ellipse-outline"></ion-icon>
            </button>
             <button @click="set_button_ac(3)" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">
                <ion-icon v-if="button_ac===3" name="ellipse"></ion-icon>
                <ion-icon v-else name="ellipse-outline"></ion-icon>
            </button>
           </div>  
        </div>

        </div>
      </div>
 

</div>



<div class="max main_bf">
  <div :class="`text text2-`+theme">
    <label class="large_text" for="">Black Friday 2022</label><br>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae distinctio error dolores explicabo
       exercitationem maiores voluptates 
   <br> ex blanditiis dolorem inventore perferendis iure, animi placeat non provident hic deleniti, possimus tempora.    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae distinctio error dolores explicabo
   exercitationem maiores voluptates 
<br> ex blanditiis dolorem inventore perferendis iure, animi placeat non provident hic deleniti, possimus tempora.
  </div>

  <div class="img_cont_bf">
    <img src="https://www.lulus.com/images/product/xlarge/5616536_1156691.jpg?w=195&hdpi=1" alt="">
    <img class="abs_img" src="https://sc04.alicdn.com/kf/H09287e7738d146109dffa8e3e604c9d6S.jpg" alt="">
  </div>

</div>

<div class="min-header min">
  <div class="min-header-cont">
  <label   :class="button+` button1 button2`" >
    <router-link to="/main" class="logo_main">
    <ion-icon name="basket-outline" class="cart-icon"></ion-icon>
  </router-link>
  </label>


  <div :class="`min min-theme min-theme-`+all">
    <button v-if="!dark" class="theme-button theme-button1" @click="change_dark" ><ion-icon name="moon" class="moon"></ion-icon></button>
    <button v-if="dark" class="theme-button theme-button2" @click="change_light" ><ion-icon name="sunny" class="sun sunn"></ion-icon></button>  
  </div>
</div>



</div>



<div :class="`min min-header-main min-header-main-f `">

</div>


<div :class="`min min-main-sec-text-but min-main-sec-text-but-`+theme"></div>

<div class="but-text-cont min">
  <label class="large-text">find product with best <span class="color">prices</span></label>
  <label class="small-text">tech,fashion,furn you can find any product you want when ever you want where ever you are</label>
  <router-link to="/main" class="link">Store</router-link>
</div>


<!--
<div class="min min-main-butts" >
  
  <div class="grid-butts">
    <button @click="change_grid('f')" :class="fashion_but+theme" >fashion</button>
    <button @click="change_grid('t')" :class="tech_but+theme">tech</button>
    <button @click="change_grid('ff')" :class="furn_but+theme">furn</button>
    </div>
</div>
-->

<label :class="`gird-title min gird-title-`+theme" for="">New style list :</label>


<div :class="`min min-header-grid gird1-main-min-f  `">

<div class="small"></div>
<div class="small2"></div>

<div class="large"></div>

</div>



<div :class="`min min-header-grid2 gird2-main-min-f`">

  <div class="small"></div>  
  <div class="large"></div>
  
  </div>

  <button @click="fashion()" class="see-more min" >See more</button>



  <label :class="`gird-title min gird-title-`+theme" for="">all tech equipments :</label>


<div class="min min-header-grid-t">
  
    <div class="larget"></div>
    <div class="larget2"></div>
    <div class="larget3"></div>
    <div class="larget4"></div>
    <div class="larget5"></div>
    <div class="smallt"></div>
     
</div>
  
<button @click="tech()" class="see-more min">See more</button>


<label :class="`gird-title min gird-title-`+theme" for="">modren frun design :</label>


<div class="min min-header-grid-ff">
  
  <div class="h1"></div>
  <div class="l1"></div>
  <div class="l2"></div>
  <div class="l3"></div>
   
</div>

<button @click="furn()" class="see-more min">See more</button>

  


<div class="grid-buttns max">
  
  <div class="grid-butts">
  <button @click="change_grid('f')" :class="fashion_but+theme" >fashion</button>
  <button @click="change_grid('t')" :class="tech_but+theme">tech</button>
  <button @click="change_grid('ff')" :class="furn_but+theme">furn</button>
  </div>


<div class="grid_sec">

  
<!-- 1 -->

<div class="sec_grid_f">
    
  <div v-for="img in g1" class="sec_grid_img"> 
    <img :src="img.src" alt="">
    <div  class="max d-flex flex-column card_hov">
     <label class="" for="">see more in {{img.type}}</label>  
     <button v-if="img.type=='fashion'" @click="fashion">go to sotre</button>
      <button v-else-if="img.type=='tech'" @click="tech">go to sotre</button>
      <button v-else @click="furn">go to sotre</button>    </div> 
   </div>
   

  </div>


<!-- 2 -->

<div class="sec_grid_f">


  <div v-for="img in g2" class="sec_grid_img"> 
    <img :src="img.src" alt="">
    <div  class="max d-flex flex-column card_hov">
      <label class="" for="">see more in {{img.type}}</label>  
      <button v-if="img.type=='fashion'" @click="fashion">go to sotre</button>
      <button v-else-if="img.type=='tech'" @click="tech">go to sotre</button>
      <button v-else @click="furn">go to sotre</button>

     </div> 
   </div>

</div>


<!-- 3 -->

<div class="sec_grid_f max">



  <div v-for="img in g3" class="sec_grid_img"> 
    <img :src="img.src" alt="">
    <div  class="d-flex flex-column card_hov">
      <label class="" for="">see more in {{img.type}}</label>  
      <button v-if="img.type=='fashion'" @click="fashion">go to sotre</button>
      <button v-else-if="img.type=='tech'" @click="tech">go to sotre</button>
      <button v-else @click="furn">go to sotre</button>     </div> 
   </div>


</div>


<!-- 4 -->

<div class="sec_grid_f max">
  




  <div v-for="img in g4" class="sec_grid_img"> 
    <img :src="img.src" alt="">
    <div  class="d-flex flex-column card_hov">
     <label class="" for="">see more in {{img.type}}</label>  
     <button v-if="img.type=='fashion'" @click="fashion">go to sotre</button>
      <button v-else-if="img.type=='tech'" @click="tech">go to sotre</button>
      <button v-else @click="furn">go to sotre</button></div> 
   </div>


</div>

</div>

</div>

<div :class="`main-footer main-footer-`+theme"><router-link to="/main" :class="`link `">Go to store</router-link></div>


</div>


<div class="fa-3x">
  <i class="fa-solid fa-basketball fa-bounce"></i>
  <i class="fa-solid fa-volleyball fa-bounce"></i>

  <!-- bounce animation with no "squish" -->
  <i class="fa-solid fa-frog fa-bounce" style=" --fa-bounce-start-scale-x: 1; --fa-bounce-start-scale-y: 1; --fa-bounce-jump-scale-x: 1; --fa-bounce-jump-scale-y: 1; --fa-bounce-land-scale-x: 1; --fa-bounce-land-scale-y: 1; " ></i>

  <!-- bounce animation with no "squish" or "rebound" -->
  <i class="fa-solid fa-envelope fa-bounce" style=" --fa-bounce-start-scale-x: 1; --fa-bounce-start-scale-y: 1; --fa-bounce-jump-scale-x: 1; --fa-bounce-jump-scale-y: 1; --fa-bounce-land-scale-x: 1; --fa-bounce-land-scale-y: 1; --fa-bounce-rebound: 0;" ></i>
</div>

</template>
  

<style src="../assets/main.css">


</style>


