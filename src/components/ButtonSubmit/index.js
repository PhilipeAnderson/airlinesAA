import styles from './styles.module.css';

export function ButtonSubmit({ name, link }){
  return(
    <button type="submit" className={styles.buttonSubmit} href={ link }>
      { name }
    </button>
  )
}