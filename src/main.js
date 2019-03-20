import Vue from 'vue';
import App from './App.vue';
import store from './store';
import uiUtils from './ui-utils';

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
