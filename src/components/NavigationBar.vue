<template>
  <div>
    <div class="frow row-between nav-background">
      <div class="frow row-around nav-bar">
        <router-link
          tag="div"
          to="/"
        >
          Stock Tracker
        </router-link>
        <router-link
          tag="div"
          to="Portfolio"
        >
          Portfolio
        </router-link>
        <router-link
          tag="div"
          to="Stocks"
        >
          Stocks
        </router-link>
      </div>
      <div class="frow row-around nav-bar">
        <div>End Day</div>
        <div>Save & Load </div>
        <span>Funds: {{ this.$store.state.funds | moneyFilter }} </span>
      </div>
    </div>
  </div>
</template>

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