<template>
  <div class="app">
    <div class="left-panel">
      <FolderTree :folders="folders" :selected="selectedFolder" @select="selectFolder" />
    </div>
    <div class="right-panel">
      <FolderList :selected="selectedFolder" />
    </div>
  </div>
</template>

<script setup lang="ts">
import FolderTree from './components/FolderTree.vue';
import FolderList from './components/FolderList.vue';
import { useFolders } from './composables/useFolders';

const { folders, selectedFolder, loadFolders, selectFolder } = useFolders();
loadFolders();
</script>

<style scoped>
.app {
  display: flex;
  height: 100vh;
}
.left-panel {
  width: 300px;
  border-right: 1px solid #ccc;
  padding: 1rem;
  overflow-y: auto;
}
.right-panel {
  flex: 1;
  padding: 1rem;
}
</style>
