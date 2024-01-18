<script>
import ModulesRepository from '@/repositories/modules.repository'
import BooksRepository from '@/repositories/books.repository'

export default {
  name: 'add-book',
  data() {
    return {
      modules: {},
      book: {},
    }
  },

  async mounted() {
    let modulesRepository = new ModulesRepository()
    try {
      this.modules = await modulesRepository.getAllModules()
    } catch (error) {
      throw error
    }
  },

  methods: {
    addBook() {
      let booksRepository = new BooksRepository()
      try {
        booksRepository.addBooks(this.book)
      } catch {

      }
    }
  }
}

let id = 3
</script>

<template>
  <div id="titulo"></div>
  <form @submit.prevent="addBook" @reset.prevent="handleReset">
    <div hidden>
      <label for="id">Id:</label>
      <input id="id" readonly />
    </div>
    <div>
      <label for="id-module">Módulo:</label>
      <select v-model="this.book.idModule">
        <option v-for="module in modules" :key="module.code" :value="module.code">
          {{ module.cliteral }}
        </option></select
      ><br />
    </div>

    <div>
      <label for="publisher">Editorial:</label>
      <input type="text" v-model="book.publisher" required /><br />
    </div>

    <div>
      <label for="price">Precio:</label>
      <input type="number" v-model="book.price" required /><br />
    </div>

    <div>
      <label for="pages">Páginas:</label>
      <input type="number" v-model="book.pages" required /><br />
    </div>

    <div>
      <label>Estado:</label>
      <div></div>
      <input type="radio" v-model="book.status" value="new" />
      <label>Nuevo</label>
      <input type="radio" v-model="book.status" value="good" />
      <label>Bien</label>
      <input type="radio" v-model="book.status" value="used" />
      <label>Usado</label>
      <input type="radio" v-model="book.status" value="bad" />
      <label>Malo</label>
    </div>

    <div>
      <label for="comments">Comentarios:</label>
      <textarea id="comments" v-model="book.comments" required></textarea>
    </div>

    <button type="submit">Añadir</button>
    <button type="reset">Reset</button>
  </form>
</template>
