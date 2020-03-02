<template>
  <div class="container">
    <img src="./assets/logo2.png">
    <router-view></router-view>
  </div>  
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
.container img {
   max-width:800px;
   max-height:500px;
   display: block;
   margin-left: auto;
   margin-right: auto
}
</style>
