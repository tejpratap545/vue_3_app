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

const routes = [
  { path: "/", component: HelloWorld },
  { path: "/calendar", component: calendar },
  { path: "/dc-heros", component: Dcheros },
  { path: "/markdown", component: Markdown },
  { path: "/slider", component: slider },
  { path: "/calculator", component: calculator },
  { path: "/reusableModel", component: reusableModel },
  {
    path: "/chat", component: chat,beforeEnter: ( _,__, next) => {
        if (!store.state.isloggedIn) {
          next("/");
        }
        else {
          next()
      }
    }
  }

]
const router = createRouter({


  history: createWebHistory(),



  routes, // short for `routes: routes`
})


export default router;