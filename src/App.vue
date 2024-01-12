<script setup>
import AppMenu from './components/AppMenu.vue'
import AppMessages from './components/AppMessages.vue'
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
  <router-view></router-view>
</template>
