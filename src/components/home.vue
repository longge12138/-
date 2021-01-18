<template>
  <div>
      <div>这里是home页面</div>
      <div><button @click="jumpto('search')">跳转search页面</button></div>
      <div><button @click="jumpto('flowerDetail')">跳转flowerDetail页面</button></div>
  </div>
</template>

<script>
export default {
   methods:{
    jumpto(str){
      this.$router.push({name:str})
    }
  }

}
</script>

<style>

</style>