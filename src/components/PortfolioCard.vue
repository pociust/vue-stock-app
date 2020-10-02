<template>
  <div class="portfolio-card text-center">
    <div class="portfolio-card-key">
      {{ stockKey }}
    </div>
    <div
      v-for="info in stockInfo"
      :key="info.id"
      class="shadow-light p-5 m-5 frow justify-around"
    >
      <div class="frow items-center">
        {{ info.data.amount }} {{ info.data.amount > 1 ?
          `shares` :
          `share` }} at ${{ info.data.price }}
      </div>
      <div
        class="sell-button"
        @click="sellStock(info)"
      >
        Sell
      </div>
    </div>
  </div>
</template>

<script>
// import { mapActions } from 'vuex';
export default {
  props: {
    stockInfo: { type: Array, default: null },
    stockKey: { type: String, default: '' },
  },
  data() {
    return {};
  },
  methods: {
    sellStock(stock) {
      let sellPrice = (stock.data.amount) * (stock.data.price);
      this.$store.dispatch('changeFunds', sellPrice);
      this.$http.delete(`data/${stock.id}.json`)
        .then((response) => {
          console.log(response);
          this.stockInfo.pop(stock);
        });
    },
  },
};
</script>
<style scoped>
  .portfolio-card-key {
    font-size: 50px;
  }

  .sell-button {
    padding: 5px;
    border: 1px solid var(--hover-purple);
    border-radius: 10px;
  }

  .sell-button:hover{
    cursor: pointer;
    background-color: var(--main-purple);
  }
</style>