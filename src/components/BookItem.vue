<script>
export default {
  props: {
    book: {
      type: Object,
      required: true
    }
  },
}
</script>

<template>
  <div>
    <h5>{{ book.idModule }} ({{ book.id }})</h5>
    <h6>{{ book.publisher }}</h6>
    <p>Precio: {{ book.price }}</p>
    <p>Páginas: {{ book.pages }}</p>
    <p>Estado: {{ book.status }}</p>
    <p>{{ book.soldDate ? "Vendido el: " + book.soldDate : "En venta" }}</p>
    <p>Comentarios: {{ book.comments }} </p>
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