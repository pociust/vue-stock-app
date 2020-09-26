<template>
  <div class="card frow centered-column">
    <div class="top-card">
      {{ companyName }} ({{ company.symbol }})
    </div>
    <div :style="{color: stockPriceColor}" class="middle-card mt-5">
      ({{ company.currentPrice }}) <span style="color: black">open: {{ company.openPrice }}</span>
    </div>
    <div class="bottom-card frow row-around">
      <input type="number" placeholder="# stock">
      <button class="mt-15">Buy</button>
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
          color = `var(--green)`
        }
        else if (this.company.currentPrice < this.company.openPrice) {
          color = 'var(--error)'
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
    height: 100px;
    width: 260px;
  }
  
  .middle-card span {
    font-size: 12px;
  }

  .bottom-card {
    width: 100%
  }

  .card input {
    width: 80px;
  }

  .card button {
    height: 40px;
    width: 50px;
    background-color: var(--primary-color);
    border: var(--primary-color);
    border-radius: 20px;
  }

  .card button:hover {
    background-color: var(--hover-purple);
  }

</style>

