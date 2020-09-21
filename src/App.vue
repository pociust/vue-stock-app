<template>
  <div>
    <div class="frow title">name: {{ this.$store.state.title }} </div>
    <NavigationBar></NavigationBar>
    <router-view></router-view>
  </div>
</template>

<script>
  import NavigationBar from './components/NavigationBar.vue';
  export default {
    components: {
      NavigationBar,
    }
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