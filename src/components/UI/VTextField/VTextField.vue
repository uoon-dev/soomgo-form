<template>
  <input
    v-model="value"
    :type="type"
    :placeholder="placeholder"
    @input="inputChanged"
  >
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    inputChanged: {
      type: Function,
      default: () => {},
    },
  },
};
</script>
