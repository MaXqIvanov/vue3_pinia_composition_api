<template>
    <div>
        <Boxes />
    </div>
</template>

<script setup lang="ts">
import Boxes from '../components/box_page/Boxes.vue';
import { useBoxStore } from '../store/BoxStore';
const boxStore = useBoxStore()

boxStore.getBoxes()
</script>

<style scoped lang="scss">

</style>