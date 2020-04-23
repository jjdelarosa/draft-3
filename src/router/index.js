import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'
import Messages from '../views/Messages.vue'
import NewsFeed from '../views/NewsFeed.vue'
import Create from '../views/Create.vue'
import Room from '../views/Room.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/messages',
    name: 'Messages',
    component: Messages,
  },
  {
    path: '/newsfeed',
    name: 'NewsFeed',
    component: NewsFeed,
  },
  {
    path: '/create',
    name: 'Create',
    component: Create,
  },
  {
    path: '/room/:id',
    name: 'Room',
    component: Room,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
