import styles from './styles.module.css';


export function Button({ name }){
  return(
    <button className={styles.button}>
      { name }
    </button>
  )
}