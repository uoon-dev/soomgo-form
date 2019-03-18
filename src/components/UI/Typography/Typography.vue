<template>
  <p :class="[typographyClass]" :style="{ width: width }">
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
  name: 'Typography',
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
    // Style
    width: {
      type: String,
      default: 'auto',
    },
  },
  data() {
    return {
      breakpoint: window.innerWidth,
    };
  },
  computed: {
    typographyClass() {
      const component = this;

      switch (this.breakpoint) {
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
  },
  created() {
    this.checkBreakPoint(window.innerWidth);

    window.addEventListener('resize', (e) => {
      const { innerWidth } = e.target;
      this.checkBreakPoint(innerWidth);
    });
  },
  methods: {
    checkBreakPoint(innerWidth) {
      if (innerWidth < 600) {
        this.breakpoint = 'xs';
      } else if (innerWidth >= 600 && innerWidth < 960) {
        this.breakpoint = 'sm';
      } else if (innerWidth >= 960 && innerWidth < 1264) {
        this.breakpoint = 'md';
      } else {
        this.breakpoint = 'lg';
      }
    },
  },

};
</script>

<style lang="scss">
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
}

.sg-heading-2 {
  @extend %base-typography;
  font-size: 1.5em;
  font-weight: $bold;
}

.sg-heading-3 {
  @extend %base-typography;
  font-size: 1.125em;
  font-weight: $bold;
}

.sg-heading-3-light {
  @extend %base-typography;
  font-size: 1.125em;
  font-weight: $regular;
}

.sg-heading-4 {
  @extend %base-typography;
  font-size: 1em;
  font-weight: $bold;
}

.sg-heading-4-light {
  @extend %base-typography;
  font-size: 1em;
  font-weight: $regular;
}

.sg-heading-5 {
  @extend %base-typography;
  font-size: 0.875em;
  font-weight: $bold;
}

.sg-heading-5-light {
  @extend %base-typography;
  font-size: 0.875em;
  font-weight: $regular;
}

.sg-heading-6 {
  @extend %base-typography;
  font-size: 0.8em;
  font-weight: $bold;
}

.sg-heading-6-light {
  @extend %base-typography;
  font-size: 0.8em;
  font-weight: $regular;
}

// Body
.sg-body-1 {
  @extend %base-typography;
  font-size: 0.75em;
  font-weight: $bold;
}

.sg-body-1-light {
  @extend %base-typography;
  font-size: 0.75em;
  font-weight: $regular;
}

.sg-body-2 {
  @extend %base-typography;
  font-size: 0.625em;
  font-weight: $bold;
}

.sg-body-2-light {
  @extend %base-typography;
  font-size: 0.625em;
  font-weight: $light;
}

// Misc
.sg-default {
  @extend %base-typography;
  font-size: 0.75em;
  font-weight: $regular;
}

.sg-hidden {
  display: none;
}
</style>
