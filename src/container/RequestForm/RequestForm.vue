<template>
  <v-flex class="request-form-container" align-center column>
    <head-title> {{ formItems.title }} </head-title>
    <v-flex justify-center>
      <form class="request-form-wrapper">
        <v-flex
          v-for="(item, i) in formItems.items"
          v-show="i === tabCount"
          :key="item.id"
          :tab="i"
          justify-start
          column
        >
          <typography xs="sg-heading-3-light" class="ma-1">
            Q. {{ item.title }}
          </typography>
          <request-form-checkbox v-if="item.formType === 1" :item="item" />
          <!-- <request-form-radio v-if="item.formType === 2" :item="item" /> -->
          <request-form-input v-if="item.formType === 3" :item="item" />
          <request-form-select v-if="item.formType === 4" :item="item" />
        </v-flex>
      </form>
    </v-flex>
    <v-flex justify-center>
      <button
        v-show="tabCount > 0"
        @click.prevent="tabCount = tabCount - 1"
      >
        이전
      </button>
      <button
        v-show="tabCount < formItems.items.length - 1"
        @click.prevent="tabCount = tabCount + 1"
      >
        다음
      </button>
      <button
        v-show="tabCount === formItems.items.length - 1"
        @click.prevent=""
      >
        제출
      </button>
    </v-flex>
  </v-flex>
</template>

<script>
import formItems from '@/assets/data/input.json';

import headTitle from '@/components/HeadTitle/HeadTitle';

import requestFormCheckbox from './RequestFormCheckbox/RequestFormCheckbox';
import requestFormInput from './RequestFormInput/RequestFormInput';
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
  created() {
    console.log(this.formItems);
  },
};
</script>

<style lang="scss" scoped>
.request-form-container {
  width: 540px;
  min-height: 560px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 60px;
  padding: 34px 0;
  background-color: white;
}
</style>
