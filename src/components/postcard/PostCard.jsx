import React, {useState} from "react";

import Modal from "../modals/Modal";
 import {ModalUser} from "../modals/ModalUser";

import styles from "./PostCard.module.css";
const PostCard = ({ post }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenUser, setIsOpenUser] =useState(false)

  return (
    <>
      <li className={styles.postCard}>
        <img
          width={284}
          height={300}
          className={styles.image}
          src={post.image}
          alt={post.firstName}
        />
        <div className={styles.contentCard}>
          <div>
            <img
              className={styles.avatar}
              src={post.owner.picture}
              alt={post.owner.fistName}
            />
          </div>
          <div className={styles.title}> {post.title}</div>
          <div className={styles.likes}>
            <strong className={styles.likecontent}>Likes I</strong> {post.likes}
          </div>
          <div className={styles.tagsContainer}>
          <div className={styles.publisDate}> {post.publishDate}</div>
          <strong className={styles.tagsCero}> {post.tags}</strong>

          </div>
          <div className={styles.text}> {post.text}</div>
          <div className={styles.body}>
            <p>
              {`${post.owner.title}  ${post.owner.firstName}  ${post.owner.lastName}`}
            </p>
          </div>
        </div>

        <div className={styles.btnUser}>
          <div>
           <button className={styles.primaryBtn} onClick={() => setIsOpen(true)}>
            Comentarios
            </button>
            {isOpen && <Modal postId={post.id} setIsOpen={setIsOpen} /> }
          </div> 
         <div>
            <button className={styles.primaryBtn} onClick={() => setIsOpenUser(true)}>
              user
              </button>
            {isOpenUser && < ModalUser ownerId={post.owner.id} setIsOpenUser = {setIsOpenUser} />}
          </div> 
        </div>
      </li>

    </>
  );
};

export default PostCard;
