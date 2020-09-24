<template>
  <div>
    <div v-for="company in arrayOfCompaniesData" :key="company.name">      
      <StockCard :company="company"></StockCard>
    </div>
  </div>
</template>

<script>
  import StockCard from '../StockCard.vue';
  
  export default {
    data() {
      return {
        arrayOfCompaniesData: [],
      }
    },
      created() {
        let getStockData = (company) => {
          return new Promise( resolve => {
            resolve( company || {});
            console.log('thisis a company' , company);
            this.arrayOfCompaniesData.push(company);
          })
         }

        let companies = ["MSFT", "AAPL", "GOOGL", "TSLA"]
        let companyData = {}
  
        companies.forEach(company =>
          this.$http.get(`https://finnhub.io/api/v1/quote?symbol=${company}&token=${process.env.VUE_APP_API_KEY}`)
            .then(response => {
              return response.json();
            })
            .then( data => {
              companyData = {
                name: company,
                currentPrice: data.c,
                openPrice: data.o,
              };

              return getStockData(companyData);
            })
        );
    },
    components: {
      StockCard
    },
  
  }
</script>