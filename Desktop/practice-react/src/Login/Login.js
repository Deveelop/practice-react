import React,{useRef} from "react";
import styles from './Login.module.css'
import Card from "../UI/Card";
import Button from "../UI/Button";
export default function Login(props){
   const emailInput = useRef();
   const passwordInput = useRef();

   const submitHander = (e) => {
    e.preventDefault();
    const enteredEmail = emailInput.current.value;
    const passwordEmail = passwordInput.current.value;
    props.onSubmitter(enteredEmail, passwordEmail);
    emailInput.current.value = ''
    passwordInput.current.value = ''
   }
    return(
       
        <Card>
            <form action="/Home.js" method="GET" onSubmit={submitHander}>
                <div className={styles.form}>
                <label>E-mail</label>
                <input ref={emailInput} type='text' /> <br/>
                <label>Password</label>
                <input ref={passwordInput} type='text' /> <br/>
                <Button type='button' onClick={props.onHandle} className={styles.button}>Login</Button>
               </div>
               </form>
        </Card>
    )
}