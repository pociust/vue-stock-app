<template>
  <div class="card frow column-center">
    <div class="top-card">
      {{ companyName }} ({{ company.symbol }})
    </div>
    <div :style="{color: stockPriceColor}" class="bottom-card">
      ({{ company.currentPrice }}) <span style="color: black">open: {{ company.openPrice }}</span>
    </div>
    <button class="mt-15">Purchase</button>
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
    height: 90px;
    width: 260px;
  }
  
  .bottom-card span {
    font-size: 12px;
  }

  .card button {
    background-color: var(--primary-color);
    border: var(--primary-color);
  }

.card button:hover {
  background-color: var(--hover-purple);
}

</style>

