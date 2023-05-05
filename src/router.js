import {createRouter,createWebHistory} from 'vue-router';

import { Carousel, Slide } from 'vue-carousel';

const routes = [
    { path:'/main',
      name:'home',
      component:()=> import('./views/Home.vue')
    },
    { path:'/login',
      name:'login',
      component:()=> import('./views/Login.vue'),
      meta:{
          requiresAuth:true
      }
    },
    { path:'/register',
      name:'register',
      component:()=> import('./views/Register.vue'),
      meta:{
          requiresAuth:true
      }
    },
    { path:'/',
      name:'main',
      component:()=> import('./views/Main.vue')
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
});

router.beforeEach(async (to,from,next)=>{
  if(to.matched.some(record => record.meta.requiresAuth)){
   const token = localStorage.getItem('token');
   if(token==null){
       return next();
   }
   return next('/');
  }
  next();
})


export default router;