<template>
  <div>
    <div>name: {{ title }} </div>
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