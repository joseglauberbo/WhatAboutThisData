<template>
  <div>
  <link href="https://fonts.googleapis.com/css?family=Lobster&display=swap" rel="stylesheet">
  <router-link to="/music"><ButtonReturn/></router-link>
  </div>
</template>

<script>

import ButtonReturn from "../ButtonReturn"

export default {
  name: 'SpotifyMusic',
  components: {
    ButtonReturn
  }
}
</script>

<style>

</style>