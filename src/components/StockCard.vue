<template>
  <div class="card">
      {{ companyName }} ({{ company.symbol }})
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
        
      }
    }
  }
</script>

<style scoped>
  .card {
    height: 10vh;
    width: 15vw;
  }
</style>

