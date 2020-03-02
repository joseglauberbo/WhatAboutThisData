<template>
  <div class="container">
   <link href="https://fonts.googleapis.com/css?family=Lobster&display=swap" rel="stylesheet">
    <h1 id="myclass"> 
      This website has focus in show you  better visualizations about some data that are open to public. Below you can choose the subject that interests you most. I hope you have fun!!!</h1>
  </div>
</template>

<script>

export default {
  name: 'InitialText',
  methods: {
      typeWriter(element) {
      const textArray = element.innerHTML.split('');
      element.innerHTML = '';
      textArray.forEach((letter, index) => {
      setTimeout(() => element.innerHTML += letter, 85 * index);
      });
    }
  },
  mounted: function() {
    const title = document.getElementById('myclass');
    console.log(this.typeWriter(title))
  }
}
</script>

<style>
.container{
   max-width:900px;
   max-height:500px;
   display: block;
   margin-left: auto;
   margin-right: auto
}
h1 {
  font-family: 'Lobster';
  text-align: justify;
  font-size: 40px;
  color: #363636;
}
</style>