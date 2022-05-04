import React from 'react'
import styles from './CommentCard.module.css'


export default function CommentCard({picture, title, message, firstName, lastName}) {
  
  
  return (
  
 <div className={styles.commentCard}>
    <img className={styles.picture} src={picture} alt={firstName} />
    <div className={styles.contentUser}>
    <p className={styles.title}>{title}</p>
    <p className={styles.firstName}>{firstName}</p>
    <p className={styles.lastName}>{lastName}</p>
    </div>
  
    <p className={styles.message}>{message}</p>

 </div>
  )
}

