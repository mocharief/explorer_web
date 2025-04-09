<template>
  <ul class="folder-tree">
    <li v-for="folder in folders" :key="folder.id">
      <div
        class="folder-item"
        :class="{ selected: folder.id === selected?.id }"
        @click.stop="onSelect(folder)"
      >
        📁 {{ folder.name }}
      </div>

      <!-- Recursive rendering of children -->
      <FolderTree
        v-if="folder.children && folder.children.length"
        :folders="folder.children"
        :selected="selected"
        @select="onSelect"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { Folder } from '@/types/Folder';
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
  folders: Folder[];
  selected: Folder | null;
}>();

const emit = defineEmits<{
  (e: 'select', folder: Folder): void;
}>();

function onSelect(folder: Folder) {
  emit('select', folder);
}
</script>

<style scoped>
.folder-tree {
  text-align: left;
  list-style: none;
  padding-left: 1rem;
  font-family: sans-serif;
}

.folder-item {
  padding: 0.3rem;
  cursor: pointer;
}

.folder-item.selected {
  font-weight: bold;
  color: blue;
}
</style>
