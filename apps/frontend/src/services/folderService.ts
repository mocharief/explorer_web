import type { Folder } from '../types/Folder';

const BASE_URL = 'http://localhost:3000'; // adjust if needed

export async function fetchAllFolders(): Promise<Folder[]> {
  const res = await fetch(`${BASE_URL}/folders`);
  if (!res.ok) throw new Error('Failed to fetch folders');
  return res.json();
}

export async function selectedFolders(folderId: number): Promise<Folder[]> {
  const res = await fetch(`${BASE_URL}/folders/${folderId}/children`);
  if (!res.ok) throw new Error('Failed to fetch folders');
  return res.json();
}