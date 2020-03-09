<template>
  <div class="containerCards">
    <link href="https://fonts.googleapis.com/css?family=Lobster&display=swap" rel="stylesheet">
    <router-link to="/politic/1"><button type="button" class="buttonsCardsPolitic"> Income distribution of Campina Grande </button></router-link>
  </div>
</template>

<script>

export default {
  name: 'CardPolitic'
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
.buttonsCardsPolitic {
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
  background-color: #F08080;
  font-family: 'Lobster', cursive;
  outline: none;
}

.buttonsCardsPolitic:hover {
  background: rgba(0,0,0,0);
  color: #F08080;
  box-shadow: inset 0 0 0 3px #F08080;
}
</style>