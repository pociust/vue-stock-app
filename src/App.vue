<template>
  <div class="frow">
    <div>name: {{ this.$store.state.title }} </div>
    <NavigationBar></NavigationBar>
  </div>
</template>

<script>
  import NavigationBar from './components/NavigationBar.vue';
  export default {
    components: {
      NavigationBar
    }
  }
</script>

<style scoped>
  /* div {
    color: red;
  } */
</style>