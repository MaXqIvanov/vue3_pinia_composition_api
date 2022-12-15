<template>
  <div class="main">
    <box-page />
  </div>
</template>

<script setup lang="ts">
import BoxPage from './pages/BoxPage.vue';
import {useBoxStore} from './store/BoxStore'
const boxStore = useBoxStore();

console.log(boxStore.box)

</script>

<style scoped lang="scss">
$color_white_theme:  rgba($color: #FFFFFF, $alpha: 0.4);
.main{
  background-color: #1E1E1E;
  min-height: 100vh;
  color: $color_white_theme;
}
</style>
