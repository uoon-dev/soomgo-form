<template>
  <p :class="[typographyClass, typographyColor]" :style="{ width: width }">
    <slot>{{ text }}</slot>
  </p>
</template>

<script>
const getDefaultClass = () => {
  return 'sg-default';
};

const getXsCLass = (component) => {
  return component.xs ? component.xs : getDefaultClass(component);
};

const getSmCLass = (component) => {
  return component.sm ? component.sm : getXsCLass(component);
};

const getMdCLass = (component) => {
  return component.md ? component.md : getSmCLass(component);
};

const getLgCLass = (component) => {
  return component.lg ? component.lg : getMdCLass(component);
};

const getXlCLass = (component) => {
  return component.xl ? component.xl : getLgCLass(component);
};

export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    // Classes
    xs: {
      type: String,
      default: null,
    },
    sm: {
      type: String,
      default: null,
    },
    md: {
      type: String,
      default: null,
    },
    lg: {
      type: String,
      default: null,
    },
    xl: {
      type: String,
      default: null,
    },
    // Colors
    lightbrown: {
      type: Boolean,
      default: false,
    },
    lightred: {
      type: Boolean,
      default: false,
    },
    white: {
      type: Boolean,
      default: false,
    },
    gray: {
      type: Boolean,
      default: false,
    },
    lightgray: {
      type: Boolean,
      default: false,
    },
    steelblue: {
      type: Boolean,
      default: false,
    },
    // Style
    width: {
      type: String,
      default: 'auto',
    },
  },
  computed: {
    typographyClass() {
      const component = this;

      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return getXsCLass(component);
        case 'sm':
          return getSmCLass(component);
        case 'md':
          return getMdCLass(component);
        case 'lg':
          return getLgCLass(component);
        case 'xl':
          return getXlCLass(component);
        default:
          return getDefaultClass(component);
      }
    },
    typographyColor() {
      const {
        lightbrown, lightred, lightgray, steelblue, gray, white,
      } = this;

      if (lightbrown) return 'lightbrown';
      else if (lightred) return 'lightred';
      else if (gray) return 'gray';
      else if (lightgray) return 'lightgray';
      else if (steelblue) return 'steelblue';
      else if (white) return 'wh';
      else return '';
    },
  },
};
</script>

<style lang="scss">
// Font colors
@import '../../../assets/scss/color.scss';
@import '../../../assets/scss/font-weight.scss';

// Base definition
%base-typography {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  margin: 0;
  white-space: nowrap;
}

// Heading
.sg-heading-1 {
  @extend %base-typography;
  font-size: 2em;
  font-weight: $bold;
  color: $solidgray;
}

.sg-heading-2 {
  @extend %base-typography;
  font-size: 1.5em;
  font-weight: $bold;
  color: $solidgray;
}

.sg-heading-3 {
  @extend %base-typography;
  font-size: 1.125em;
  font-weight: $bold;
  color: $solidgray;
}

.sg-heading-3-light {
  @extend %base-typography;
  font-size: 1.125em;
  font-weight: $regular;
  color: $solidgray;
}

.sg-heading-4 {
  @extend %base-typography;
  font-size: 1em;
  font-weight: $bold;
  color: $solidgray;
}

.sg-heading-4-light {
  @extend %base-typography;
  font-size: 1em;
  font-weight: $regular;
  color: $solidgray;
}

.sg-heading-5 {
  @extend %base-typography;
  font-size: 0.875em;
  font-weight: $bold;
  color: $solidgray;
}

.sg-heading-5-light {
  @extend %base-typography;
  font-size: 0.875em;
  font-weight: $regular;
  color: $solidgray;
}

.sg-heading-6 {
  @extend %base-typography;
  font-size: 0.8em;
  font-weight: $bold;
  color: $solidgray;
}

.sg-heading-6-light {
  @extend %base-typography;
  font-size: 0.8em;
  font-weight: $regular;
  color: $solidgray;
}

// Body
.sg-body-1 {
  @extend %base-typography;
  font-size: 0.75em;
  font-weight: $bold;
  color: $solidgray;
}

.sg-body-1-light {
  @extend %base-typography;
  font-size: 0.75em;
  font-weight: $regular;
  color: $solidgray;
}

.sg-body-2 {
  @extend %base-typography;
  font-size: 0.625em;
  font-weight: $bold;
  color: $solidgray;
}

.sg-body-2-light {
  @extend %base-typography;
  font-size: 0.625em;
  font-weight: $light;
  color: $solidgray;
}

// Misc
.sg-default {
  @extend %base-typography;
  font-size: 0.75em;
  font-weight: $regular;
  color: $solidgray;
}

.sg-hidden {
  display: none;
}

// Colors
.wh {
  color: $white;
}

.gray {
  color: $gray;
}

.lightbrown {
  color: $lightbrown;
}

.lightred {
  color: $lightred;
}

.lightgray {
  color: $lightgray;
}

.steelblue {
  color: $steelblue;
}
</style>
