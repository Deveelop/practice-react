import React, { useState } from "react";
import styles from "./MainHeader.module.css";
import Navigation from "./Navigation";
import Home from "../Home/Home";
import Login from "../Login/Login";
const FirstHeader = () => {
  return <h2>A Typical Page</h2>;
};

export default function MainHeader(props) {
  const [logedIn, setIsLogIn] = useState(false);
  const [sub, setSub] = useState([]);
  const loginHandler = () => {
    setIsLogIn(true);
  };
  const submited = (Uemail, Upassword) => {
    setSub((prev) => {
      return [...prev, { email: Uemail, password: Upassword }];
    });
  };
  const logOutHandle = () => {
    setIsLogIn(false);
  }

  return (
    <>
      <div className={styles.container}>
        <FirstHeader />
        {logedIn && <Navigation onLogOut ={logOutHandle}/>}
      </div>
      {logedIn && <Home item={sub} />}
      {!logedIn && <Login onSubmitter={submited} onHandle={loginHandler} />}
      {/* {!logedIn ? <Login onSubmitter={submited} onHandle={loginHandler}/> : <Home item={sub}/> } */}
    </>
  );
}
