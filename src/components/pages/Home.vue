<template>
  <div>
    <div class="frow">
      <div class="text-start shadow-light home-content">
        <div>Trade or View your Portfolio</div>
        <div>You may Save & Load your Data</div>
        <div>Click on 'End Day' to begin a new Day</div>
        <br>
        <div>Your Funds: <span>${{ this.$store.state.funds }}</span> </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  
  }
</script>

<style scoped>
.home-content {
  margin-top: 50px;
  padding: 25px;
  border-radius: 10px;
  font-size: 2em;
}
.home-content :first-child{
  font-weight: 800;
  color: #03DAC5;
}

</style>
 