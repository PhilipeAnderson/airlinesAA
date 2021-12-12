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
          <Title />
          <Subtitle />
        </div>

        <div className={styles.contentRight}>
          <Button />
          <SubMenu />
        </div>
      </main>
      <List />
      <List />
    </div>
    </>
  )
}