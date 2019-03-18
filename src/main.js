import Vue from 'vue';
import App from './App.vue';
import store from './store';

import uiUtils from './ui-utils';

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
  components: {
    ...uiUtils
  }
}).$mount('#app');
