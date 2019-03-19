<template>
  <v-flex class="request-form-container" align-center column>
    <head-title> {{ formItems.title }} </head-title>
    <v-flex justify-center>
      <form class="request-form-wrapper">
        <v-flex
          v-for="(item, i) in formItems.items"
          :key="item.id"
          :tab="i"
          v-show="i === tabCount"
          justify-start
          column
        >
          {{ item.title }}
          <request-form-checkbox v-if="item.formType === 1" :item="item" />
          <request-form-checkbox v-if="item.formType === 2" :item="item" />
          <request-form-input v-if="item.formType === 3" :item="item" />
          <request-form-select v-if="item.formType === 4" :item="item" />
        </v-flex>
      </form>
    </v-flex>
    <v-flex justify-center>
      <button @click.prevent="tabCount = tabCount - 1" v-show="tabCount > 0">이전</button>
      <button @click.prevent="tabCount = tabCount + 1" v-show="tabCount + 1 < formItems.items.length">다음</button>
      <button @click.prevent="" v-show="tabCount + 1 === formItems.items.length">제출</button>
    </v-flex>
  </v-flex>
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
      tabCount: 0,
    };
  },
};
</script>
