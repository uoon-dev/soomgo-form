<template>
  <v-flex column>
    <v-checkbox
      v-for="(option, i) in item.options"
      :key="option.id"
      :value="selectedCheckbox"
      :label="option.text"
      :input-changed="(e) => updateCheckboxValue({e, option, i})"
    />
  </v-flex>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'RequestFormCheckBox',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      selectedCheckbox: false,
      answer: [],
    };
  },
  methods: {
    updateCheckboxValue(params) {
      const { e, option, i } = params;
      if (e.target.checked) {
        this.selectedCheckbox = true;
        this.answer[i] = option.text;
        this.setAnswer({
          formType: this.item.formType,
          id: this.item.itemId,
          text: this.answer.filter(value => value !== '').join(', '),
        });
      } else {
        this.selectedCheckbox = false;
        this.answer[i] = '';
        this.setAnswer({
          formType: this.item.formType,
          id: this.item.itemId,
          text: this.answer.filter(value => value !== '').join(', '),
        });
      }

      // if (this.answer.filter(value => value !== '').length > 0) this.setValidation({ isValid: true });
      // else this.setValidation({ isValid: false, msg: '한 개 이상 클릭해주세요' });
    },
    ...mapActions({
      setAnswer: 'setAnswer',
      setValidation: 'setValidation',
    }),
  },
};
</script>
