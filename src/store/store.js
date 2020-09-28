import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    title: 'Vue Stock App',
    funds: 10000
  },
  getters: {
    funds: state => {
      return state.funds;
    }

  },
  mutations: {
    changeFunds: (state, payload) => {
      state.funds = state.funds + payload;
    }
  },
  actions: {
    changeFunds: ({ commit }, payload) => {
      commit('changeFunds', parseFloat(payload.toFixed(2)));
    },
  },
})