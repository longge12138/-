<template>
  <div>
      <div>这里是搜索页面</div>
      <div><button @click="showpane=true">展示筛选框</button></div>
      <div class="flower" v-for="item in showList" :key="item.name">
          <div class="left"><img :src="item.imgUrl" alt="" srcset=""></div>
          <div class="right">
            <div class="title">{{item.name}}</div>
            <div class="price">{{item.price}}</div>
          </div>
      </div>
      <van-overlay :show="showpane" @click="showpane = false">
        <div class="wrapper" >
          <div class="block" @click.stop>
            <div class='item'>
              <van-switch v-model="issort" />
            </div>
            <div class="item">
              <span> 0</span>
             <van-slider v-model="max_price" :max="240"  @change="onChange" />
             <span>{{max_price}}</span>
            </div>
            <div class="btn" @click="doshaixuan">
              点击开始筛选
            </div>
          </div>
        </div>
      </van-overlay>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  data(){
    return{
      showList:[],
      origin_list:[],
      showpane:false,
      issort:false,
      max_price:0,
      min_price:0
    }
    
  },
    methods: {
    doshaixuan(){
      var temp_list=this.origin_list.filter((item)=>{
        if(item.price>0&&item.price<=this.max_price){
          return true;
        }else{
          return false
        }
      });
      console.log('temp_list',temp_list);
      this.showList=temp_list


      this.showpane=false;
    },
    onChange(value) {
      Toast('当前值：' + value);
    },
  },
  mounted(){
    this.$axios({
      url:'/api/recomment',
      method:'get'
    }).then((res)=>{
      console.log('res',res);
      this.showList=res.data.recomment_list;
      this.origin_list=JSON.parse(JSON.stringify(res.data.recomment_list));
    })
  }
}
</script>

<style scoped lang="less">
.flower{
  border:1px solid red;
  display:flex;
  justify-content: space-between;
  padding-left:10px;
  padding-right:10px;
  .left{
    img{
      width:8vw;
      height:8vw;
    }
  }
}
 .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width:80vw;

    .item{
      padding:10vw;
      background-color:white;
      display:flex;
      justify-content: center;
    }
    .btn{
      margin-top:20px;
      background: red;
      color:white;
    }
  }
</style>