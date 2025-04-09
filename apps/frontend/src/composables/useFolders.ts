import { ref } from 'vue';
import type { Folder } from '../types/Folder';
import type { File } from '../types/File';
import { fetchAllFolders, selectedFiles } from '../services/folderService';

export function useFolders() {
  const folders = ref<Folder[]>([]);
  const selectedFolder = ref<Folder | null>(null);
  const currentFileList = ref<File[] | null>(null);

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
      currentFileList.value = await selectedFiles(folder.id);
      selectedFolder.value = folder;
    } catch (err) {
      console.error('Error loading folders:', err);
    }
  }

  return {
    folders,
    selectedFolder,
    currentFileList,
    loadFolders,
    selectFolder,
  };
}
