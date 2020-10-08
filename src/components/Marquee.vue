<template>
  <div class="ticker-wrap">
    <div class="ticker">
      <div
        v-for="stock in currentStockInfo"
        :key="stock.symbol"
        class="stocks"
      >
        {{ stock.symbol }} ({{ stock.currentPrice }})
      </div>
    </div>
  </div>
</template>
<script>
import { stockApi } from '@/store/stockApi.js';

export default {
  data() {
    return { currentStockInfo: [] };
  },
  created() {
    let companies = ['MSFT', 'AAPL', 'GOOGL', 'TSLA'];
    companies.forEach((company) => {
      stockApi(company)
        .then((response) => {
          this.currentStockInfo.push(response);
        });
    });
  },
};
</script>
<style scoped>
  @-webkit-keyframes ticker {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }
  100% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}
@keyframes ticker {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }
  100% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}
.ticker-wrap {
  /* position: fixed; */
  /* bottom: 0; */
  width: 100%;
  overflow: hidden;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.9);
  padding-left: 100%;
  box-sizing: content-box;
}
.ticker-wrap .ticker {
  display: inline-block;
  height: 50px;
  line-height: 50px;
  white-space: nowrap;
  padding-right: 100%;
  box-sizing: content-box;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-name: ticker;
  animation-name: ticker;
  -webkit-animation-duration: 30s;
  animation-duration: 30s;
}
.stocks {
  display: inline-block;
  padding: 0 2rem;
  font-size: 2rem;
  color: white;
}


</style>