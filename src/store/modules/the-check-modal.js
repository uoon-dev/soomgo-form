const mutations = {
  'SET_SHOW'(state, show) {
    state.show = show;
  },
  'SET_HEAD_LINE'(state, headline) {
    state.headline = headline;
  },
  'SET_BODY_TEXT'(state, bodyText) {
    state.bodyText = bodyText;
  },
  'SET_BUTTON_TEXT'(state, buttonText) {
    state.buttonText = buttonText;
  },
  'SET_BUTTON_TYPE'(state, type) {
    state.type = type;
  },
};

const state = () => ({
  show: false,
  headline: '',
  bodyText: '',
  buttonText: '',
  type: '',
});

const actions = {
  show({ commit }, {
    headline, bodyText, buttonText, type,
  }) {
    commit('SET_SHOW', true);
    commit('SET_HEAD_LINE', headline);
    commit('SET_BODY_TEXT', bodyText);
    commit('SET_BUTTON_TEXT', buttonText);
    commit('SET_BUTTON_TYPE', type);
  },
  hide({ commit }) {
    commit('SET_SHOW', false);
  },
  setShow({ commit }, isShow) {
    commit('setShow', isShow);
  },
};

export default {
  state,
  mutations,
  actions,
};