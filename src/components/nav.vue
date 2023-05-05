<template>
    
    <nav class="navbar  bg-dark">
        <div class="container-fluid">
            <div class="main-flex d-flex justify-content-center">

            <div class="flex-grow-1 sec-flex d-flex justify-content-center">
                <label class="flex-item">all</label>
                <label class="flex-item">laptops</label>
                <label class="flex-item">notebooks</label>
            </div>
 
             <modal :count="count" :cart="cart" :total="total"/>
            </div>

        </div>
      </nav>

</template>

<script>

import modal from './modal.vue';

export default{
    name:'nav',
    props:{
        count:Number,
        cart:{
            type: Object,
        },
        total:Number
    }, components: {
    modal
  }
}

</script>

<style scoped>

.navbar{
    color: white;
    padding: 1rem;
}

.sec-flex{
    margin-right:5rem;
    padding:1rem;

}

.main-flex{
    width:100vw;
}

.flex-item{
    margin-right: 4rem;
    font-size: 1.3rem;
}

</style>