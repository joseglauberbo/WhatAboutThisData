<template>
  <div class="containerCards">
    <link href="https://fonts.googleapis.com/css?family=Lobster&display=swap" rel="stylesheet">
    <router-link to="/music/1"><button type="button" class="buttonsCardsMusic"> browsing what I hear on spotify </button></router-link>
    <router-link to="/music/2"><button type="button" class="buttonsCardsMusic"> about Rihanna's albumns </button></router-link>
  </div>
</template>

<script>

export default {
  name: 'CardMusic',

}
</script>

<style>
.containerCards {
  width:600px;
  height:500px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.buttonsCardsMusic {
  width:600px;
  height:70px;
  border: none;
  color: #ffffff;
  padding: 10px;
  margin-top: 40px;
  font-size: 30px;
  line-height: 10px;
  border-radius: 30px;
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 400ms ease;
  background-color: #66CDAA;
  font-family: 'Lobster', cursive;
  outline: none;
}

.buttonsCardsMusic:hover {
  background: rgba(0,0,0,0);
  color: #66CDAA;
  box-shadow: inset 0 0 0 3px #66CDAA;
}
</style>