<template>
  <input
    :value="value"
    :type="type"
    :placeholder="placeholder"
    @input="inputChanged"
  >
</template>

<script>
export default {
  name: 'VTextField',
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

<style lang="scss" scoped>
  input[type=text], select {
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
</style>
