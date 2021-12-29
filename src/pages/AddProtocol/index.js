import styles from './styles.module.css';

import { Header } from '../../components/Header';
import { Title } from '../../components/Title';
import { ButtonLink } from '../../components/ButtonLink';
import { ButtonSubmit } from '../../components/ButtonSubmit';
import { Protocol } from '../../components/Protocol';

export function AddProtocol() {

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData)

    console.log('Dados do Inserir:', data)
    
    return data
  }

  return (
    <>
      <Header />
      <form onSubmit={ handleSubmitEvent }>
        <div className={styles.container}>
          <main className={styles.content}>
            <div className={styles.contentLeft}>
              <Title titlePage="Novo Protocolo" />
            </div>
            <div className={styles.contentRight}>
              <ButtonLink name="Voltar" link="/home" />
              <ButtonSubmit name="Inserir" link="/home" />
            </div>
          </main>
          <Protocol />
        </div>
      </form>
    </>
  )
}