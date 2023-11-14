import { NavLink, useLocation, useNavigate} from "react-router-dom"
import { usePathTracking } from "./PathTacingContext"
import styles from "./PerureyLehem.module.css"
const PerureyLehem=(props)=>{
    const location=useLocation()
    const navigate=useNavigate()

    const { trackedPaths } = usePathTracking();
console.log(trackedPaths)
  return (
    <div>
      <h2>Tracked Paths</h2>
      <ul>
        {trackedPaths.map((pathEntry, index) => (
          <li key={index}>
            <NavLink to={pathEntry.path}>
              {pathEntry.path} - {pathEntry.timestamp.toString()}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default PerureyLehem
    // const realPaths=path.map((pathName,index)=>{
    //     console.log(index)
    //     if(!pathName||pathName===" "){
    //         return "/"
    //     }
    //     if(index-2!==-1){
    //         return `/${path[index-1]}/${pathName}`
    //     }
    //     if(index-1!==-1){

    //         return `${path[index-1]}/${pathName}`
    //     }
    //     return `/${pathName}`
    // })
    // console.log(realPaths)
// return <>
// <div className={styles.buttomBorder}>
// <div className={styles.row}>
// {/* {realPaths.map(path=>{
//     if(path==="/"){
//         return <NavLink className={styles.path} to={path}>{` <----------- ראשי`}</NavLink>
//     }
//     if(path===location.pathname){
//         return <div className={styles.path}>   {`(אתה נמצא כאן) `} {props.pageTitle} </div>
//     }
   
//     return <NavLink  className={styles.path} to={path}>{`<--------- הקודם`}</NavLink>
// })} */}
// </div>
// </div>
// </>
// }
