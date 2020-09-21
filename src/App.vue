<template>
  <div class="frow">
    <div>name: {{ this.$store.state.title }} </div>
    <button>click me</button>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  div {
    color: red;
  }
</style>