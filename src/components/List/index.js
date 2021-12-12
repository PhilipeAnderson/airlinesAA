import styles from './styles.module.css';
import pdfImg from '../../assets/imgPdf.png';

export function List(){
  return(
    <div className={styles.listMain}>
      <div className={styles.first}>
        <p>Protocolo: 0001</p>
        <p>N do Projeto: 1111</p>
        <p>UC de Referência: REF001</p>
      </div>
      <div className={styles.second}>
        <p>Agente: Marcelo Dias</p>
        <p>Consumidor: Neiva Freitas</p>
      </div>
      <div className={styles.third}>
        <p>Fechada</p>
        <p>Urgente</p>
        <p>Levantamento</p>
      </div>
      <div className={styles.fourth}>
        <img src={ pdfImg } alt="Imagem de um PDF" />
      </div>
    </div>
  )
}