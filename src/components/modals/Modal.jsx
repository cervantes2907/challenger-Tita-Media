import React from "react";
import styles from "./Modal.module.css";

import { RiCloseLine } from "react-icons/ri";
import { CommentDetails } from "../commentdetails/CommentDetails";

const Modal = ({ setIsOpen, postId }) => {
  console.log(postId)
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}><strong>Lista de Comentarios</strong></h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            <CommentDetails  
            postId={postId}
            />
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
