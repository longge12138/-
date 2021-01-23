<template>
  <div class="flower">
      <div>这里是是鲜花详情页</div>
      <div>这里是flowerdetail页面的routerview外面</div>
      <router-view></router-view>
      <div>
        <div><img :src="info.imgUrl" alt="" srcset=""></div>
        <div>{{info.name}}</div>
        <div>{{info.price}}</div>
      </div>
      <div>当前是否在购物车{{isincart?'是':'否'}}</div>
      <div>
        <div @click="addtocart">切换是否加入购物车</div>
      </div>

  </div>
</template>

<script>
export default {

  data(){
    return{
      id:this.$route.query.id,
      info:{},
    }
  },
  mounted(){
    this.$axios({
      method:'get',
      url:'/api/flowerdetail',
      params:{
        flowerId:this.$route.query.id
      }
    }).then((res)=>{
      console.log('res',res);
      this.info=res.data
    })
  },
  methods:{
    addtocart(){
      if(this.isincart){
        // this.$store.commit('des',this.info.id)
      }else{
      this.$store.commit('add',this.info)

      }
    }
  },
  computed:{
    allcartflower(){
      return this.$store.state.shoppingcarts;
    },
    isincart(){
      var flag=false;
      this.allcartflower.forEach((item)=>{
        if(item.id==this.info.id){
          flag=true;
        }
      })
      return flag;
    }
  }

}
</script>

<style scoped>
.flower{
  border:1px solid red;
}
img{
  width: 30vw;
  height: 30vw;
}

</style>