<template>
  <div id="app">
    <div class="frow title">{{ this.$store.state.title }} </div>
    <NavigationBar></NavigationBar>
    <router-view></router-view>
  </div>
</template>

<script>
  import NavigationBar from './components/NavigationBar.vue';
  import { stockBus } from './main.js';
  export default {
    name: 'App',
    created() {
      this.$http.get('data.json')
        .then(response => {
          return response.json();
        })
        .then( data => {
          console.log('data', data)
        });
      stockBus.$on("stockPurchased", (stock) => {
        console.log('fuck ya', stock)
      }) 
      

      },
      components: {
        NavigationBar,
      },
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
    --error-color: var(--error)
  }

  body {
    font-family: 'Roboto', sans-serif;
  }
  .title {
    font-size: 2em;
    background-color: var(--accent-color);
    color: white;
    padding: 5px;
  }

</style>