import React,{useEffect, useState} from 'react'
import { RiCloseLine } from 'react-icons/ri'
import { Api } from '../../service/Api'
import { UserDetail } from '../userDetails/UserDetail'
import styles from './ModalUser.module.css' 

export  function ModalUser({ setIsOpenUser, ownerId}) {
 
  const [user, setUser] = useState("")
  useEffect(() => {
    console.log(ownerId)
    Api.get(`/user/${ownerId}`).then((response) => {
      console.log(response.data.data);
      setUser(response.data.data);
 
    });
  }, []);
  return (
    <>
    <div className={styles.darkBG} onClick={() => setIsOpenUser(false)} />
    <div className={styles.centered}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h5 className={styles.heading}><strong>user</strong></h5>
        </div>
        <button className={styles.closeBtn} onClick={() => setIsOpenUser(false)}>
          <RiCloseLine style={{ marginBottom: "-3px" }} />
        </button>
        <div className={styles.modalContent}>

          <UserDetail
           user={user}
          />
        </div>
        <div className={styles.modalActions}>
          <div className={styles.actionsContainer}>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
