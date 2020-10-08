<template>
  <div class="frow mt-10">
    <div
      v-for="(stock, key) in stockPortfolio"
      v-show="stock.length > 0"
      :key="stock.id"
      class="portfolio-key-shadow p-5 m-5 col-md-1-5 text-center"
    >
      <div>
        <span class="portfolio-card-key"> {{ key | companyNameFilter }}</span>
        <span> ({{ currentStockInfo[key] }}) </span>
      </div>
      <PortfolioCard
        :stock-info="stock"
        :stock-key="key"
        :current-price="currentStockInfo"
      />
    </div>
  </div>
</template>

<script>
import PortfolioCard from '@/components/pages/portfolio/PortfolioCard.vue';
import { stockApi } from '@/store/stockApi.js';
export default {
  components: { PortfolioCard },
  data() {
    return {
      stockPortfolio: {},
      currentStockInfo:{},
    };
  },
  created() {
    this.getUserPortfolio();
    this.getCurrentStockInfo();
  },
  methods: {
    getUserPortfolio() {
      this.$http.get('data.json')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          let resultObject = {};
          const teslaArray = [];
          const microsoftArray = [];
          const appleArray = [];
          const googleArray = [];

          for (let id in data) {
            if (data[id].symbol === 'TSLA'){
              teslaArray.push({ id: id, data: data[id] });
            }
            else if (data[id].symbol === 'MSFT'){
              microsoftArray.push({ id: id, data: data[id] });
            }
            else if (data[id].symbol === 'AAPL'){
              appleArray.push({ id: id, data: data[id] });
            }
            else if (data[id].symbol === 'GOOGL'){
              googleArray.push({ id: id, data: data[id] });
            }
          }
          resultObject = {
            TSLA: teslaArray,
            MSFT: microsoftArray,
            AAPL: appleArray,
            GOOGL: googleArray,
          };

          this.stockPortfolio = resultObject;
        });
    },
    getCurrentStockInfo() {
      let companies = ['MSFT', 'AAPL', 'GOOGL', 'TSLA'];
      companies.forEach((company) => {
        stockApi(company)
          .then((response) => {
            this.$set(this.currentStockInfo, response.symbol, response.currentPrice);
          });
      });
    },
  },

};
</script>

<style scoped>
  .portfolio-key-shadow {
    box-shadow: 0 1px 3px 0 var(--hover-purple);
  }
   .portfolio-card-key {
    font-size: 50px;
  }
</style>