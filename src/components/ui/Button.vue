<template>
    <div :style="{backgroundColor: props.background_color}" class="button">
        <span :style="{color: props.text_color}">{{props.title}}</span>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
  background_color: {
    type: String,
    required: true
  },
  text_color: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
console.log(props)
</script>

<style scoped lang="scss">
.button{
    width: fit-content;
    height: 1vw;
    font-size: 1.2vw;
    border-radius: 0.75vw;
    cursor: pointer;
    font-family: SF_PRO;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>