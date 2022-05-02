import styles from './styles.module.css';

import { Header } from '../../components/Header';
import { Title } from '../../components/Title';
import { Subtitle } from '../../components/Subtitle';
import { ButtonLink } from '../../components/ButtonLink';
import { SubMenu } from '../../components/SubMenu';
import { List } from '../../components/List';

export function Home(){
  return(
    <>
    <Header />
    <div className={styles.container}>
      <main className={styles.content}>
        <div className={styles.contentLeft}>
          <Title titlePage="Protocolo Criados"/>
          <Subtitle infoAbout="Quantidade de protocolos pendentes: 02"/>
        </div>

        <div className={styles.contentRight}>
          <ButtonLink name="Add Protocolo" link="/addprotocol"/>
          <SubMenu />
        </div>
      </main>
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
    </div>
    </>
  )
}