<template>
    <div class="input-wrapper">
      <input
        :type="type"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        @focus="focused = true"
        @blur="focused = false"
        :placeholder="focused ? placeholder : ''"
        class="input"
      />
      <label :class="{ active: focused || modelValue }">{{ placeholder }}</label>
      <span class="underline" :class="{ active: focused }" />
    </div>
  </template>
  
  <script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
    modelValue: string
    placeholder: string
    type?: string
  }>()

const focused = ref(false)

  </script>
  
  <style scoped>
  .input-wrapper {
    position: relative;
    margin-bottom: 1.5rem;
  }
  
  .input {
    width: 100%;
    padding: 10px 0 6px;
    border: none;
    border-bottom: 1px solid #ccc;
    font-size: 16px;
    background: transparent;
    color: #000000;
    outline: none;
  }

  input:focus::placeholder {
  color: transparent;
}
  
  label {
    position: absolute;
    left: 0;
    top: 10px;
    color: #000000;
    pointer-events: none;
    transition: 0.2s ease all;
    font-size: 16px;
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
  }
  
  .underline.active {
    transform: scaleX(1);
  }
  </style>
  