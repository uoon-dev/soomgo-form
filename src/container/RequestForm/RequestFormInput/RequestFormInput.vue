<template>
  <v-flex column>
    <v-text-field
      :value="inputValue"
      :input-changed="(e) => updateCheckboxValue(e)"
      :placeholder="placeholder"
    />
  </v-flex>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      inputValue: '',
      placeholder: '여기에 입력해주세요..',
    };
  },
  methods: {
    updateCheckboxValue(e) {
      this.setAnswer({ id: this.item.itemId, text: e.target.value });
    },
    ...mapActions({
      setAnswer: 'setAnswer',
    }),
  },
};
</script>
