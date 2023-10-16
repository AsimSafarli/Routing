"use client"
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Post = () => {
  const [posts, setPosts] = useState([]);
  const baseURL = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    axios.get(baseURL)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div>
      {posts.map((item) => (
        <Link href={`/posts/${item.id}`} key={item.id} className='flex flex-row border border-solid border-gray-400 hover:shadow-lg w-max p-1 rounded-md'>
          <div>
            <h1>{item.title}</h1>
            <p>{item.slug}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Post;
