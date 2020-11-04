<template>
  <div class="row-around shadow-light p-5 m-15">
    <div class="card frow centered-column">
      <div class="top-card">
        {{ company.symbol | companyNameFilter }} ({{ company.symbol }})
      </div>
      <div
        :style="{color: stockPriceColor}"
        class="middle-card mt-5"
      >
        ({{ company.currentPrice | moneyFilter }})
        <span style="color: black">
          open: {{ company.openPrice | moneyFilter }}
        </span>
      </div>
      <div class="bottom-card frow row-around">
        <input
          v-model="numberOfStockPurchased"
          type="number"
          placeholder="# stock"
        >
        <button
          class="mt-15"
          @click="buyStock"
        >
          Buy
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { stockBus } from '@/main.js';
export default {
  props: { company: { type: Object, default: null } },
  data() {
    return {
      name: '',
      numberOfStockPurchased: 0,
    };
  },
  computed: {
  //   companyName() {
  //     let companyName = '';
  //     if (this.company.symbol === 'MSFT') {
  //       companyName = 'Microsoft';
  //     } else if (this.company.symbol === 'GOOGL') {
  //       companyName = 'Google';
  //     } else if (this.company.symbol === 'TSLA') {
  //       companyName = 'Tesla';
  //     } else if (this.company.symbol === 'AAPL') {
  //       companyName = 'Apple';
  //     }

    //     return companyName;
    //   },
    stockPriceColor() {
      console.log('hello')
      let color = '';
      if (this.company.currentPrice > this.company.openPrice) {
        color = 'var(--green)';
      }
      else if (this.company.currentPrice < this.company.openPrice) {
        color = 'var(--error)';
      }
      else {
        color = 'black';
      }
      return color;
    },
  },
  methods: {
    buyStock() {
      let stockPurchased = {
        companySymbol: this.company.symbol,
        price: this.company.currentPrice,
        amount: this.numberOfStockPurchased,
      };
      if (this.numberOfStockPurchased > 0){
        if (this.$store.state.funds < (this.company.currentPrice * this.numberOfStockPurchased)) {
          this.$emit('stockPurchaseError', true);
        } else {
          stockBus.$emit('stockPurchased', stockPurchased);
        }
      }
    },
  },
};
</script>

<style scoped>
  .card {
    height: 100px;
    width: 260px;
  }

  .middle-card span {
    font-size: 12px;
  }

  .bottom-card {
    width: 100%
  }

  .card input {
    width: 80px;
  }

  .card button {
    height: 40px;
    width: 50px;
    background-color: var(--primary-color);
    border: var(--primary-color);
    border-radius: 20px;
  }

  .card button:hover {
    background-color: var(--hover-purple);
  }

</style>