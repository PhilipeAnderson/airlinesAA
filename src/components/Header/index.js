import styles from './styles.module.css';
import logoImg from '../../assets/logo.png';


export function Header({ name, photo }){

  return(
    <header className={styles.container}>
      <img className={styles.logo} src={ logoImg } alt="Logo da Empresa" />
        <div className={styles.content}>
          
          <div>
            <p>Bem Vindo</p>
            <p>{ name }</p>
          </div>

          <img className={styles.picUser} src={ photo } alt="Imagem do User" />
        </div>
    </header>
  )
}