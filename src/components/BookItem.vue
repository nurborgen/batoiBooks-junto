<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiAccount } from '@mdi/js'
import AddCart from './icons/AddCart.vue'
import EditBook from './icons/EditBook.vue'
import DeleteBook from './icons/DeleteBook.vue'

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
    <button>
      <edit-book></edit-book>
    </button>
    <button>
      <delete-book></delete-book>
    </button>
  </div>
</template>
