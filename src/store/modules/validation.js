const mutations = {
  'SET_VALIDATION'(state, { isValid, msg }) {
    state.isValid = isValid;
    state.msg = msg;
  },
};

const state = {
  isValid: false,
  msg: '',
};

const actions = {
  setValidation({ commit }, { isValid, msg }) {
    commit('SET_VALIDATION', { isValid, msg });
  }
};

const getters = { 
  isValid(state) {
    return state.isValid;
  }
}

export default {
  state,
  mutations,
  actions,
  getters,
};