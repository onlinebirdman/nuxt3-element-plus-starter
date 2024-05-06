<script setup lang="ts">
defineProps({
  src: {
    type: String,
    required: false,
  },
})

const visible = ref(false)
function onClick() {
  visible.value = true
}
</script>

<template>
  <div class="image-preview" @click="onClick">
    <img v-if="src" :src="src" alt="Preview">
    <span v-else>-</span>
  </div>
  <el-dialog
    v-model="visible"
    append-to-body
    :show-close="false"
    class="image-preview-dialog"
  >
    <img :src="src" alt="Full Image">
  </el-dialog>
</template>

<style>
  .image-preview-dialog {
  background-color: transparent;
  box-shadow: none;
  margin: auto;
  /* width: 100vw;
    height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}
</style>

<style scoped>
  .image-preview img {
  max-width: 100%;
  cursor: pointer;
  width: 50px;
  height: 50px;
  object-fit: contain;

  &:hover {
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background-color: rgba($color: #000000, $alpha: 0.7);
    }
  }
}
</style>
