// pages/api/posts.js
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Open connection to the SQLite database
const openDB = async () => {
  return open({
    filename: './blogs.db',  // This file will be created if it doesn't exist
    driver: sqlite3.Database,
  });
};

// API Route for GET (fetch posts) and POST (create post)
export default async function handler(req, res) {
  const db = await openDB();

  if (req.method === 'GET') {
    // Fetch all posts from the database
    const posts = await db.all('SELECT * FROM Post');
    res.status(200).json(posts);
  }

  if (req.method === 'POST') {
    const { title, content } = req.body;

    // Validate inputs
    if (!title || !content) {
      res.status(400).json({ error: 'Title and Content are required' });
      return;
    }

    // Insert new post into the database
    const result = await db.run('INSERT INTO Post (title, content) VALUES (?, ?)', [title, content]);
    const insertedId = result.lastID;

    res.status(201).json({ id: insertedId, title, content });
  }
}
