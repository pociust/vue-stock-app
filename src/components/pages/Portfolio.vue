<template>
  <div class="frow">
    <div class="items-stretch shadow-dark m-20 p-10" v-for="stock in stocks" :key="stock.id">
      <div>{{ stock }} </div>
      <div class="col-md-1-4">
        <PortfolioCard :stockInfo="stock.data"></PortfolioCard>
      </div>
    </div>
  </div>
</template>

<script>
  import PortfolioCard from '../PortfolioCard.vue'
  export default {
    data() {
      return {
        stocks: [],
      }
    },
    components: {
      PortfolioCard,
    },
    created() {
      this.$http.get('data.json')
        .then(response => {
          return response.json();
        })
        .then( data => {
          let resultObject = {};
          const teslaArray = [];
          const microsoftArray = [];
          const appleArray = [];
          const googleArray = [];

          for(let id in data) {

            if(data[id].symbol === "TSLA"){
              teslaArray.push({id: id, data: data[id]});
            }
             else if(data[id].symbol === "MSFT"){
              microsoftArray.push({id: id, data: data[id]});
            }
             else if(data[id].symbol === "AAPL"){
              appleArray.push({id: id, data: data[id]});
            }
             else if(data[id].symbol === "GOOGL"){
              googleArray.push({id: id, data: data[id]});
            }

          }
          resultObject = {
            tesla: teslaArray,
            microsoft: microsoftArray,
            apple: appleArray,
            google: googleArray,

          };

          this.stocks = resultObject;

        })
    }
  
  }
</script>