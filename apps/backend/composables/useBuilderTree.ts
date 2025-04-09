interface Folder {
    id: number;
    name: string;
    parentId: number | null;
    children?: Folder[];
}
  
export function buildFolderTree(flatList: Folder[]): Folder[] {
    const idMap: Record<number, Folder> = {};
    const rootFolders: Folder[] = [];

    for (const folder of flatList) {
        idMap[folder.id] = { ...folder, children: [] };
    }

    for (const folder of flatList) {
        const current = idMap[folder.id];
        if (folder.parentId === null) {
          if (current) rootFolders.push(current);
        } else {
          const parent = idMap[folder.parentId];
          if (parent && parent.children) {
            if (current) parent.children.push(current);
          }
        }
    }

    return rootFolders;
}
  