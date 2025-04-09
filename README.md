# explorer_web

Adding Table:

```bash
CREATE TABLE folders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    parent_id INT DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (parent_id) REFERENCES folders(id) ON DELETE CASCADE
);

CREATE TABLE files (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    folder_id INT,
    size VARCHAR(255),
    mime_type VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (folder_id) REFERENCES folders(id) ON DELETE CASCADE
);
```

Sample Data:

```bash
-- Root folder
INSERT INTO folders (id, name, parent_id) VALUES (1, 'root', NULL);

-- Level 1 folders
INSERT INTO folders (id, name, parent_id) VALUES 
(2, 'documents', 1),
(3, 'photos', 1),
(4, 'music', 1);

-- Level 2 folders
INSERT INTO folders (id, name, parent_id) VALUES 
(5, 'work', 2),
(6, 'personal', 2),
(7, 'otomotif', 3);

-- Level 3 folder
INSERT INTO folders (id, name, parent_id) VALUES 
(8, 'klx', 7);


-- Insert sample file
INSERT INTO files (name, folder_id, size, mime_type) VALUES
('cv_new.pdf', 5, '210000', 'application/pdf'),
('klx_125.jpg', 8, '550000', 'image/jpeg'),
('avenged_dear_god.mp3', 4, '5000000', 'audio/mpeg'),
('reporting.xlsx', 6, '120000', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');

```

To install dependencies:

```bash
bun install
```

To run api:

```bash
cd .\apps\backend\
bun run index.ts
```

This project was created using `bun init` in bun v1.2.8. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
