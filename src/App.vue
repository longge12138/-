<template>
  <div id="app">
   <div class="title">这里是router-view之外的地方</div>
   <div>{{name}}</div>
    <router-view/>
    <div class="footerbox" v-show="showfoot">
      <div class="item" @click="jumpto('home')" :class="{'foucus':cur==='home'}">home</div>
      <div class="item" @click="jumpto('search')" :class="{'foucus':cur==='search'}">search</div>
      <div class="item" @click="jumpto('flowerDetail' )" :class="{'foucus':cur==='flowerDetail'}">detail</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      name:'jack',
      // cur:'home'
    }
  },
   methods:{
    jumpto(str){
      this.$router.push({name:str});
      // this.cur=str;
    }
  },
  computed:{
    cur(){
      // if(this.$route.name==='home'){
      //   return 'home'
      // }
      // if(this.$route.name==='search'){
      //   return 'search'
      // }
      //  if(this.$route.name==='flowerDetail'){
      //   return 'flowerDetail'
      // }
      // return ''
      return this.$route.name
      

    },
    showfoot(){
      if(this.$route.name==='welcome'||this.$route.name==='signin'){
        return false
      }else{
        return true;
      }
    },
    // showfoot2(){
    //   return !this.$route.meta.notneedfoot
    // }
  }
}
</script>

<style lang="less">
*{
  margin:0;
  padding:0;
}
.foucus{
  background-color:pink;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size:24px;
}
.title{
  border:1px solid red;
}
.footerbox{
  position:fixed;
  bottom:0;
  width:100vw;

  display:flex;
  justify-content: space-between;
  border:1px solid red;
  .item{
    flex:1;
    border:1px solid gray;
    text-align: center;
  }
}
</style>
