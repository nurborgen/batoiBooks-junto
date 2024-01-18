<script>

export default {
  data() {
    return {
      messages: 'Hola'
    }
  },

  //async mounted() {
  //  
  //},
  //components: {
  //  
  //}
}
</script>

<template>
  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="alert"
    aria-label="Close"
    onclick="this.parentElement.remove()">
    {{ this.messages }}
  </button>
</template>
