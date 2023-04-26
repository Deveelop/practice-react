import React from "react";
import styles from './Navigation.module.css'
import Button from "../UI/Button";
export default function Navigation (props) {
return <ul>
    <li><a href="#">User</a></li>
    <li><a href="#">Admin</a></li>
    <Button className={styles.button} onClick={props.onLogOut}>Logout</Button>
       </ul> 
}