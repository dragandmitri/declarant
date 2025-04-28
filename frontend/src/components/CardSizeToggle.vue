<template>
    <div class="icon-tabs">
      <button
        v-for="tab in tabs"
        :key="tab.name"
        :class="{ active: currentTab === tab.name }"
        @click="selectTab(tab.name)"
        class="tab-button"
      >
        <component :is="tab.icon" class="tab-icon" />
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  import HomeIcon from "@/components/icons/FileIcon.vue";
  import SearchIcon from "@/components/icons/CloseIcon.vue";
  import UserIcon from "@/components/icons/LoadIcon.vue";
  
  const emit = defineEmits<{
    (e: 'change', tab: string): void;
  }>();
  
  const tabs = [
    { name: 'home', icon: HomeIcon },
    { name: 'search', icon: SearchIcon },
    { name: 'user', icon: UserIcon },
  ];
  
  const currentTab = ref('home');
  
  function selectTab(tabName: string) {
    currentTab.value = tabName;
    emit('change', tabName);
  }
  </script>
  
  <style scoped>
  .icon-tabs {
    display: flex;
    gap: 10px;
  }
  
  .tab-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    border-radius: 10px;
    transition: background-color 0.2s;
  }
  
  .tab-button.active {
    background-color: #d2e9ff;
  }
  
  .tab-icon {
    width: 28px;
    height: 28px;
    stroke-width: 2;
    color: #444;
  }
  .tab-button.active .tab-icon {
    color: #1976d2;
  }
  </style>
  