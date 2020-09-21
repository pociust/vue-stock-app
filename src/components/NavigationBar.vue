<template>
  <div>
    <div class="frow row-between nav-background">
      <div class="frow row-around nav-bar">
        <div>Stock Tracker</div>
        <div>Portfolio</div>
        <div>Stocks</div>
      </div>
      <div class="frow row-around nav-bar">
        <div>End Day</div>
        <div>Save & Load </div>
        <div>Funds: $10,000</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  
  }
</script>

<style scoped>
  .nav-bar {
    width: 40%;
  }
  .nav-background {
    background-color: #6200EE;
    color: white;
    padding: 10px;
  }
  .nav-bar div {
    padding: 5px;
    cursor: pointer;
  }
  .nav-bar div:hover {
    background-color: #BB86FC;
    border-radius: 5px;
  }
</style>