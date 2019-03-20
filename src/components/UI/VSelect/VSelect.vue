<template>
  <select
    :value="value"
    @change="selectChanged"
  >
    <option v-for="option in options" :key="option.id" :value="option.text">
      {{ option.text }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'VSelect',
  props: {
    value: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      required: true,
    },
    selectChanged: {
      type: Function,
      default: () => {},
    },
  },
};
</script>
