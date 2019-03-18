<template>
  <div>
    <typography xs="sg-heading-3" sm="sg-heading-2">
      <slot>{{ text }}</slot>
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
