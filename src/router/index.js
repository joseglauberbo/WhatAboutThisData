import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/views/Home'
import Music from '../components/views/Music'
import Politic from '../components/views/Politic'

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
    }
  ]
})