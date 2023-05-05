<template>
    
    <div :class="label+`-back img-header`"><label> {{label == 'frun' ? 'furniture':label}}</label></div>


</template>


<script>

 export default{
    name:'img-header',
    props:{
        label:String,
    } 
}

</script>

