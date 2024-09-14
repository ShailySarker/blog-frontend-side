"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from './components/blogCard';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [deletePostId, setDeletePostId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get('http://localhost:4000/posts');
      setPosts(response?.data);
    }
    fetchPosts();
  }, []);
  console.log(posts)

  const deletePost = async (id) => {
    await axios.delete(`/posts/${id}`);
    setPosts(posts.filter(post => post?.id !== id));
  };

  return (
    <div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">All Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts?.map(post => (
            <BlogCard key={post?.id} post={post} onDelete={() => {
              setDeletePostId(post?.id);
              setShowModal(true);
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}
