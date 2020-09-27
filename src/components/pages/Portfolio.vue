<template>
  <div>
    <div v-for="stock in stocks" :key="stock.symbol">
      <div>
        this is the portfolio page! {{ stock.symbol }}
      </div>
      
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        stocks: [],
      }
    },
    created() {
      this.$http.get('data.json')
        .then(response => {
          return response.json();
        })
        .then( data => {
          const resultArray = [];
          for(let symbol in data) {
            resultArray.push(data[symbol]);
          }
          this.stocks = resultArray;
        })
    }
  
  }
</script>