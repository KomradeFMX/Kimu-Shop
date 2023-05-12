import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'database');

export function loadCategories() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.json$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const result = JSON.parse(fileContents);

    // Combine the data with the id
    return {
      id,
      ...result,
    };
  });
  // Sort posts by date
  return allPostsData;
}