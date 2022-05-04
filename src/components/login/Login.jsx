import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from './Login.module.css';

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (

    <>
    <div className={styles.containerLogin}>
       <img className={styles.logo} src="https://media-exp1.licdn.com/dms/image/C4E0BAQFxI8ghL3n-GA/company-logo_200_200/0/1592369149904?e=2147483647&v=beta&t=X7xFvUTVCnbigBw0PrgAeFbE3j-REEMlrJRGseHa7lk" width="80px" height="80px" alt="logo"/>
      <h1 className={styles.title}>Challenge Tita Media</h1>
      <button className={styles.buttonLogin} onClick={() => loginWithRedirect()}>Login</button>
    </div>

    <div className={styles.image}>
      <img src="https://i.ytimg.com/vi/m-QBsurlRLk/maxresdefault.jpg" height="100%" width="100%"  alt="tita media" />
    </div>
    </>

  );
};

export default Login;
