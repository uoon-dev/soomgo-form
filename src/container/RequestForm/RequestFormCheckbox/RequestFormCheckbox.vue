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
        this.setAnswer({ id: this.item.itemId, text: this.answer.filter(value => value !== '').join(', ') });
      } else {
        this.selectedCheckbox = false;
        this.answer[i] = '';
        this.setAnswer({ id: this.item.itemId, text: this.answer.filter(value => value !== '').join(', ') });
      }
      console.log(this.$store.state);
      this.addToFavorite();
    },
    ...mapActions({
      setAnswer: 'setAnswer',
      showCheckModal: 'show',
    }),
    addToFavorite() {
      this.showCheckModal({
        bodyText: 'YOU NEED TO LOGIN RETARD',
        type: 'error',
      });
    },
  },
};
</script>
