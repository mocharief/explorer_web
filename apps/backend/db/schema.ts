import { mysqlTable, serial, varchar, int, timestamp, bigint } from 'drizzle-orm/mysql-core';

export const folders = mysqlTable('folders', {
  id: serial('id').primaryKey().autoincrement(),
  name: varchar('name', { length: 255 }).notNull(),
  parentId: int('parent_id'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const files = mysqlTable('files', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  folderId: int('folder_id'),
  size: varchar('size', { length: 255 }),
  mimeType: varchar('mime_type', { length: 255 }),
  createdAt: timestamp('created_at').defaultNow(),
});
