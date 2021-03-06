<template>
  <button
    :class="[buttonClass, buttonType, buttonShape]"
    :style="{
      width,
    }"
    :disabled="disabled"
    @click="click"
  >
    <slot>{{ text }}</slot>
  </button>
</template>

<script>
export default {
  props: {
    xs: {
      type: Boolean,
      default: false,
    },
    sm: {
      type: Boolean,
      default: false,
    },
    md: {
      type: Boolean,
      default: true,
    },
    lg: {
      type: Boolean,
      default: false,
    },
    mint: {
      type: Boolean,
      default: false,
    },
    ghost: {
      type: Boolean,
      default: false,
    },
    ghostMt: {
      type: Boolean,
      default: false,
    },
    lightyellow: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '',
    },
    click: {
      type: Function,
      default: () => {},
    },
  },
  computed: {
    buttonClass() {
      const { xs, sm, lg } = this;
      if (xs) return 'xs';
      else if (sm) return 'sm';
      else if (lg) return 'lg';
      else return 'md';
    },
    buttonType() {
      const {
        mint, ghost, ghostMt, lightyellow,
      } = this;
      if (mint) return 'mint';
      else if (ghost) return 'ghost';
      else if (ghostMt) return 'ghost-mt';
      else if (lightyellow) return 'lightyellow';
      else return '';
    },
    buttonShape() {
      const { round } = this;

      if (round) return 'round';
      else return 'square';
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "../../../assets/scss/color";
  @import "../../../assets/scss/font-weight";

  %base-button {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 0;
    cursor: pointer;
    background-color: $white;
  }

  .xs {
    @extend %base-button;
    width: 100%;
    height: 27px;
    font-size: 0.625rem;
    font-weight: $bold;
    color: $solidgray;
    border: 2px solid $solidgray;
    white-space: nowrap;
  }

  .sm {
    @extend %base-button;
    width: 100%;
    height: 36px;
    font-size: 0.875rem;
    font-weight: $bold;
    color: $solidgray;
    border: 2px solid $solidgray;
    white-space: nowrap;
  }

  .md {
    @extend %base-button;
    width: 100%;
    height: 36px;
    font-size: 1rem;
    font-weight: $bold;
    color: $solidgray;
    border: 2px solid $solidgray;
    white-space: nowrap;
  }

  .lg {
    @extend %base-button;
    height: 36px;
    line-height: 4px;
    font-size: 1.25rem;
    font-weight: $bold;
    color: $solidgray;
    border: 2px solid $solidgray;
    white-space: nowrap;
  }

  .mint {
    background-color: $mint;
    border-color: $mint;
    color: white !important;
  }

  .ghost {
    border-color: $lightgray;
    color: $lightgray !important;
  }

  .ghost-mt {
    border-color: $mint;
    color: $mint !important;
  }

  .lightyellow {
    background-color: $lightyellow;
    border-color: $lightyellow;
    color: white !important;
  }

  .square {
    border-radius: 2px;
  }

  .round {
    border-radius: 20px;
  }
</style>
