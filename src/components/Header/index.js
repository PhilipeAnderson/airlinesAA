import styles from './styles.module.css';
import logoImg from '../../assets/logo.png';


export function Header({ name, photo }){

  return(
    <header className={styles.container}>
      <img className={styles.logo} src={ logoImg } alt="Logo da Empresa" />
        <div className={styles.content}>
          
          <div>
            <p>Bem Vindo</p>
            <p>{ sessionStorage.name }</p>
          </div>
          <div>
            <a href="/profile">
              <img className={styles.picUser} src={ sessionStorage.photo } alt="Imagem do User" />
            </a>
          </div>
        </div>
    </header>
  )
}