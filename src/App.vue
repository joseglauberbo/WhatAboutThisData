<template>
  <div class="container">
    <img src="./assets/logo2.png">
    <Button> </Button>
    <router-view></router-view>
  </div>  
</template>

<script>

import Button from "./components/Button"

export default {
  name: 'App',
  components: {
    Button
  }
}
</script>

<style>
.container img {
   max-width:900px;
   max-height:500px;
   display: block;
   margin-left: auto;
   margin-right: auto
}
</style>
