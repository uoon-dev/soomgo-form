<template>
  <v-flex class="request-form-container" align-center column>
    <head-title> {{ formItems.title }} </head-title>
    <v-flex>
      <form id="myForm" class="request-form-wrapper">
        <v-flex
          v-for="(item, i) in formItems.items"
          v-show="i === tabCount"
          :key="item.id"
          :tab="i"
          column
        >
          <typography xs="sg-heading-3-light" class="ma-1 question-title">
            Q. {{ item.title }}
          </typography>
          <request-form-checkbox v-if="item.formType === 1" :item="item" class="request-form-checkbox" />
          <request-form-radio v-if="item.formType === 2" :item="item" class="request-form-radio" />
          <request-form-input v-if="item.formType === 3" :item="item" />
          <request-form-select v-if="item.formType === 4" :item="item" />
          <v-flex justify-center class="btn-stage-group">
            <custom-button
              v-show="tabCount > 0"
              ghost-mt
              class="mr-1"
              width="80px"
              :click="(e) => goPrevStage({e, itemId: item.itemId, formType: item.formType})"
            >
              이전
            </custom-button>
            <custom-button
              v-show="tabCount < formItems.items.length - 1"
              mint
              width="80px"
              :click="(e) => goNextStage({e, itemId: item.itemId, formType: item.formType})"
              class="btn-next"
            >
              다음
            </custom-button>
            <custom-button
              v-show="tabCount === formItems.items.length - 1"
              mint
              width="80px"
              :click="(e) => submitRequestForm({e, itemId: item.itemId, formType: item.formType})"
            >
              제출
            </custom-button>
          </v-flex>
        </v-flex>
      </form>
    </v-flex>
  </v-flex>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

import formItems from '@/assets/data/input.json';
import headTitle from '@/components/HeadTitle/HeadTitle';

import requestFormCheckbox from './RequestFormCheckbox/RequestFormCheckbox';
import requestFormRadio from './RequestFormRadio/RequestFormRadio';
import requestFormInput from './RequestFormInput/RequestFormInput';
import requestFormSelect from './RequestFormSelect/RequestFormSelect';

export default {
  name: 'RequestForm',
  components: {
    headTitle,
    requestFormCheckbox,
    requestFormRadio,
    requestFormInput,
    requestFormSelect,
  },
  data() {
    return {
      formItems,
      tabCount: 0,
      type: 0,
    };
  },
  computed: {
    ...mapState({
      answer(state) {
        return state.requestForm.answer;
      },
      msg(state) {
        return state.validation.msg;
      },
    }),
    ...mapGetters({
      isValid: 'isValid',
    }),
  },
  created() {
  },
  methods: {
    goPrevStage({ e, itemId, formType }) {
      e.preventDefault();
      this.tabCount = this.tabCount - 1;
    },
    goNextStage({ e, itemId, formType }) {
      e.preventDefault();
      this.checkValidation(itemId, formType);
      if (!this.isValid) {
        this.showCheckModal({
          bodyText: this.msg,
          type: 'error',
        });
      } else {
        this.tabCount = this.tabCount + 1;
      }
    },
    checkValidation(itemId, formType) {
      if (!this.answer[itemId]) {
        switch (formType) {
          case 1:
            this.setValidation({ isValid: false, msg: '한 개 이상 골라주세요' });
            break;
          case 2:
            this.setValidation({ isValid: false, msg: '한 개 골라주세요' });
            break;
          case 3:
            this.setValidation({ isValid: false, msg: '입력 값이 필요합니다' });
            break;
          default: break;
        }
      } else {
        this.setValidation({ isValid: true, msg: '' });
      }
    },
    submitRequestForm({ e, itemId, formType }) {
      e.preventDefault();
      this.checkValidation(itemId, formType);
      if (!this.isValid) {
        this.showCheckModal({
          bodyText: this.msg,
          type: 'error',
        });
      } else {
        const data = {
          id: this.formItems.formId,
          items: [],
        };
        for (const key in this.answer) {
          data.items.push({ id: key, answer: this.answer[key] });
        }
        this.showCheckModal({
          bodyText: JSON.stringify(data),
          type: 'confirm',
        });
      }
    },
    ...mapActions({
      showCheckModal: 'show',
      setValidation: 'setValidation',
    }),
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/color.scss';

.request-form-container {
    position: relative;
    width: 300px;
    min-height: 350px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
    padding: 34px 0;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.37);
    border-top: 7px solid $mint;
    background-color: $white;

    .request-form-wrapper {
      padding: 0 34px;
    }

    .question-title {
      white-space: normal;
    }

    .btn-stage-group {
      margin-top: 50px;
    }
  }


@media screen and (min-width: 600px) {
  .request-form-container {
    width: 540px;
    min-height: 500px;

    .btn-stage-group {
      margin-top: 100px;
    }
  }
}
</style>
