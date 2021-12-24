import styles from './styles.module.css';

export function ButtonSubmit({ name, link }){
  return(
    <a className={styles.buttonLink} href={ link }>
      { name }
    </a>
  )
}