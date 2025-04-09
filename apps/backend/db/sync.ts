import { db } from './connection';
import { folders } from './schema';

async function main() {
  // Optional: seed some data
  await db.insert(folders).values([
    { name: 'root', parentId: null },
    { name: 'documents', parentId: 1 },
    { name: 'photos', parentId: 1 },
    { name: 'music', parentId: 2 },
  ]);

  console.log('✅ Folder structure seeded');
}

main().catch(console.error);
