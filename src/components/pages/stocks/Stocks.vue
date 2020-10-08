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
import StockCard from '@/components/pages/stocks/StockCard.vue';
import StockError from '@/components/pages/stocks/StockError.vue';
import { stockApi } from '@/store/stockApi';
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
    let companies = ['MSFT', 'AAPL', 'GOOGL', 'TSLA'];
    companies.forEach((company) => {
      stockApi(company)
        .then((response) => {
          this.arrayOfCompaniesData.push(response);
        });
    });
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