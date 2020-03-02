import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/views/Home'
import Music from '../components/views/Music'
import Politic from '../components/views/Politic'
import SpotifyMusic from '../components/views/SpotifyMusic'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/music',
      name: 'Music',
      component: Music
    },
    {
      path: '/politic',
      name: 'Politic',
      component: Politic
    },
    {
      path: '/music/1',
      name: 'SpotifyMusic',
      component: SpotifyMusic

    }
  ]
})