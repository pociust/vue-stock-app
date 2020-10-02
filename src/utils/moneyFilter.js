import Vue from 'vue';

Vue.filter('moneyFilter', (funds) => {
  return funds ?
    `$${funds.toLocaleString('en-US', { maximumFractionDigits: 2, minimumFractionDigits: 2 })}` :
    '';
});