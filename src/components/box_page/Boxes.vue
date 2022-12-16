<template>
    <div class="boxes border_block">
        <div @click="box.id && boxStore.setCurrentCategory(box)" class="one_box boxes__one_box" v-for="box in boxStore.box" :key="box.id">
            <div v-if="box.count" class="one_box__count border_block"><span>{{box.count}}</span></div>
            <div v-if="box.color" :style="{backgroundColor: box.color}" class="one_box__color"><div :style="{backgroundColor: `rgba(${box.color_blur})`}" class="one_box__color__blur"></div></div>
        </div>
        <SidebarBoxes v-if="boxStore.is_visible_sidebar"/>
    </div>
</template>

<script setup lang="ts">
    import { useBoxStore } from "../../store/BoxStore"
    import SidebarBoxes from "./SidebarBoxes.vue";
    const boxStore = useBoxStore()
</script>

<style scoped lang="scss">
.one_box__color__blur{
    position: absolute;
    top: -0.5vw;
    right: -0.5vw;
    backdrop-filter: blur(6px);
    height: 6vh;
    width: 6vh;
}
.one_box__color{
    position: relative;
    height: 6vh;
    width: 6vh;
    cursor: pointer;
}
.one_box__count{
    position: absolute;
    bottom: 0px;
    right: 0px;
    border-top: 0.1vw solid;
    border-left: 0.1vw solid;
    width: 2vw;
    height: 2vw;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 1vw;
}
.boxes{
    position: relative;
    width: calc(100vw - 29vw);
    height: calc(100vh - 26vh);
    display: flex;
    flex-wrap: wrap;
    border-top: 0.1vw solid;
    border-left: 0.1vw solid;
    border-radius: 1vw;
    box-sizing: border-box;
    overflow: hidden;
}
.one_box{
    position: relative;
    width: 20%;
    height: 20%;
    border-right: 0.1vw solid;
    border-bottom: 0.1vw solid;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    &:last-child{
        border-bottom-right-radius: 1vw;
    }
}
</style>