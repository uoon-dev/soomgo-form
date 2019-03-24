<template>
  <v-flex column align-center>
    <v-text-field
      :value="inputValue"
      :input-changed="(e) => updateCheckboxValue(e)"
      :placeholder="placeholder"
      class="input-field"
    />
  </v-flex>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'RequestFormInput',
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

<style lang="scss">
.input-field {
  width: 80%;
}
</style>
