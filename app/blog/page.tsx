'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { ThemeProvider, useTheme } from '@/components/navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

interface Post {
  id: number;
  title: string;
  body: string;
}

const BlogContent = () => {
  const { theme } = useTheme();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
        setPosts(res.data);
      } catch (err) {
        console.error(err);
      } finally{
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div data-theme={theme ? 'garden' : 'dim'}>
      <Navbar />
      <main className={`flex flex-col items-center min-h-screen p-8 ${theme ? 'text-gray-700' : 'text-gray-300'}`}>
        <div className="mb-8">
          <h1 className="text-4xl font-semibold">Blog Posts</h1>
        </div>
        <div className="w-full max-w-4xl">
          {loading ? (
            <div className="flex justify-center items-center min-h-[50vh]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="h-12 w-12 border-4 border-t-transparent border-gray-400 rounded-full"
              />
            </div>
          ) : currentPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentPosts.map((post) => (
                  <motion.div
                    key={post.id}
                    whileHover={{ scale: 1.02 }}
                    className={`card p-4 rounded-sm border-dotted border ${theme ? "border-gray-900" : "border-gray-100"} transition-all duration-300`}
                  >
                    <h2 className="text-xl font-serif mb-2">{post.title}</h2>
                    <p>{post.body}</p>
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                {Array.from({ length: Math.ceil(posts.length / postsPerPage) }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => paginate(i + 1)}
                    className={`mx-1 px-3 py-1 rounded ${
                      currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-semibold">Kosong</h2>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

const BlogPage: React.FC = () => {
  return (
    <ThemeProvider>
      <BlogContent />
    </ThemeProvider>
  );
};

export default BlogPage;