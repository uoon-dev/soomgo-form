<template>
  <v-flex v-show="show" column justify-space-around align-center class="the-check-modal">
    <typography xs="sg-heading-3">
      {{ headline }}
    </typography>
    <typography xs="sg-heading-4">
      {{ bodyText }}
    </typography>
    <custom-button
      :steelblue="type === 'confirm' ? true : false"
      :lightyellow="type === 'error' ? true : false"
      :click="closeDialog"
      width="60%"
    >
      {{ buttonText || "확인" }}
    </custom-button>
  </v-flex>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState({
      headline(state) {
        return state.theCheckModal.headline;
      },
      bodyText(state) {
        return state.theCheckModal.bodyText;
      },
      buttonText(state) {
        return state.theCheckModal.buttonText;
      },
      type(state) {
        return state.theCheckModal.type;
      },
    }),
    show: {
      get() {
        return this.$store.state.theCheckModal.show;
      },
      set(value) {
        this.setShow(value);
      },
    },
  },
  methods: {
    ...mapActions({
      hide: 'hide',
      setShow: 'setShow',
    }),
    closeDialog() {
      this.hide();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/color";

.the-check-modal {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 350px;
  height: 300px;
  background: white;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.37);
  transform: translate(-50%, -50%);
  z-index: 2;
}
</style>
