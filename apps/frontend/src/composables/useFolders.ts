import { ref } from 'vue';
import type { Folder } from '../types/Folder';
import { fetchAllFolders } from '../services/folderService';

export function useFolders() {
  const folders = ref<Folder[]>([]);
  const selectedFolder = ref<Folder | null>(null);

  async function loadFolders() {
    try {
      folders.value = await fetchAllFolders();
      console.log(folders.value)
    } catch (err) {
      console.error('Error loading folders:', err);
    }
  }

  async function selectFolder(folder: Folder) {
    try {
      selectedFolder.value = folder;
    } catch (err) {
      console.error('Error loading folders:', err);
    }
  }

  return {
    folders,
    selectedFolder,
    loadFolders,
    selectFolder,
  };
}
