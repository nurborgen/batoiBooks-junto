import { createRouter, createWebHistory } from 'vue-router'
import AppHome from '../App.vue'
import AppAbout from '../views/AppAbout.vue'
import BooksList from '../views/BooksList.vue'
import AddBook from '../views/AddBook.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome
    },{
      path: '/about',
      name: 'about',
      component: AppAbout
    },{
      path: '/books',
      component: BooksList
    },{
      path: '/new',
      component: AddBook
    },//{
      //path: '/edit/:id',
      //component: BookEdit,
      //props: true
    //}
  ]
})

export default router
