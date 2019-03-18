<template>
  <div id="app">
    <request-form />
  </div>
</template>

<script>
import requestForm from '@/container/RequestForm/RequestForm';

export default {
  name: 'App',
  components: {
    requestForm,
  },
  created() {
    console.log(this.$breakpoint);
  },
};
</script>

<style lang="scss">
</style>
