<template>
  <div class="panels">
      <div
        v-for="index in [0,2,1]"
        :key="index"
        class="panel"
        :class="{ active: modelValue === index }"
        @click="$emit('update:modelValue', index)"
      >
      <div
      :class="[
          getSquareClass(index, 1),
          modelValue === index ? 'active-panel' : '',
        ]"
      ></div>
      <div
      :class="[
          getSquareClass(index, 0),
          modelValue === index ? 'active-panel' : '',
        ]"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

defineProps<{
  modelValue: number;
}>();

defineEmits<{
  (e: "update:modelValue", value: number): void;
}>();

function getSquareClass(panelIndex: number, squareIndex: number) {
  if (panelIndex === 0) {
    return "square";
  }
  if (panelIndex === 1) {
    return squareIndex === 0 ? "square-small" : "square-large";
  }
  if (panelIndex === 2) {
    return squareIndex === 0 ? "square-large" : "square-small";
  }
  return "square";
}
</script>

<style scoped>
.panels {
  display: flex;
  gap: 10px;
  border-left: 2px solid rgba(196, 197, 205, 0.4);
  padding-left: 15px;
}

.panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  cursor: pointer;
}

.square,
.square-large,
.square-small {
  width: 25px;
  border: 2px solid #c8c9d1;
}

.square {
  height: 6px;
}

.square-large {
  height: 11px;
}

.square-small {
  height: 1px;
}

.active-panel {
  border-color: #3174ad;
  border-width: 3px;
}
</style>
