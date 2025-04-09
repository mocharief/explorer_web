<template>
    <div>
      <h2>📁 Subfolders of "{{ selected?.name ?? 'None' }}"</h2>
  
      <ul v-if="children.length" style="margin-bottom: 0px;">
        <li v-for="child in children" :key="child.id" class="subfolder">
          📂 {{ child.name }}
        </li>
      </ul>

      <ul v-if="files.length" class="files">
        <li v-for="fl in files" :key="fl.id" class="subfolder">
          {{ fl.name }}
        </li>
      </ul>
      
      <p v-if="!children.length && !files.length" class="empty">No files in here.</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  import type { Folder } from '../types/Folder';
  import type { File } from '../types/File';
  import { defineProps } from 'vue';
  
  const props = defineProps<{
    selected: Folder | null;
    selectedFiles: File[] | null;
  }>();
  
  const children = computed(() => {
    return props.selected?.children ?? [];
  });

  const files = computed(() => {
    return props.selectedFiles ?? [];
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
  .files {
    margin-top: 0px;
    margin-bottom: 0px;
  }
  </style>
  