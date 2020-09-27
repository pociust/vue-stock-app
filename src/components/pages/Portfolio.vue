<template>
  <div>
    <div v-for="stock in stocks" :key="stock.id">
      <div>
        this is the portfolio page! {{ stock.data.funds }}
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
          for(let id in data) {
          resultArray.push({id: id, data: data[id]});
          }
          this.stocks = resultArray;
        })
    }
  
  }
</script>