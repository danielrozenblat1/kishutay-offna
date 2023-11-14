import styles from "./ManagersImages.module.css"
import { Fragment } from "react"
const ManagersImages=(props)=>{
    console.log(props.section)
    const lines = props.section.split("\n");
    const containerStyle = {
        height: "55vh",
        width: "75vw",
        boxShadow: "0 6px 10px rgba(0, 0, 0, 0.5)",
        backgroundImage:`${props.background}`,
        display: "flex",
        margin: "0 auto",
        borderRadius: "5%",
        marginTop: "3%",
        flexDirection: "column",
      };
      
    return (
<div style={containerStyle}>

    <div className={styles.header}>{props.header}</div>
    <div className={styles.row}>
    <img  className={styles.image} src={props.src} alt={props.src}></img>
    <section className={styles.section}> {lines.map((line, index) => (
          <Fragment key={index}>
            {line}
            <br />
          </Fragment>
        ))}</section>
   </div>

    </div>)
}
export default ManagersImages