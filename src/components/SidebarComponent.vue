<template>
  <div class="sidebar border_block">
    <div class="sidebar__image" />
    <div class="shadow_block sidebar__shadow_block" />
    <div class="shadow_block sidebar__shadow_block" />
    <div class="shadow_block sidebar__shadow_block" />
    <div class="shadow_block sidebar__shadow_block" />
    <div class="shadow_block sidebar__shadow_block" />
    <div class="shadow_block sidebar__shadow_block" />
    <div class="shadow_block sidebar__shadow_block" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.sidebar__shadow_block {
  width: 100%;
  border-radius: 0.6vw;
  &:nth-child(2) {
    width: 94%;
    height: 9%;
    margin-top: 6%;
  }
  &:nth-child(3) {
    width: 80%;
    height: 3.5%;
    margin-top: 9%;
  }
  &:nth-child(4) {
    width: 94%;
    height: 3.5%;
    margin-top: 6%;
  }
  &:nth-child(5) {
    width: 90%;
    height: 3.5%;
    margin-top: 6%;
  }
  &:nth-child(6) {
    width: 90%;
    height: 3.5%;
    margin-top: 6%;
  }
  &:nth-child(6) {
    width: 80%;
    height: 3.5%;
    margin-top: 6%;
  }
  &:nth-child(7) {
    width: 50%;
    height: 5%;
    margin-top: 8%;
  }
}
.sidebar {
  width: 25vw;
  height: calc(100vh - 26vh);
  border: 0.1vw solid;
  border-radius: 1vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1vw 1.1vw;
  margin-right: 2vw;
  padding: 1vw;
}
.sidebar__image {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: top;
  background-image: url("../assets/images/sidebar_blur.png");
  height: 50%;
  width: 100%;
  border-radius: 1vw;
}
</style>
