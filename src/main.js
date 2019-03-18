import Vue from 'vue';
import App from './App.vue';
import store from './store';

import vFlex from './components/UI/VFlex/VFlex';
import vTextField from './components/UI/VTextField/VTextField';
import vSelect from './components/UI/VSelect/VSelect';
import vCheckbox from './components/UI/VCheckbox/VCheckbox';

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
  components: {
    vFlex,
    vTextField,
    vSelect,
    vCheckbox,
  }
}).$mount('#app');
