import { IoClose } from 'react-icons/io5';
import { AiOutlineInsertRowAbove } from 'react-icons/ai';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { AiFillCloseCircle } from 'react-icons/ai';
//import { AiFillCheckCircle } from 'react-icons/ai'

import styles from './styles.module.css'

export function HeaderProtocol(){

  const created = new Date()
  const formatter = Intl.DateTimeFormat('pt-BR', {
    dateStyle: "long"
  })

  return(
    <header className={styles.container}>

    <div className={styles.priorityOne}>
      <p>{ sessionStorage.name }</p>
      <p>Data de Criação: || { formatter.format(created).toString() }</p>
    </div>


    <div className={styles.priorityTwo}>

      <div className={styles.aberta}>
        <AiOutlineInsertRowAbove fontSize="21px" color="orange" />
        <p className={styles.paragraph}>Aberta</p>
        <IoClose fontSize="24px" color="red" />
      </div>

      <div className={styles.faltam}>
        <AiOutlineClockCircle fontSize="21px" color="orange" />
        <p className={styles.paragraph}>Faltam ** Dias</p>
      </div>

    </div>


    <div className={styles.priorityThree}>
      <p className={styles.paragraph}>Levantamento: </p>
      <AiFillCloseCircle fontSize="21px" color="red"/>
    </div>

  </header>
  )
}