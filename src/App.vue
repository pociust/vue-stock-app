<template>
  <div class="frow">
    <div>name: {{ title }} </div>
    <button>click me</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Vue Stock App'
      }
    }
  }
</script>

<style scoped>
  div {
    color: red;
  }
</style>