"use client"
import { useState, useEffect } from 'react';
import BlogCard from './components/blogCard';
import api from '@/lib/api';
import ConfirmModal from './components/confirmModal';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [deletePostId, setDeletePostId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

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
      <h2 className="lg:text-3xl md:text-xl text-lg text-center font-bold lg:mb-4 md:mb-3 mb-2 text-black">All Blog Posts</h2>
      <div>
        {
          posts?.length === 0 ?
            <div className='lg:py-28 md:py-20 py-16 '>
              <h3 className='text-center  font-bold lg:text-xl md:text-lg text-base text-black'>Sorry, no blog post is available now !</h3>
              <Button className="mx-auto lg:w-44 md:w-40 w-36 md:text-lg text-base font-semibold lg:py-5 md:py-4 py-3 flex justify-center lg:mt-6 md:mt-5 mt-4" type="button" onClick={() => router.push('/createPost')}>
                Create a Post
            </Button>
            </div> :
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 md:gap-5 gap-4 lg:mt-12 md:mt-9 mt-7">
              {posts?.map(post => (
                <BlogCard key={post?.id} post={post} onDelete={() => {
                  setDeletePostId(post?.id);
                  setShowModal(true);
                }} />
              ))}
            </div>
        }
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
