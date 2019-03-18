<template>
  <div>
    <v-flex>
      <form>
        <head-title> {{ formItems.title }} </head-title>
        <div v-for="formItem in formItems" :key="formItem.id">
          {{ formItem.title }}
          <request-form-input v-if="formItem.formType === 1" :item="item" />
          <request-form-checkbox v-if="formItem.formType === 2" />
          <request-form-select v-if="formItem.formType === 3" />
        </div>
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
  created() {
    console.log(this.formData);
  },
};
</script>
