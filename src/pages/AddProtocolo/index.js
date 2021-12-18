import styles from './styles.module.css';

import { Header } from '../../components/Header';
import { Title } from '../../components/Title';
import { Subtitle } from '../../components/Subtitle';
import { ButtonLink } from '../../components/ButtonLink';

export function AddProtocolo(){
  return(
    <>
    <Header />
      <div className={styles.container}>
        <main className={styles.content}>
          <div className={styles.contentLeft}>
            <Title titlePage="Novo Protocolo"/>
            <Subtitle infoAbout="Informações Adicionais" />
          </div>
          <div className="contentRight">
            <ButtonLink name="Voltar" link="/home" />
            <ButtonLink name="Inserir" link="/home" />
          </div>
        </main>
      </div>
    </>
  )
}