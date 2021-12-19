import { HeaderProtocol } from './HeaderProtocol'
import { OrderOfServiceProtocol } from './OrderOfServiceProtocol'
import { WorkBulletin } from './WorkBulletin'

import styles from './styles.module.css'
import { GreenLine } from '../GreenLine'

export function Protocol(){
  return(
    <div className={styles.container}>
      <HeaderProtocol />
      <OrderOfServiceProtocol />
      <GreenLine />
      <WorkBulletin />
      <div>
        <h2>Dados do Levantamento</h2>
      </div>
      <footer>
        <h2>Ocorrências Da Obra</h2>
      </footer>
    </div>
  )
}