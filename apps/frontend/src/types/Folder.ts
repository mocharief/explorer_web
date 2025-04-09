export interface Folder {
  id: number;
  name: string;
  parentId: number | null;
  created_at: string;
  children?: Folder[];
}