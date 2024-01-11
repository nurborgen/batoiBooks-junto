<script>
import BooksRepository from '../repositories/books.repository'


export default {
    name: 'add-book',
    data() {
        return {
            
        }
    },
    
}

let id = 3
</script>

<template>
    <div id="titulo"></div>
    <form   @submit.prevent="addBook"
            @reset.prevent="handleReset">
        <div hidden>
            <label for="id">Id:</label>
            <input id="id" readonly>
        </div>
        <div>
            <label for="id-module">Módulo:</label>
            <select id="id-module">
                <option>- Selecciona un módulo -</option>
            </select><br>
        </div>

        <div>
            <label for="publisher">Editorial:</label>
            <input type="text" id="publisher" required><br>
        </div>

        <div>
            <label for="price">Precio:</label>
            <input type="number" id="price" required><br>
        </div>

        <div>
            <label for="pages">Páginas:</label>
            <input type="number" id="pages" required><br>
        </div>

        <div>
            <label>Estado:</label>
            <div></div>
            <input type="radio" id="status" name="status" value="new">
            <label>Nuevo</label>
            <input type="radio" id="status" name="status" value="good">
            <label>Bien</label>
            <input type="radio" id="status" name="status" value="used">
            <label>Usado</label>
            <input type="radio" id="status" name="status" value="bad">
            <label>Malo</label>
        </div>

        <div>
            <label for="comments">Comentarios:</label>
            <textarea id="comments" required></textarea>
        </div>

        <button type="submit">Añadir</button>
        <button type="reset">Reset</button>
    </form>
</template>