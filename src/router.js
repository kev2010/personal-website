import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: () => import('./views/Main.vue'),
      meta: {
        title: 'Kevin Jiang',
        icon: "./assets/kevin.png"
      }
    },
    {
      path: '/about',
      name: 'Main',
      component: () => import('./views/Main.vue'),
      meta: {
        title: 'Kevin Jiang',
        icon: "./assets/kevin.png"
      }
    },
    {
      path: '/experience',
      name: 'Experience',
      component: () => import('./views/Experience.vue'),
      meta: {
        title: 'Kevin Jiang',
        icon: "./assets/kevin.png"
      }
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('./views/Projects.vue'),
      meta: {
        title: 'Kevin Jiang',
        icon: "./assets/kevin.png"
      }
    },
    {
      path: '/activities',
      name: 'Activities',
      component: () => import('./views/Activities.vue'),
      meta: {
        title: 'Kevin Jiang',
        icon: "./assets/kevin.png"
      }
    },
    {
      path: '/activities/mit-clubs',
      name: 'MIT Clubs',
      component: () => import('./views/MITClubs.vue'),
      meta: {
        title: 'Kevin Jiang',
        icon: "./assets/kevin.png"
      }
    },
    {
      path: '/activities/taekwondo',
      name: 'Taekwondo',
      component: () => import('./views/Taekwondo.vue'),
      meta: {
        title: 'Kevin Jiang',
        icon: "./assets/kevin.png"
      }
    },
    {
      path: '/activities/poker',
      name: 'Poker',
      component: () => import('./views/Poker.vue'),
      meta: {
        title: 'Kevin Jiang',
        icon: "./assets/kevin.png"
      }
    },
    {
      path: '/activities/clubhouse',
      name: 'Clubhouse',
      component: () => import('./views/Clubhouse.vue'),
      meta: {
        title: 'Kevin Jiang',
        icon: "./assets/kevin.png"
      }
    },
    {
      path: '/lets-talk',
      name: 'Contact',
      component: () => import('./views/Contact.vue'),
      meta: {
        title: 'Kevin Jiang',
        icon: "./assets/kevin.png"
      }
    },
  ]
})
