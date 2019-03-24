<template>
  <div id="app">
    <banner />
    <request-form class="mt-pull-100" />
    <the-check-modal />
    <backdrop />
  </div>
</template>

<script>
import banner from '@/components/Banner/Banner';
import requestForm from '@/containers/RequestForm/RequestForm';

export default {
  name: 'App',
  components: {
    banner,
    requestForm,
  },
};
</script>

<style lang="scss">
html, body {
  all: unset;
  height: 100%;
  background-color: #fdfdf8;
}

.mt-pull-100{
  margin-top: -100px;
}
</style>
