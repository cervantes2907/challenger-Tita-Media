import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from './Logout.module.css'

const Logout = () => {
  const { logout } = useAuth0();
  return (
    <div className={styles.logoutContainer}>
      <img className={styles.logo} src="https://media-exp1.licdn.com/dms/image/C4E0BAQFxI8ghL3n-GA/company-logo_200_200/0/1592369149904?e=2147483647&v=beta&t=X7xFvUTVCnbigBw0PrgAeFbE3j-REEMlrJRGseHa7lk" width="80px" height="80px" alt="logo"/>
      <h1 className={styles.title}>Challenge Tita Media</h1>
      <button  className={styles.logoutUser} onClick={() => logout({ returnTo: window.location.origin })}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
