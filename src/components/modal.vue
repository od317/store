<script>

export default{
    name:'modal',
    props:{
        cart:{
            type:Object
        },
        total:Number,
        count:Number
    },
    methods:{
       removei:(item)=>{
    let k=0;
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
}
    }
}

</script>

<template>
    
    <button type="button" class="button1 btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        {{count}}
      </button>
      
      
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div v-for="item in cart">
                <div class="modal-item-text modal-text">{{item.name}}</div>
                <div class="modal-flex d-flex justify-content-evenly ">
                  <img class="item-img " :src="item.img" alt=""> 
                </div> 
                <div class=" d-flex justify-content-between ">
                  <div>  
                    <label class="modal-text">total price: {{item.price}}  </label><br> 
                    <label class="modal-text">total count: {{item.count}} </label>
                  </div>
                  <button @click="removei">remove</button>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">{{total}}$</button>
            </div>
          </div>
        </div>
      </div>
    
      
</template>


<style scoped>
.button1{
    border-radius: 7px;
    margin-right: 2rem;
    margin-top: .5rem;
    margin-bottom: .5rem;
    width: 10%;
}
.modal-text{
    color:black;
}

.item-img{
  width:50%;
  height: 50%;
}

.modal-flex{
  align-items: center;
}

.modal-item-text{
   margin-left: 1rem;
}

</style>