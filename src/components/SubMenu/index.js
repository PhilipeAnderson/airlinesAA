import styles from './styles.module.css';

export function SubMenu(){
  return(
    <nav className={styles.submenu}>
      <ul>
        <li><a href="/">Data</a></li>
        <li><a href="/">Prioridade</a></li>
        <li><a href="/">Abertas</a></li>
      </ul>
    </nav>
  )
}