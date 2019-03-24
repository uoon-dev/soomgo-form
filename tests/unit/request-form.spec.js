import Vue from 'vue'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils';

import uiUtils from '@/ui-utils';
import RequestForm from '@/containers/RequestForm/RequestForm.vue';
import store from '@/store/store';

const localVue = createLocalVue()
localVue.use(Vuex);

describe('Validation in RequestForm.vue', () => {
  let wrapper;

  for (const key in uiUtils) {
    Vue.component(key, uiUtils[key]);
  }

  beforeEach(() => {
    wrapper = shallowMount(RequestForm, { localVue, store });
  })

  it('check tabCount after button is pressed on unvalid state', () => {
    expect(store.getters.isValid).toEqual(false);
    expect(wrapper.vm.tabCount).toBe(0);
    wrapper.find('.btn-next').trigger('click');
    expect(wrapper.vm.tabCount).toBe(0);
  })
})
