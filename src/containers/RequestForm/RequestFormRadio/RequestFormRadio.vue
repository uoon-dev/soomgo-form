<template>
  <v-flex column>
    <v-radio
      v-for="option in item.options"
      :id="option.id.toString()"
      :key="option.id"
      :value="selectedRadio"
      :label="option.text"
      :input-changed="() => updateRadioValue(option)"
    />
  </v-flex>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'RequestFormRadio',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      selectedRadio: '',
      answer: [],
    };
  },
  methods: {
    updateRadioValue(option) {
      this.selectedRadio = option.id.toString();
      this.setAnswer({ id: this.item.itemId, text: option.text });
      this.setValidation({ isValid: true });
    },
    ...mapActions({
      setAnswer: 'setAnswer',
      setValidation: 'setValidation',
    }),
  },
};
</script>
