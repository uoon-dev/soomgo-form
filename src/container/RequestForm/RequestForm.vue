<template>
  <div>
    <v-flex>test</v-flex>
  </div>
</template>

<script>
import vFlex from '@/components/UI/VFlex/VFlex';
import formData from '@/assets/input.json';

export default {
  name: 'RequestForm',
  components: {
    vFlex,
  },
  data() {
    return {
      formData,
    };
  },
  created() {
    console.log(this.formData);
  },
};
</script>
