import { Elysia } from 'elysia';
import { db } from './drizzle.config';
import { folders, files } from './db/schema';
import { eq } from 'drizzle-orm';

const app = new Elysia();

app.get('/folders', async () => {
  const all = await db.select().from(folders);
  return all;
});

app.get('/folders/:id/children', async ({ params }) => {
  const children = await db.select().from(folders).where(eq(folders.parentId, Number(params.id)));
  return children;
});

app.get('/folders/:id/files', async ({ params }) => {
  const fileList = await db.select().from(files).where(eq(files.folderId, Number(params.id)));
  return fileList;
});
  
app.listen(3000);
console.log(`🛠 Backend running at http://localhost:3000`);
