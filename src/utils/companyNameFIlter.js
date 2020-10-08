import Vue from 'vue';

Vue.filter('companyNameFilter', (name) => {
  let companyName = '';
  if (name === 'MSFT') {
    companyName = 'Microsoft';
  } else if (name === 'GOOGL') {
    companyName = 'Google';
  } else if (name === 'TSLA') {
    companyName = 'Tesla';
  } else if (name === 'AAPL') {
    companyName = 'Apple';
  }

  return companyName;
});