import { createRouter, createWebHistory } from 'vue-router'

import Dcheros from './pages/Dcheros.vue'
import calendar from './pages/calendar.vue'
import HelloWorld from './pages/HelloWorld.vue'
import Markdown from './pages/Markdown.vue'
import slider from './pages/slider.vue'
import calculator from './pages/calculator.vue'
import reusableModel from './pages/reusableModel.vue'
import chat from './pages/chat.vue'
import store from './store/index'
import usercrud from './pages/usercrud.vue'
import tensorflow from './pages/tensorflow.vue'
const routes = [
  { path: "/", component: HelloWorld },
  { path: "/calendar", component: calendar },
  { path: "/dc-heros", component: Dcheros },
  {
    path: "/markdown", component: Markdown,
    meta: { middleware: "auth" },
  },
  { path: "/slider", component: slider },
  { path: "/calculator", component: calculator },
  { path: "/reusableModel", component: reusableModel },
  {
    path: "/chat", component: chat,
    meta: { middleware: "auth" },     
  },
  { path: "/usercrud", component: usercrud},
  { path: "/tensorflow", component: tensorflow}

]
const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})
router.beforeEach((to,_, next) => {
  if (to.meta.middleware) {
    const middleware = require(`./middleware/auth`)
    if (middleware) {
      middleware.default( next,store);
        
    }
    else {
      next()
    }

  }
  else {
    next()
  }
})


export default router;