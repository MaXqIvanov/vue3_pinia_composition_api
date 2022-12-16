<template>
  <div class="boxes border_block">
    <div
      v-for="(box, index) in boxStore.box"
      :key="box.id"
      class="one_box boxes__one_box"
      @click="box.id && boxStore.setCurrentBox(box, index)"
    >
      <div
        draggable="true"
        :class="[
          boxStore.drag_id === box.id ? 'one_box__drag' : 'one_box__not_darg',
        ]"
        @dragstart="(e) => boxStore.dragStartHandler(e, box, index)"
        @dragleave="boxStore.dragLeaveHandler"
        @dragend="boxStore.dragEndHandler"
        @dragover="boxStore.dragOverHandler"
        @drop="(e) => boxStore.DropHandler(e, box, index)"
      >
        <div
          v-if="box.color"
          :style="{ backgroundColor: box.color }"
          class="one_box__color"
        >
          <div
            :style="{ backgroundColor: `rgba(${box.color_blur})` }"
            class="one_box__color__blur"
          />
        </div>
      </div>
      <div
        v-if="box.count"
        class="one_box__count border_block"
      >
        <span>{{ box.count }}</span>
      </div>
    </div>
    <SidebarBoxes v-if="boxStore.is_visible_sidebar" />
  </div>
</template>

<script setup lang="ts">
import { useBoxStore } from "../../store/BoxStore";
import SidebarBoxes from "./SidebarBoxes.vue";
const boxStore = useBoxStore();
</script>

<style scoped lang="scss">
$color_white_theme: rgba(
  $color: #ffffff,
  $alpha: 0.4,
);
$border_color: #4d4d4d;
$background_color: #1e1e1e;
.one_box__not_darg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  border: 0px solid $border-color;
  align-items: center;
}
.one_box__drag {
  background-color: #1e1e1e;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid $border-color;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1vw;
  animation: alternate drag linear 1s;
  z-index: 999;
}
.one_box__color__blur {
  position: absolute;
  top: -0.5vw;
  right: -0.5vw;
  backdrop-filter: blur(6px);
  height: 6vh;
  width: 6vh;
}
.one_box__color {
  position: relative;
  height: 6vh;
  width: 6vh;
  cursor: grab;
}
.one_box__count {
  position: absolute;
  bottom: 0px;
  right: 0px;
  border-top: 0.1vw solid;
  border-left: 0.1vw solid;
  min-width: 2vw;
  min-height: 2vw;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 1vw;
}
.boxes {
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
.one_box {
  position: relative;
  width: 20%;
  height: 20%;
  border-right: 0.1vw solid;
  border-bottom: 0.1vw solid;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  &:last-child {
    border-bottom-right-radius: 1vw;
  }
}
</style>
