import { Elysia } from 'elysia';
import { db } from './drizzle.config';
import { folders, files } from './db/schema';
import { eq } from 'drizzle-orm';
import { cors } from '@elysiajs/cors';
import { buildFolderTree } from './composables/useBuilderTree';

const app = new Elysia().use(cors());

app.get('api/v1//folders', async () => {
  const all = await db.select().from(folders);
  const tree = buildFolderTree(all);
  return tree;
});

app.get('api/v1//folders/:id/files', async ({ params }) => {
  const fileList = await db.select().from(files).where(eq(files.folderId, Number(params.id)));
  return fileList;
});
  
app.listen(3000);
console.log(`🛠 Backend running at http://localhost:3000`);
