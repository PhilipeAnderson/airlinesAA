import { CalendarDate } from '../../Calendar';
import styles from './styles.module.css';


export function OrderOfServiceProtocol({ handleSubmit }){

  const handleDate = (date) => {
    localStorage.setItem('deadline', date)
  }


  return(
    <div className={styles.container}>
      <div className={styles.priorityOne}>
        <div>
          <label htmlFor="ucreferencia">UC Referência: </label><br />
          <input type="text" name="ucreferencia" onChange={ handleSubmit } />
        </div>
        <div>
          <label htmlFor="nomeconsumidor">Nome Consumidor: </label><br />
          <input type="text" name="nomeconsumidor" onChange={ handleSubmit } />
        </div>
        <div>
          <label htmlFor="cidade">Cidade: </label><br />
          <input type="text" name="cidade" onChange={ handleSubmit } />
        </div>
        <div>
          <label htmlFor="latitude">Latitude: </label><br />
          <input type="text" name="latitude" onChange={ handleSubmit } />
        </div>
        <div>
          <label htmlFor="longitude">Longitude: </label><br />
          <input type="text" name="longitude" onChange={ handleSubmit } />
        </div>
      </div>


      <div className={styles.priorityTwo}>
        <div className={styles.firstLine}>
          <div className={styles.firstLineColumnOne}>
            <label htmlFor="projetistacopel">Projetista Copel: </label><br />
            <input type="text" name="projetistacopel" onChange={ handleSubmit } />
          </div>
          <div className={styles.firstLineColumnTwo}>
            <label htmlFor="aes">AES: </label><br />
            <input type="text" name="aes" onChange={ handleSubmit } />
          </div>
        </div>
 
        <div className={styles.secondLine}>
          <div className={styles.secondLineColumnOne}>
            <label htmlFor="contato">Contato: </label><br />
            <input type="text" name="contato" onChange={ handleSubmit } />
          </div>
          <div className={styles.secondLineColumnTwo}>
            <label htmlFor="email">Email: </label><br />
            <input type="text" name="email" onChange={ handleSubmit } />
          </div>
        </div>

        <div className={styles.thirdLine}>
          <div className={styles.thirdLineColumnOne}>
            <label htmlFor="orcamento">Orçamento: </label><br />
            <input type="text" name="orcamento" onChange={ handleSubmit } />
          </div>
          <div className={styles.thirdLineColumnTwo}>
            <label htmlFor="telefone">Telefone: </label><br />
            <input type="text" name="telefone" onChange={ handleSubmit } />
          </div>
        </div>

        <div className={styles.forthLine}>
          <label htmlFor="descricao">Descrição: </label><br />
          <textarea name="descricao" onChange={ handleSubmit } cols="70" rows="6"></textarea>
        </div> 
      </div>
      
      <div className={styles.priorityThree}>
        <label htmlFor="calendar">Data Limite: </label><br />
        <CalendarDate getDate={ handleDate }/>
      </div>
    </div>
  )
}