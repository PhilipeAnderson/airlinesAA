import styles from './styles.module.css'

import { IoClose } from 'react-icons/io5';
import { AiOutlineInsertRowAbove } from 'react-icons/ai'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { AiFillCloseCircle } from 'react-icons/ai'
//import { AiFillCheckCircle } from 'react-icons/ai'


export function HeaderProtocol(){
  return(
    <header className={styles.container}>

    <div className={styles.priorityOne}>
      <p>Thomas Cordeiro</p>
      <p>Data de Criação: Outubro de 2021</p>
    </div>


    <div className={styles.priorityTwo}>

      <div className={styles.aberta}>
        <AiOutlineInsertRowAbove font-size="21px" color="orange" />
        <p className={styles.paragraph}>Aberta</p>
        <IoClose font-size="24px" color="red" />
      </div>

      <div className={styles.faltam}>
        <AiOutlineClockCircle font-size="21px" color="orange" />
        <p className={styles.paragraph}>Faltam -- Dias</p>
      </div>

    </div>


    <div className={styles.priorityThree}>
      <p className={styles.paragraph}>Levantamento: </p>
      <AiFillCloseCircle font-size="21px" color="red"/>
    </div>

  </header>
  )
}