import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    answer: {}
  },
  mutations: {
    setAnswer(state, answer) {
      state.answer[answer.id] = answer.text;
    },
  },
  actions: {
    setAnswer({ commit }, answer) {
      commit('setAnswer', answer);
    },
  },
});
