<script>
import ModulesRepository from '@/repositories/modules.repository'
import BooksRepository from '@/repositories/books.repository'
import router from '@/router'

export default {
  name: 'add-book',
  props: ['id'],
  data() {
    return {
      modules: {},
      book: {},
    }
  },

  async mounted() {
    let modulesRepository = new ModulesRepository()
    let booksRepository = new BooksRepository()

    try {
      if (this.id) {
        this.book = await booksRepository.getBooksById(this.id)
      }
      this.modules = await modulesRepository.getAllModules()
    } catch (error) {
      throw error
    }
  },

  methods: {
    addBook() {
      let booksRepository = new BooksRepository()
      try {
        if (this.book.id) {
          booksRepository.changeBook(this.book)
        } else {
          booksRepository.addBooks(this.book)
        }
      } catch {
        throw error
      }
      this.book = {}
      router.push('/books')
    }
  }
}

let id = 3
</script>

<template>
  <div id="titulo"></div>
  <form @submit.prevent="addBook" @reset.prevent="handleReset">
    <h3 v-if="$route.path == '/new'">Añadir libro</h3>
    <h3 v-else>Editar libro</h3>
    <div v-if="$route.name == 'edit'">
      <label>Id:</label>
      <input v-model="book.id" type="text" readonly />
    </div>
    <div>
      <label for="id-module">Módulo:</label>
      <select v-model="book.idModule" required>
        <option v-for="module in modules" :key="module.code" :value="module.code">
          {{ module.cliteral }}
        </option>
      </select>
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
