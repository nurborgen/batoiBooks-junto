<script>
import BooksRepository from '@/repositories/books.repository'
import BookItem from '@/components/BookItem.vue'

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
      throw error
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
