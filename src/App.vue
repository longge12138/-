<template>
  <div id="app">
   <!-- <div class="title">这里是app的router-view之外的地方</div> -->
  
    <router-view/>
    <div class="footerbox" v-show="showfoot">
      <div class="item" @click="jumpto('home')" :class="{'foucus':$route.name==='home'}">home</div>
      <div class="item" @click="jumpto('search')" :class="{'foucus':$route.name==='search'}">search</div>
      <div class="item" @click="jumpto('flowerDetail' )" :class="{'foucus':$route.name==='flowerDetail'}">detail</div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'

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
  mounted(){
    // 查全部cookie
    // var cookiestr=document.cookie;
    // console.log('cookiestr',cookiestr);

    // 增加一个cookie
    // document.cookie="name=jack"
    // document.cookie="age=18"
    // document.cookie.age

    // 修改一个cookie
    // document.cookie="name=rose"

    // 删除一个cookie

    // document.cookie = `name=; expires=${new Date('1920/01/23').toString()}`;

    // 使用插件
    Cookies.set('name', 'jakc');
    Cookies.set('age',18);

    // Cookies.set('name', 'tanggaowei', { expires: new Date('1920/01/23').toString() });
      // Cookies.remove('age'); 
    var str=Cookies.get('name');
    console.log('str',str);

    this.$axios({
      method:'get',
      url:'/api/vanlist'
    }).then((res)=>{

    })

  },
  computed:{
   
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
  // border:1px solid red;
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
