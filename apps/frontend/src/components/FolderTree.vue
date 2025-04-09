<template>
  <ul class="folder-tree">
    <li v-for="folder in folders" :key="folder.id">
      <div
        class="folder-item"
        :class="{ selected: folder.id === selected?.id }"
        @click.stop="select(folder)"
      >
        <span v-if="folder.children?.length" class="toggle-icon" @click.stop="toggle(folder.id)">
          {{ isOpen(folder.id) ? '▼' : '▶' }}
        </span>
        <span v-else style="display: inline-block; width: 1em;"></span>

        📁 {{ folder.name }}
      </div>

      <!-- Show children if folder is open -->
      <FolderTree
        v-if="isOpen(folder.id) && folder.children?.length"
        :folders="folder.children"
        :selected="selected"
        @select="select"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Folder } from '../types/Folder';
import { defineProps, defineEmits } from 'vue';

defineProps<{
  folders: Folder[];
  selected: Folder | null;
}>();

const emit = defineEmits<{
  (e: 'select', folder: Folder): void;
}>();

const openMap = ref<Record<number, boolean>>({});

function toggle(folderId: number) {
  openMap.value[folderId] = !openMap.value[folderId];
}

function isOpen(folderId: number): boolean {
  return !!openMap.value[folderId];
}

function select(folder: Folder) {
  emit('select', folder);
}
</script>

<style scoped>
.folder-tree {
  list-style: none;
  padding-left: 1rem;
  font-family: sans-serif;
}

.folder-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.3rem;
  cursor: pointer;
  user-select: none;
}

.folder-item.selected {
  font-weight: bold;
  color: #ffffff;
  background: #131313;
  border-radius: 4px;
}

.toggle-icon {
  width: 1em;
  display: inline-block;
  cursor: pointer;
  user-select: none;
}
</style>
