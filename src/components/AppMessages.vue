<script>
import { store } from '../store/index.js';

export default {
  data() {
    return {
      message: store.state.message
    }
  },
  methods: {
    limpiarMens() {
      store.clearMessageAction()
    }
  }
}
</script>

<template>
  <div v-for="item in message" class="btn-close">
    <label>
      {{ item }}
    </label>
    <button type="button" data-bs-dismiss="alert"
      aria-label="Close" @click="limpiarMens">x</button>
  </div>
  
</template>

<style>
  .btn-close {
    color: red;
  }
</style>