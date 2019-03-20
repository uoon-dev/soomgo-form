<template>
  <div class="select">
    <select
      :value="value"
      @change="selectChanged"
    >
      <option v-for="option in options" :key="option.id" :value="option.text">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'VSelect',
  props: {
    value: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      required: true,
    },
    selectChanged: {
      type: Function,
      default: () => {},
    },
  },
};
</script>

<style lang="scss">
/* Reset Select */
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0 !important;
  background: #2c3e50;
  background-image: none;
}
/* Custom Select */
.select {
  position: relative;
  display: block;
  width: 20em;
  height: 3em;
  line-height: 3;
  background: #2c3e50;
  overflow: hidden;
  border-radius: .25em;
}
select {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0 0 0 1em;
  color: #fff;
  cursor: pointer;
}
select::-ms-expand {
  display: none;
}
/* Arrow */
.select::after {
  content: '\25BC';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 0 1em;
  color: #fff;
  background: #34495e;
  pointer-events: none;
}
/* Transition */
.select:hover::after {
  color: #f0ebf8;
}
.select::after {
  -webkit-transition: .25s all ease;
  -o-transition: .25s all ease;
  transition: .25s all ease;
}
</style>
