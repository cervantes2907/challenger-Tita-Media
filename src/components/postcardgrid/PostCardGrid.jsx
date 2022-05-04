import React, { useEffect, useState } from "react";

import { Api } from "../../service/Api";
import PostCard from "../postcard/PostCard";
import styles from "./PostCardGrid.module.css";

const PostCardGrid = () => {
  
  const [posts, setPosts] = useState([]);
  

  useEffect(() => {
    console.log("postCardGrid")
 fetchPosts()
  }, []);

  const fetchPosts =() =>{
    Api.get(`/post?page=1&limit=20`).then((response) => {
      setPosts(response.data.data);

    });
  }

  return (
    <>
      <ul className={styles.postGrid}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </ul>
    </>
  );
};

export default PostCardGrid;
