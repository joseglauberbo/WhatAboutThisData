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
      typeWriter(elemento) {
      const textoArray = elemento.innerHTML.split('');
      elemento.innerHTML = '';
      textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 90 * i);
      });
    }
  },
  mounted: function() {
    const titulo = document.getElementById('myclass');
    console.log(this.typeWriter(titulo))
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
}
</style>