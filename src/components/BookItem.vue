<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiAccount } from '@mdi/js'
import AddCart from './icons/AddCart.vue'
import EditBook from './icons/EditBook.vue'
import DeleteBook from './icons/DeleteBook.vue'
import router from '@/router'
import BooksRepository from '@/repositories/books.repository'
import { store } from '../store/index.js'

export default {
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  components: {
    SvgIcon,
    AddCart,
    EditBook,
    DeleteBook,
  }, 
  data() {
    return {
      path: mdiAccount,
    }
  },
  methods: {
    editBook(book) {
      router.push('/edit/' + book.id)
    },
    async deleteBook(book) {
      let booksRepository = new BooksRepository()
      try {
        await booksRepository.removeBooks(book.id)
        router.push('/books')
      } catch (error) {
        store.setMessageAction('No se ha podido borrar el libro')
      }
      
    }
  }
}
</script>

<template>
  <div>
    <h5>{{ book.idModule }} ({{ book.id }})</h5>
    <h6>{{ book.publisher }}</h6>
    <p>Precio: {{ book.price }}</p>
    <p>Páginas: {{ book.pages }}</p>
    <p>Estado: {{ book.status }}</p>
    <p>{{ book.soldDate ? 'Vendido el: ' + book.soldDate : 'En venta' }}</p>
    <p>Comentarios: {{ book.comments }}</p>
    <button>
      <add-cart></add-cart>
    </button>
    <button  @click="editBook(book)">
      <edit-book></edit-book>
    </button>
    <button  @click="deleteBook(book)">
      <delete-book></delete-book>
    </button>
  </div>
</template>
