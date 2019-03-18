import Vue from 'vue';
import App from './App.vue';
import store from './store';
import uiUtils from './ui-utils';

Vue.config.productionTip = false;

for (let key in uiUtils) {
  Vue.component(key, uiUtils[key]);
}

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
