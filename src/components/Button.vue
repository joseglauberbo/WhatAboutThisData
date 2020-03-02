<template>
  <div class="buttons">
  <link href="https://fonts.googleapis.com/css?family=Pacifico&display=swap" rel="stylesheet">
    <router-link to="/music"><button type="button" class="efect"> Music </button></router-link>
    <router-link to="/politic"><button type="button" class="efect"> Politic </button></router-link>
  </div>
</template>

<script>
export default {
  name: "Button"
}
</script>

<style>

.buttons {
  text-align: center;
}
.efect {
  border: none;
  color: #ffffff;
  padding: 20px;
  margin: 10px;
  font-size: 30px;
  line-height: 10px;
  border-radius: 15px;
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 400ms ease;
  background-color: #87CEEB;
  font-family: 'Pacifico', cursive;
}

.efect:hover {
  background: rgba(0,0,0,0);
  color: #87CEEB;
  box-shadow: inset 0 0 0 3px #87CEEB;
}
</style>

