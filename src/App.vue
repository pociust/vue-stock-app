<template>
  <div id="app">
    <div class="frow title">{{ this.$store.state.title }} </div>
    <NavigationBar></NavigationBar>
    <router-view></router-view>
  </div>
</template>

<script>
  import NavigationBar from './components/NavigationBar.vue';
  export default {
    name: 'App',
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
  :root {
    --green: #03DAC5;
    --error: #C51162;
    --main-purple:  #6200EE;
    --accent-purple: #3700b3;
    --hover-purple: #BB86FC;

    --primary-color: var(--main-purple);
    --secondary-color: var(--green);
    --accent-color: var(--accent-purple);
    --hover-color: var(--hover-purple);
  }

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