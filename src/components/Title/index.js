import styles from './styles.module.css';


export function Title({ titlePage }){
  return(
    <h1 className={styles.title}>
      { titlePage }
    </h1>
  )
}