<template>
  <div id="app">
    <div class="frow title">
      {{ this.$store.state.title }}
    </div>
    <NavigationBar />
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue';
import { stockBus } from '@/main.js';
export default {
  name: 'App',
  components: { NavigationBar },
  data() {
    return { funds: this.$store.state.funds };
  },
  created() {
    stockBus.$on('stockPurchased', (stock) => {
      this.addStocksToPortfolio(stock);
    });
    this.$http.get('funds.json')
      .then((data) => {
        return data.json();
      })
      .then((funds) => {
        this.$store.state.funds = funds || 10000.00;
      });
  },
  methods: {
    addStocksToPortfolio(stock) {
      this.$store.dispatch('changeFunds', -Math.abs(stock.price * stock.amount));

      let portfolio = {
        funds: this.$store.state.funds,
        symbol: stock.companySymbol,
        amount: stock.amount,
        price: stock.price,
      };
      this.$http.post('data.json', portfolio);
    },
  },
};
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

  .fade-enter {
    opacity: 0;
  }
  .fade-enter-to {
    transition: opacity 4s;
    opacity: 1;
  }

</style>