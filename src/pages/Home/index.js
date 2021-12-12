import styles from './styles.module.css';

import { Header } from '../../components/Header';
import { Title } from '../../components/Title';
import { Subtitle } from '../../components/Subtitle';
import { Button } from '../../components/Button';
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
          <Button name="Add Protocolo"/>
          <SubMenu />
        </div>
      </main>
      <List />
      <List />
    </div>
    </>
  )
}