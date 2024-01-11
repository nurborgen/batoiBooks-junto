<script setup>
import AppMenu from './components/AppMenu.vue'
import AppMessages from './components/AppMessages.vue'
import BookList from './views/BooksList.vue'
import AddBook from './views/AddBook.vue'
import AppCart from './views/AppCart.vue'
import AppAbout from './views/AppAbout.vue'
</script>

<template>
  <header>
    <a href="https://vitejs.dev" target="_blank">
      <img src="../public/logoBatoi.png" class="logo" alt="Vite logo" />
    </a>
    <h1>BatoiBooks</h1>
  </header>
  <app-menu></app-menu>
  <app-messages></app-messages>
  <book-list></book-list>
  <add-book></add-book>
  <app-cart></app-cart>
  <app-about></app-about>
</template>
