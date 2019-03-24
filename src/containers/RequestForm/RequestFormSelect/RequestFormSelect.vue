<template>
  <v-select
    :value="selectedValue"
    :options="item.options"
    :select-changed="updateSelectedValue"
  />
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
      selectedValue: '',
    };
  },
  created() {
    this.selectedValue = this.item.options[0].text;
    this.setAnswer({ id: this.item.itemId, text: this.selectedValue });
  },
  methods: {
    updateSelectedValue(e) {
      this.setAnswer({ id: this.item.itemId, text: e.target.value });
    },
    ...mapActions({
      setAnswer: 'setAnswer',
    }),
  },
};
</script>
