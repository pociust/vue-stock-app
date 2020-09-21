<template>
  <div>
    <div class="frow title">name: {{ this.$store.state.title }} </div>
    <router-view name="NavBar"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  .title {
    font-size: 2em;
    background-color: #3700b3;
    color: white
  }
  div {
    font-family: 'Roboto', sans-serif;
  }
</style>