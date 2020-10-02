<template>
  <div class="frow">
    <div
      v-for="company in arrayOfCompaniesData"
      :key="company.name"
    >
      <StockCard
        v-if="!purchaseError"
        :company="company"
        @stockPurchaseError="showError"
      />
    </div>
    <StockError v-if="purchaseError" />
  </div>
</template>

<script>
import StockCard from '../StockCard.vue';
import StockError from '../StockError.vue';
export default {
  components: {
    StockCard,
    StockError,
  },
  data() {
    return {
      arrayOfCompaniesData: [],
      purchaseError: false,
    };
  },
  created() {
    let getStockData = (company) => {
      return new Promise((resolve) => {
        resolve(company || {});
        this.arrayOfCompaniesData.push(company);
      });
    };

    let companies = ['MSFT', 'AAPL', 'GOOGL', 'TSLA'];
    let companyData = {};

    companies.forEach((company) =>
      this.$http.get(
        `https://finnhub.io/api/v1/quote?symbol=${company}&token=${process.env.VUE_APP_API_KEY}`,
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          companyData = {
            symbol: company,
            currentPrice: data.c,
            openPrice: data.o,
          };

          return getStockData(companyData);
        }),
    );
  },
  methods: {
    showError(error) {
      this.purchaseError = error;
      setTimeout(() => {
        this.purchaseError = false;
      }, 2000);
      console.log('this is an error', error);
    },
  },

};
</script>