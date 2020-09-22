<template>
  <div>
    <div class="frow title">{{ this.$store.state.title }} </div>
    <NavigationBar></NavigationBar>
    <router-view></router-view>
  </div>
</template>

<script>
  import NavigationBar from './components/NavigationBar.vue';
  export default {
    created() {
        this.$http.get('data.json')
          .then(response => {
            return response.json();
          })
          .then( data => {
            console.log('data', data)
          })
      },
      components: {
        NavigationBar,
      }
  }
</script>

<style>

  body {
    font-family: 'Roboto', sans-serif;
  }
  .title {
    font-size: 2em;
    background-color: #3700b3;
    color: white;
    padding: 5px;
  }

</style>