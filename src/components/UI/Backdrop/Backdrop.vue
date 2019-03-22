<template>
  <transition name="fade-in">
    <div v-show="showCheckModal" class="backdrop" />
  </transition>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      showCheckModal: 'showCheckModal',
    }),
  },
};
</script>


<style lang="scss" scoped>
  .fade-in-enter-active,
  .fade-in-leave-active {
    transition: all 0.1s ease-out;
  }

  .fade-in-enter,
  .fade-in-leave-to {
    opacity: 0.1;
  }

  .backdrop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.45);
    z-index: 1;
  }
</style>
