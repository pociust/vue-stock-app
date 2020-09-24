<template>
  <div>
    <div>{{ companyName }} ({{ company.name }}) </div>
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
        if (this.company.name === "MSFT") {
          companyName = "Microsoft";
        } else if ( this.company.name === "GOOGL") {
          companyName = "Google"
        } else if (this.company.name === "TSLA") {
          companyName = "Tesla"
        } else if (this.company.name === "AAPL") {
          companyName = "Apple"
        }

        return companyName
        
      }
    }
  }
</script>

