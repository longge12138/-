<template>
  <div>
      <div>这里是登录页</div>
  <div><button  @click="jumpto('home')">跳转home页面</button></div>

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