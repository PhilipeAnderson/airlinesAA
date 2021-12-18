
import styles from './styles.module.css'
import { HeaderProtocol } from './HeaderProtocol'
import { OrderOfServiceProtocol } from './OrderOfServiceProtocol'


export function Protocol(){
  return(
    <div className={styles.container}>
      <HeaderProtocol />
      <OrderOfServiceProtocol />
      <main>
        <h2>Ordem de Serviço</h2>
      </main>
      <div>
        <h2>Boletim diário da Obra</h2>
      </div>
      <div>
        <h2>Dados do Levantamento</h2>
      </div>
      <footer>
        <h2>Ocorrências Da Obra</h2>
      </footer>
    </div>
  )
}