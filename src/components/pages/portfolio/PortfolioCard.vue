<template>
  <div>
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
export default {
  props: {
    stockInfo: { type: Array, default: null },
    stockKey: { type: String, default: '' },
    currentPrice: { type: Object, default: null },
  },
  methods: {
    sellStock(stock) {
      let sellPrice = (stock.data.amount) * (this.currentPrice[stock.data.symbol]);
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