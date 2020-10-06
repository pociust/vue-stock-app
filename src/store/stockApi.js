import Vue from 'vue';

let companyData = {};
export const stockApi = async(company) => {
  return new Promise((resolve, reject) => {
    Vue.http.get(
      `https://finnhub.io/api/v1/quote?symbol=${company}&token=${process.env.VUE_APP_API_KEY}`,
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        companyData = {
          symbol: company,
          currentPrice: data.c,
          openPrice: data.o,
        };
        resolve(companyData);
      })
      .catch((err) => reject(err));
  });
};