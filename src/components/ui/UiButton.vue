<template>
  <div
    :style="{ backgroundColor: props.backgroundColor }"
    class="button"
  >
    <span :style="{ color: props.textColor }">{{ props.title }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  backgroundColor: {
    type: String,
    required: true,
  },
  textColor: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
console.log(props);
</script>

<style scoped lang="scss">
.button {
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
