<script>
import axios from 'axios'

const SERVER = 'http://localhost:3000'

mounted() {
    axios.get(SERVER + '/todos')
        .then(response => this.todos = response.data)
        .catch(response => {
            alert('Error: ' + response.message)
            this.todos = []
        })
}
</script>

<template>
    <div>
        <book-item v-bind:book="book" v-for="(book) in books"></book-item>
    </div>
</template>