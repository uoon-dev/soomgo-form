<template>
  <div class="request-form-container">
    <v-flex justify-center>
      <form class="request-form-wrapper">
        <head-title> {{ formItems.title }} </head-title>
        <v-flex
          v-for="item in formItems.items"
          :key="item.id"
          justify-center
        >
          {{ item.title }}
          <request-form-checkbox v-if="item.formType === 1" :item="item" />
          <request-form-checkbox v-if="item.formType === 2" :item="item" />
          <request-form-input v-if="item.formType === 3" :item="item" />
          <request-form-select v-if="item.formType === 4" :item="item" />
        </v-flex>
      </form>
    </v-flex>
  </div>
</template>

<script>
import formItems from '@/assets/data/input.json';

import headTitle from '@/components/HeadTitle/HeadTitle';

import requestFormInput from './RequestFormInput/RequestFormInput';
import requestFormCheckbox from './RequestFormCheckbox/RequestFormCheckbox';
import requestFormSelect from './RequestFormSelect/RequestFormSelect';

export default {
  name: 'RequestForm',
  components: {
    headTitle,
    requestFormInput,
    requestFormCheckbox,
    requestFormSelect,
  },
  data() {
    return {
      formItems,
    };
  },
};
</script>
