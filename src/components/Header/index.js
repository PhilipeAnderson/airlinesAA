import styles from './styles.module.css';
import logoImg from '../../assets/logo.png';


export function Header(){

  return(
    <header className={styles.container}>

      <div className={styles.content}>
        
        <img className={styles.logo} src={ logoImg } alt="Logo da Empresa" />

        <div className={styles.welcome}>
          <div>
            <p className={styles.userData}>Bem Vindo</p>
            <p className={styles.userData}>{ sessionStorage.name }</p>
          </div>
          <div>
            <a href="/profile">
              <img className={styles.picUser} src={ sessionStorage.photo } alt="Imagem do User" />
            </a>
          </div>
        </div>

      </div>

    </header>
  )
}