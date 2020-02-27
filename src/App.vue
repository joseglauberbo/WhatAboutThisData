<template>
  <div class="container">
    <img src="./assets/logo2.png">
    <Button/> 
  </div>
  
</template>

<script>

import Button from "./components/button"

export default {
  name: 'App',
  components: {
    Button
  }
}
</script>

<style>
.container img {
   max-width:1000px;
   max-height:600px;
   display: block;
   margin-left: auto;
   margin-right: auto
}
</style>
