<template>
  <div>
    <typography sg="sg-heading-3">
      <slot>{{ text }}</slot>
      <typography />
    </typography>
  </div>
</template>

<script>

export default {
  props: {
    text: {
      type: String,
      default: '',
    },
  },
};
</script>
