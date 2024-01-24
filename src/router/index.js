import { createRouter, createWebHistory } from 'vue-router'
import AppAbout from '../views/AppAbout.vue'
import BooksList from '../views/BooksList.vue'
import AddBook from '../views/AddBook.vue'
import AppCart from '../views/AppCart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      component: AppAbout
    },
    {
      path: '/books',
      component: BooksList
    },
    {
      path: '/new',
      component: AddBook
    }, 
    {
      path: '/cart',
      component: AppCart
    },
    //{
    //path: '/edit/:id',
    //component: BookEdit,
    //props: true
    //}
  ]
})

export default router
