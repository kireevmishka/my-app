import React from 'react';
//import classes from './MyPosts.module.css';
import Post from './Post/Post'

function MyPosts() {
  return (
    <div>
      MyPosts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <Post message = 'post 1' likes = '15' />
      <Post message = 'post 2' likes = '20' />
      <Post message = 'post 3' likes = '25' />
    </div>
  )
}

export default MyPosts;