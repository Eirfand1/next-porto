'use client';

import {  useTheme } from '@/components/navbar';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { containerAnimation, itemAnimation, wordAnimation } from '@/utils/animation';

interface Post {
  id: number;
  title: string;
  body: string;
}

const BlogContent: React.FC = () => {
  const { theme } = useTheme();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(10);

  const pageNumberLimit: number = 3; 
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState<number>(pageNumberLimit);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
        setPosts(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => prev - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  return (
    <motion.div
     variants={containerAnimation}
     initial="initial"
     animate="animate">
      <main className={`flex flex-col items-center min-h-screen p-8 ${theme ? 'text-gray-700' : 'text-gray-300'}`}>
        <div className="mb-8">
          <motion.h1 className="text-4xl font-semibold" variants={wordAnimation}>Blog Posts</motion.h1>
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
                    variants={itemAnimation}
                    whileHover={{ scale: 1.02 }}
                    className={`card p-4 rounded-sm border-dotted border ${theme ? "border-gray-900" : "border-gray-100"} `}
                  >
                    <h2 className="text-xl font-serif mb-2">{post.title}</h2>
                    <p>{post.body}</p>
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-wrap justify-center join mt-8">
                <button
                  onClick={handlePrevPage}
                  className={`btn btn-sm rounded-none font-normal ${
                    currentPage === 1 ? 'disabled' : ''
                  }`}
                  disabled={currentPage === 1}
                >
                  Prev
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  if (page < maxPageNumberLimit + 1 && page > minPageNumberLimit) {
                    return (
                      <button
                        key={page}
                        onClick={() => paginate(page)}
                        className={`join-item btn btn-sm rounded-none font-normal ${
                          currentPage === page ? 'btn-active font-semibold' : ''
                        }`}
                      >
                        {page}
                      </button>
                    );
                  }
                  return null;
                })}
                <button
                  onClick={handleNextPage}
                  className={`btn btn-sm rounded-none font-normal ${
                    currentPage === totalPages ? 'disabled' : ''
                  }`}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-semibold">Kosong</h2>
            </div>
          )}
        </div>
      </main>
    </motion.div>
  );
};


export default BlogContent;