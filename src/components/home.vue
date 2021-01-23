<template>
  <div>
      <div>这里是home页面</div>
      <div><button @click="jumpto('search')">跳转search页面</button></div>
      <div><button @click="jumpto('flowerDetail')">跳转flowerDetail页面</button></div>
  </div>
</template>

<script>
import * as dayjs from 'dayjs'
//导相对时间插件
import relativeTime from 'dayjs/plugin/relativeTime'

//导国际化插件i18n
import 'dayjs/locale/zh-cn'
dayjs.extend(relativeTime)
dayjs.locale('zh-cn')

export default {
  mounted(){
    // var time=dayjs('2019-01-25').format('DD/M/YYYY');
    // console.log('time',time)

    // var time=dayjs(new Date()).format('YYYY-MM-DD');
    // console.log('time',time)

    var time= dayjs(new Date('2021-1-21')).fromNow();
    console.log('time',time)
  },
   methods:{
    jumpto(str){
      this.$router.push({name:str})
    }
  }

}
</script>

<style>

</style>