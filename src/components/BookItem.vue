<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiAccount } from '@mdi/js'

export default {
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  components: {
    SvgIcon
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
    <svg-icon type="cart"></svg-icon>
    <button class="cart">
      <span class="material-icons">add_shopping_cart</span>
    </button>
    <button class="edit">
      <span class="material-icons">edit</span>
    </button>
    <button class="delete">
      <span class="material-icons">delete</span>
    </button>
  </div>
</template>
