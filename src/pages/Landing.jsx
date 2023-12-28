import React, { useState } from 'react';
import * as Prime from '../config/Config';
import { useQuery } from 'react-query';
import axios from 'axios';

const ContactComp = () => {
  return <p className='m-0'>+91 7809-120-629</p>;
};

const getPosts = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return res.data;
};

const getPostById = async (postId) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  return res.data;
};

export default function Landing() {
  const { data: posts, error, isLoading } = useQuery('jsonplace', getPosts);
  const [selectedPost, setSelectedPost] = useState(null);

  const handelClick = async (postId) => {
    const post = await getPostById(postId);
    setSelectedPost(post);
  };

  if (isLoading)
    return (
      <div className='h-screen flex flex-column justify-content-center align-items-center '>
        <Prime.ProgressSpinner />
      </div>
    );
  if (error)
    return <h1 className='text-center '>An error occurred: {error.message}</h1>;

  return (
    <div className='grid'>
      <div className='col-12 md:col-3 lg:col-4'>
        <div className='p-3 border-round-sm  font-bold'>
          <div className='card'>
            <Prime.Card title='Posts'>
              <ul className='list-none p-0 m-0'>
                {posts.map((post, index) => (
                  <li key={index}>
                    <Prime.Button
                      label={post.title}
                      className='w-full'
                      onClick={() => handelClick(post.id)}
                      severity='secondary'
                      text
                    />
                  </li>
                ))}
              </ul>

              {/* <ContactComp /> */}
            </Prime.Card>
          </div>
        </div>
      </div>
      <div className='col-12 md:col-9 lg:col-8'>
        <div className='text-center p-3 border-round-sm  font-bold'>
          <Prime.Card title={selectedPost ? selectedPost.title : ''}>
            {selectedPost ? <p className='m-0'>{selectedPost.body}</p> : ''}
          </Prime.Card>
        </div>
      </div>
    </div>
  );
}
