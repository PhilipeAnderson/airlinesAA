import styles from './styles.module.css';

export function Subtitle({ infoAbout }){
  return(
    <p className={styles.subtitle}>
      { infoAbout }
    </p>
  )
}


