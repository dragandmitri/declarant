<template>
  <div v-if="show" class="overlay">
    <div class="drawer" :class="[{ closing: isClosing, opening: isOpening }]"
    @animationend="handleAnimationEnd">
      <div class="drawer-header">
        <div v-show="!isClosing" class="drawer-title">DECLARANT</div>
        <div class="drawer-icon">
          <slot name="drawerAction">
            <CloseIcon v-if="!isClosing" class="close-icon" @click="closeDrawer" />
            <BurgerIcon v-else class="burger-icon" @click="openDrawer" />
          </slot>
        </div>
      </div>
      <div class="drawer-content">

        <slot name="drawer-content">
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import CloseIcon from "./icons/CloseIcon.vue";
import BurgerIcon from "./icons/BurgerIcon.vue";

const props = defineProps<{
  show: boolean;
}>();

const emit = defineEmits(["close"]);

const isClosing = ref(false);
const isOpening = ref(false);

function handleAnimationEnd() {
  if (isClosing.value) {
    emit('close');
  }
}

function closeDrawer() {
  isClosing.value = true;
  isOpening.value = false
}

function openDrawer() {
  isClosing.value = false;
  isOpening.value = true
}

watch(
  () => props.show,
  (val) => {
    if (val) {
      openDrawer();
    } else {
      closeDrawer();
    }
  }
);

</script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background-color: #f4f4f4;
  z-index: 1000;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
}

.drawer {
  background: linear-gradient(to bottom , #0f83bd, #1171ad, #3266aa);
  color: #dbeaf1;
  height: 100%;
  width: 260px;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.2);
  animation: slideIn 0.3s ease forwards;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.drawer-header {
  width: 100%;
  padding: 19px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #05679c;
  box-sizing: border-box;
}

.drawer-title {
  font-size: 19px;
  font-weight: bold;
  letter-spacing: 4px;
  align-self: center;
}

.drawer-icon {
  cursor: pointer;
}

.drawer-content {
  flex-shrink: 0;
}

.close-icon {
  stroke-width: 2;
  width: 100%;
  height: 28px;
  align-self: center;
}

.burger-icon {
  stroke-width: 2;
  width: 28px;
  height: 28px;
  align-self: center;
}

.drawer.closing {
  animation: collapseDrawer 0.3s forwards;
  overflow: hidden;
}

.drawer.opening {
  animation: expandDrawer 0.3s forwards;
  overflow-x: hidden;
}

@keyframes expandDrawer {
  from {
    width: 65px;
  }
  to {
    width: 260px;
  }
}

@keyframes collapseDrawer {
  from {
    width: 260px;
  }
  to {
    width: 65px;
  }
}

</style>
