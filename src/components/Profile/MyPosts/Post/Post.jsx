import React from 'react';
import classes from './Post.module.css';

function Post(props) {
  return (
    <div>
        <div className={classes.item}>
          {props.message}
        </div>
        <span>like {props.likes}</span>
    </div>
  )
}

export default Post;