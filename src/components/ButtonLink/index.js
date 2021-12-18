//import { Link } from 'react-router-dom';
import styles from './styles.module.css';


export function ButtonLink({ name, link }){
  return(
    <a className={styles.buttonLink} href={ link }>
      { name }
    </a>
  )
}