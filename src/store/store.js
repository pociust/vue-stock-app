import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    title: 'Vue Stock App',
    funds: null,
  },
  getters: {
    funds: (state) => {
      return state.funds;
    },

  },
  mutations: {
    changeFunds: (state, payload) => {
      state.funds = state.funds + payload;
    },
  },
  actions: {
    changeFunds: ({ commit }, payload) => {
      // need to only show 2 decimal places
      commit('changeFunds', payload);
    },
  },
});