import styles from './styles.module.css';


export function Ghost({ name, email, photo }){


  console.log({name, email, photo})

  return(
    <div className={styles.ghost}>
      <p>{ name }</p>
      <p>{ email }</p>
      <p>{ photo }</p>
    </div>
  )
}