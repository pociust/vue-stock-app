<template>
  <div class="portfolio-card text-center">
    <div class="portfolio-card-key">
      {{ stockKey }}
    </div>
    <div class="shadow-light p-5 m-5 frow justify-around" v-for="info in stockInfo" :key="info.id">
      <div class="frow items-center">
      {{ info.data.amount }} {{ info.data.amount > 1 ? `shares` : `share` }} at ${{ info.data.price }}
      </div>
      <div class="sell-button">Sell</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      stockInfo: {
        type: Array
      },
      stockKey: {
        type: String
      }
    }
  }
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