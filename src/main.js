import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import store from './store/store';
import uiUtils from './ui-utils';

Vue.use(Vuex);


import './assets/scss/margin.scss';
import './assets/scss/padding.scss';

Vue.config.productionTip = false;

for (const key in uiUtils) {
  Vue.component(key, uiUtils[key]);
}

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
