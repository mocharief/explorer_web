import type { Folder } from '../types/Folder';
import type { File } from '../types/File';

const BASE_URL = 'http://localhost:3000/api/v1/'; // adjust if needed

export async function fetchAllFolders(): Promise<Folder[]> {
  const res = await fetch(`${BASE_URL}/folders`);
  if (!res.ok) throw new Error('Failed to fetch folders');
  return res.json();
}

export async function selectedFiles(folderId: number): Promise<File[]> {
  const res = await fetch(`${BASE_URL}/folders/${folderId}/files`);
  if (!res.ok) throw new Error('Failed to fetch files');
  return res.json();
}