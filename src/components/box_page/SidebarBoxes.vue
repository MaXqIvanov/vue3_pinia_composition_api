<template>
    <div class="sidebar_boxes">
        <div class="sidebar_boxes__block">
            
        </div>
        <div @click="boxStore.setCurrentCategory(null)" class="sidebar_boxes__plug"></div>
    </div>
</template>

<script setup lang="ts">
import { useBoxStore } from "../../store/BoxStore";
const boxStore = useBoxStore()

</script>

<style scoped lang="scss">
.sidebar_boxes__block{
    position: absolute;
    top: 0px;
    right: 0px;
    width: 35%;
    height: 100%;
    min-height: 100vh;
    background: white;
    z-index: 100;
}
.sidebar_boxes__plug{
    position: fixed;
    top: 0px;
    right: 0px;
    z-index: 20;
    min-height: 100vh;
    width: 100vw;
    height: fit-content;
    background: black;
    opacity: 0%;
}
</style>