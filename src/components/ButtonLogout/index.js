//import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

export function ButtonLogout({ name, link }){

  //const navigate = useNavigate()

  // const logout = () => {
  //   sessionStorage.removeItem('name')
  //   sessionStorage.removeItem('email')
  //   sessionStorage.removeItem('photo')
  //   navigate('/')
  // }

  return(
    <a className={styles.buttonLogout} href={ link }>
      { name }
    </a>
  )
}