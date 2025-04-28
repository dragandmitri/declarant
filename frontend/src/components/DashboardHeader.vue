<template>
  <div class="search">
    <div class="search-icon">
      <SearchIcon />
    </div>
    <div class="input-wrapper">
      <input
        type="text"
        v-model="searchText"
        @focus="focused = true"
        @blur="focused = false"
        placeholder="Cautare"
        class="input"
        @input="updateSearchtext"
      />
      <span class="underline" :class="{ active: focused }" />
    </div>
    <slot name="panelSelector"> </slot>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";
import SearchIcon from "./icons/SearchIcon.vue";

const focused = ref(false);
const searchText = ref("");

const emit = defineEmits<{
  (event: "update:search-text", value: string): void;
}>();

const updateSearchtext = () => {
  emit("update:search-text", searchText.value);
};
</script>
<style scoped>




.search {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  align-items: center;
}

.search-icon svg {
  padding-right: 10px;
  color: #c4c4d1;
  width: 20px;
  height: 20px;
  margin-top: 5px;
}
.input-wrapper {
  position: relative;
  width: 100%;
  margin-right: 15px;
}

.input {
  width: 100%;
  border: none;
  border-bottom: none;
  font-size: 12px;
  background: transparent;
  font-weight: 500;
  color: #6d6d73;
  outline: none;
  text-transform: uppercase;
}

input:focus::placeholder {
  color: transparent;
}

label {
  position: absolute;
  left: 0;
  top: 22px;
  color: #000000;
  pointer-events: none;
  transition: 0.2s ease all;
  font-size: 13px;
}

label.active {
  top: -10px;
  font-size: 12px;
  color: #2a2a72;
}

.underline {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background-color: #2a2a72;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
  opacity: 0.3;
}

.underline.active {
  transform: scaleX(1);
  opacity: 0.3;
}
</style>
