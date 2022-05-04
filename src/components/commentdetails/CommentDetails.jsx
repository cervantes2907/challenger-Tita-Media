import React, { useState, useEffect } from "react";
import { Api } from "../../service/Api";
import CommentCard from "../commentcard/CommentCard";

export const CommentDetails = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    Api.get(`post/${postId}/comment`).then((response) => {
      setComments(response.data.data);
      console.log(response.data.data);
    });
  }, []);
  return (
    <>
      {comments.map((comment) => (
        <CommentCard
          picture={comment.owner.picture}
          title={comment.owner.title}
          firstName={comment.owner.firstName}
          lastName={comment.owner.lastName}
          message={comment.message}
        />
      ))}
    </>
  );
};
