<template>
  <button
    class="ripple-button"
    :class="[variantClass]"
    @mousedown="createRipple"
    :disabled="disabled"
  >
    <slot />
    <span v-for="r in ripples" :key="r.id" class="ripple" :style="r.style" />
  </button>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

defineOptions({
  name: "Button",
});

const props = defineProps<{
  variant?: "primary" | "secondary" | "danger" | "success";
  disabled?: boolean;
}>();

const ripples = ref<{ id: number; style: any }[]>([]);
let rippleId = 0;

function createRipple(event: MouseEvent) {
  const button = event.currentTarget as HTMLElement;
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  const newRipple = {
    id: rippleId++,
    style: {
      width: `${size}px`,
      height: `${size}px`,
      left: `${x}px`,
      top: `${y}px`,
    },
  };

  ripples.value.push(newRipple);

  setTimeout(() => {
    ripples.value = ripples.value.filter((r) => r.id !== newRipple.id);
  }, 600);
}

const variantClass = computed(() => {
  return `variant--${props.variant || "primary"}`;
});
</script>

<style scoped>
.ripple-button {
  position: relative;
  overflow: hidden;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.7s ease;
  box-shadow: 0 4px 4px #c5c4c6;
}

.ripple-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
  color: #666;
}

/* Ripple */
.ripple {
  position: absolute;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  transform: scale(0);
  animation: ripple-animation 0.8s linear;
  pointer-events: none;
}

@keyframes ripple-animation {
  to {
    transform: scale(4);
    opacity: 0;
  }
}

/* Variants */
.variant--primary {
  background-color: #43425d;
}
.variant--primary:hover {
  background-color: #43425d;
  box-shadow: 0 4px 4px #a8a3aa;
}

.variant--secondary {
  background-color: transparent;
  color: black;
  border: 1px solid black;
}
.variant--secondary:hover {
  background-color: transparent;
  box-shadow: 0 4px 4px #a8a3aa;
}

.variant--danger {
  background-color: #dc3545;
}
.variant--danger:hover {
  background-color: #c82333;
}

.variant--success {
  background-color: #28a745;
}
.variant--success:hover {
  background-color: #218838;
}
</style>
