<template>
  <div>
    <typography sg="sg-heading-3">
      <slot>{{ text }}</slot>
      <typography />
    </typography>
  </div>
</template>

<script>
import typography from '@/components/UI/Typography/Typography';

export default {
  components: {
    typography,
  },
  props: {
    text: {
      type: String,
      default: '',
    },
  },
};
</script>
