<template>
  <div class="buttons">
  <link href="https://fonts.googleapis.com/css?family=Lobster&display=swap" rel="stylesheet">
  <button type="button" class="buttonReturn"> Return </button>
  </div>
</template>

<script>
export default {
  name: "ButtonReturn"
}
</script>

<style>

.buttonReturn {
  width:130px;
  height:50px;
  margin-top: 10px;
  border: none;
  color: #ffffff;
  font-size: 25px;
  border-radius: 30px;
  cursor: pointer;
  transition: all 400ms ease;
  background-color: #F4A460;
  font-family: 'Lobster', cursive;
  transform: translate(240%,0%);
  outline: none;
}

.buttonReturn:hover {
  background: rgba(0,0,0,0);
  color: #F4A460;
  box-shadow: inset 0 0 0 3px #F4A460;
}

</style>

