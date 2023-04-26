import React from "react";
import Card from "../UI/Card";
import styles from './Home.module.css'
export default function Home(props){
    return(
    <Card className={styles.message}>
        <div>{props.item.map((items) => {
            return <h2 key={Math.random().toString()}>WELCOME!!! <i><span><h1>{items.email}</h1></span></i></h2>
        })}</div>
    </Card>
    )
}