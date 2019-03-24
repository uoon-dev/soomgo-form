<template>
  <div class="banner" />
</template>

<style lang="scss" scoped>
@import '@/assets/scss/color.scss';

.banner {
  height: 278px;
  background-color: $lightmint;
}

@media screen and (max-width: 600px) {
 .banner {
    height: 178px;
  }
}
</style>
