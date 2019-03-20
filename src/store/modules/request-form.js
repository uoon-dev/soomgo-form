const state = {
  answer: {},
};

const mutations = {
  'SET_ANSWER'(state, answer) {
    state.answer[answer.id] = answer.text;
  },
};

const actions = {
  setAnswer({ commit }, answer) {
    commit('SET_ANSWER', answer);
  },
};

export default {
  state,
  mutations,
  actions,
};