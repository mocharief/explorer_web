<template>
    <div>
      <h2>📁 Subfolders of "{{ selected?.name ?? 'None' }}"</h2>
  
      <ul v-if="children.length">
        <li v-for="child in children" :key="child.id" class="subfolder">
          📂 {{ child.name }}
        </li>
      </ul>
  
      <p v-else class="empty">No files in here.</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  import type { Folder } from '@/types/Folder';
  import { defineProps } from 'vue';
  
  const props = defineProps<{
    selected: Folder | null;
  }>();
  
  const children = computed(() => {
    return props.selected?.children ?? [];
  });
  </script>
  
  <style scoped>
  .subfolder {
    padding: 0.3rem 0;
  }
  .empty {
    font-style: italic;
    color: gray;
  }
  </style>
  