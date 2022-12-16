<template>
  <div class="main">
    <div
      title="Вернуть в исходное состояние"
      class="return_all"
      @click="boxStore.returnAll"
    />
    <div class="wrapper main__wrapper">
      <sidebar />
      <box-page />
    </div>
    <Footer />
  </div>./components/FooterComponent.vue
</template>

<script setup lang="ts">
import Footer from "./components/FooterComponent.vue";
import Sidebar from "./components/SidebarComponent.vue";
import BoxPage from "./pages/BoxPage.vue";
import { useBoxStore } from "./store/BoxStore";
const boxStore = useBoxStore();

console.log(boxStore.box);
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
@font-face {
  font-family: "SF_PRO";
  src: local("SF_PRO"),
    url(./assets/fonts/SFPRODISPLAYREGULAR.OTF) format("truetype");
}
$color_white_theme: rgba(
  $color: #ffffff,
  $alpha: 0.4,
);
$border_color: #4d4d4d;
$background_color: #1e1e1e;

input {
  margin-top: -1vw;
  background-color: $background-color;
  border: 0.1vw solid $border_color;
  padding: 0.8vw 1vw;
  width: 86%;
  border-radius: 0.3vw;
  box-sizing: border-box;
  color: white;
  font-weight: 500;
  font-size: 1vw;
  &:focus {
    outline: 0px;
  }
}
.separate_line {
  width: 96%;
  height: 0.1vw;
  background: $border_color;
}
.main {
  background-color: $background_color;
  min-height: 100vh;
  color: $color_white_theme;
  display: flex;
  flex-direction: column;
  padding: 2vw;
  box-sizing: border-box;
  font-size: 1.5vw;
  font-family: "Inter", sans-serif;
}
.main__wrapper {
  display: flex;
  flex: 1 0 auto;
}
.shadow_block {
  display: inline-block;
  position: relative;
  overflow: hidden;
  background: linear-gradient(90deg, #3c3c3c 0%, #444444 51.04%, #333333 100%);
  pointer-events: none;
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(#fff, 0) 0,
      rgba(#fff, 0.2) 20%,
      rgba(#fff, 0.5) 60%,
      rgba(#fff, 0)
    );
    animation: shimmer 2s infinite;
    content: "";
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
}
.image {
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.border_block {
  border-color: $border_color;
}
.return_all {
  background-image: url("./assets/images/return_all.svg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 2.5vw;
  width: 2.5vw;
  position: fixed;
  z-index: 999999;
  top: 0.25vw;
  right: 0.25vw;
  cursor: pointer;
}
</style>
