<template>
  <div class="portfolio-card text-center">
    <div class="portfolio-card-key">
      {{ stockKey }}
    </div>
    <div class="shadow-light p-5 m-5" v-for="info in stockInfo" :key="info.id">
      {{ info.data.amount }} {{ info.data.amount > 1 ? `shares` : `share` }} at ${{ info.data.price }}
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
</style>