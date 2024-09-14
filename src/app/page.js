"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from './components/blogCard';
import api from '@/lib/api';
import ConfirmModal from './components/confirmModal';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [deletePostId, setDeletePostId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      const response = await api.get('/posts');
      setPosts(response?.data);
    }
    fetchPosts();
  }, []);
  console.log(posts)

  const deletePost = async (id) => {
    await api.delete(`/posts/${id}`);
    setPosts(posts.filter(post => post?.id !== id));
  };

  return (
    <div className="lg:pt-6 md:pt-4 pt-3 lg:pb-28 md:pb-24 pb-14">
      <h2 className="lg:text-3xl md:text-xl text-lg text-center font-bold lg:mb-4 md:mb-3 mb-2">All Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 md:gap-5 gap-4 lg:mt-12 md:mt-9 mt-7">
        {posts?.map(post => (
          <BlogCard key={post?.id} post={post} onDelete={() => {
            setDeletePostId(post?.id);
            setShowModal(true);
          }} />
        ))}
      </div>
      {showModal && (
        <ConfirmModal
          onConfirm={() => {
            deletePost(deletePostId);
            setShowModal(false);
          }}
          onCancel={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
