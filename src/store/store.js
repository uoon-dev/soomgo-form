import Vue from 'vue';
import Vuex from 'vuex';

import requestForm from './modules/request-form';
import theCheckModal from './modules/the-check-modal';
import validation from './modules/validation';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    requestForm,
    theCheckModal,
    validation,
  }
});
