<template>
  <div>
    {{ stockKey }}
    <div v-for="info in stockInfo" :key="info.id">
    {{ info.data }}
    <!-- <div v-for="info in stockInfo[id]" :key="info">
      {{ info }}
    </div> -->
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      stockInfo: {
        type: Array
      },
      stockKey: {
        type: String
      }
    }
  }
</script>