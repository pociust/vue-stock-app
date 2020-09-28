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
    sellStock: (state, payload) => {
      state.funds = state.funds + payload;

    }
  },
  actions: {
    sellStock: ({ commit }, payload) => {
      commit('sellStock', payload);
    }
  },
})