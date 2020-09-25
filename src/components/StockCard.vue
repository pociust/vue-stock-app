<template>
  <div class="card text-center">
    <div class="top-card">
      {{ companyName }} ({{ company.symbol }})
    </div>
    <div :style="{color: stockPriceColor}" class="bottom-card">
      ({{ company.currentPrice }}) <span style="color: black">{{ company.openPrice }}</span>
    </div>
  </div>  
</template>
<script>
  export default {
    data () {
      return {
        name: '',
      }
    },
    props: {
      company: {
        type: Object,
      }
    },
    computed: {
      companyName() {
        let companyName = ''
        if (this.company.symbol === "MSFT") {
          companyName = "Microsoft";
        } else if ( this.company.symbol === "GOOGL") {
          companyName = "Google"
        } else if (this.company.symbol === "TSLA") {
          companyName = "Tesla"
        } else if (this.company.symbol === "AAPL") {
          companyName = "Apple"
        }

        return companyName
        
      },
      stockPriceColor() {
        console.log(this.company.currentPrice > this.company.openPrice)
        let color = ''
        if (this.company.currentPrice > this.company.openPrice) {
          color = '#03DAC5'
        }
        else if (this.company.currentPrice < this.company.openPrice) {
          color = '#C51162'
        }
        else {
          color = 'black'
        }
        return color
      },

    },
  }
</script>

<style scoped>
  .card {
    height: 10vh;
    width: 15vw;
  }

</style>

