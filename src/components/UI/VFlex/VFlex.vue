<template>
  <div :class="[justifyClass, alignClass, 'flex']">
    <slot>{{ text }}</slot>
  </div>
</template>

<script>
export default {
  name: 'VFlex',
  props: {
    text: {
      type: String,
      default: '',
    },
  },
  computed: {
    justifyClass() {
      const {
        justifyStart,
        justifyEnd,
        justifyCenter,
        justifySpaceAround,
        justifySpaceBetween,
        justifyBaseline,
      } = this;

      if (justifyStart) return 'justify-start';
      if (justifyEnd) return 'justify-end';
      if (justifyCenter) return 'justify-center';
      if (justifySpaceAround) return 'justify-space-around';
      if (justifySpaceBetween) return 'justify-space-between';
      if (justifyBaseline) return 'justify-baseline';
      return '';
    },
    alignClass() {
      const {
        alignStart,
        alignEnd,
        alignCenter,
        alignBaseline,
      } = this;

      if (alignStart) return 'align-start';
      if (alignEnd) return 'align-end';
      if (alignCenter) return 'align-center';
      if (alignBaseline) return 'align-baseline';
      return '';
    },
  },
};
</script>


<style lang="scss" scoped>
.flex {
  display: flex;
}

.justify-start {
  justify-content: flex-start;
}

.justify-end {
  justify-content: flex-end;
}

.justify-center {
  justify-content: center;
}

.justify-space-around {
  justify-content: space-around;
}

.justify-space-between {
  justify-content: space-between;
}

.justify-baseline {
  justify-content: baseline;
}

.align-start {
  align-items: flex-start;
}

.align-end {
  align-items: flex-end;
}

.align-center {
  align-items: center;
}

.align-baseline {
  align-items: baseline;
}
</style>
