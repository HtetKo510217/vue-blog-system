import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreatePost from '../views/CreatePost.vue'
import Tag from '../views/Tag.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/create-post',
    name:'createPost',
    component:CreatePost
  },
  {
    path:'/tags/:tag',
    name:'Tag',
    component:Tag,
    props:true,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
