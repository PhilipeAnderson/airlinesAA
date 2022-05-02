import styles from './styles.module.css';

export function ButtonLink({ name, link, onSubmit }){
  return(
    <a className={styles.buttonLink} href={ link } onSubmit={onSubmit}>
      { name }
    </a>
  )
}