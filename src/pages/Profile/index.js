import { Header } from "../../components/Header";
import { Title } from "../../components/Title"; 
import { ButtonLink } from '../../components/ButtonLink'
import { ButtonLogout } from '../../components/ButtonLogout'

import styles from './styles.module.css';



export function Profile(){
  return(
    <>
      <Header />
      <div className={styles.container}>
        <main className={styles.content}>
          <div className={styles.contentLeft}>
            <Title titlePage="Perfil do Usuário"/>
          </div>
          <div className="contentRight">
            <ButtonLink name="Voltar" link="/home" />
            <ButtonLogout name="Sair" link="/" logout="logout"/>
          </div>
        </main>
      </div>
    </>
  )
}