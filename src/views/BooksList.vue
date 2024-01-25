<script>
import BooksRepository from '@/repositories/books.repository'
import BookItem from '@/components/BookItem.vue'
import { store } from '../store/index.js'

export default {
  data() {
    return {
      books: {}
    }
  },

  async mounted() {
    let booksRepository = new BooksRepository()
    try {
      this.books = await booksRepository.getAllBooks()
    } catch (error) {
      store.setMessageAction('No hay libros en la base de datos')
    }
  },
  components: {
    BookItem
  }
}
</script>

<template>
  <div>
    <book-item v-bind:book="book" v-for="book in this.books"></book-item>
  </div>
</template>
