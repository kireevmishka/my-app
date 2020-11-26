import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './profile.module.css';

function Profile() {
  return (
    <main className={classes.content}>
      <img src='https://dgdesign.ru/uploads/posts/2016-06/1465299708_shapka-sayta-gorod-nochyu-456521.jpg' alt=''></img>
      <MyPosts />
    </main>
  )
}

export default Profile;