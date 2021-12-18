import styles from './styles.module.css';


export function OrderOfServiceProtocol(){
  return(
    <div className={styles.container}>
      <div className={styles.priorityOne}>
        <div>
          <label htmlFor="ucreferencia">UC Referência: </label><br />
          <input type="text" name="ucreferencia" />
        </div>
        <div>
          <label htmlFor="nomeconsumidor">Nome Consumidor: </label><br />
          <input type="text" name="nomeconsumidor" />
        </div>
        <div>
          <label htmlFor="cidade">Cidade: </label><br />
          <input type="text" name="cidade" />
        </div>
        <div>
          <label htmlFor="latitude">Latitude: </label><br />
          <input type="text" name="latitude" />
        </div>
        <div>
          <label htmlFor="longitude">Longitude: </label><br />
          <input type="text" name="longitude" />
        </div>
      </div>


      <div className={styles.priorityTwo}>

        <div className={styles.firstLine}>
          <div className={styles.firstLineColumnOne}>
            <label htmlFor="projetistacopel">Projetista Copel: </label><br />
            <input type="text" name="projetistacopel" />
          </div>
          <div className={styles.firstLineColumnTwo}>
            <label htmlFor="aes">AES: </label><br />
            <input type="text" name="aes" />
          </div>
        </div>
 
        <div className={styles.secondLine}>
          <div className={styles.secondLineColumnOne}>
            <label htmlFor="contato">Contato: </label><br />
            <input type="text" name="contato" />
          </div>
          <div className={styles.secondLineColumnTwo}>
            <label htmlFor="email">Email: </label><br />
            <input type="text" name="email" />
          </div>
        </div>

        <div className={styles.thirdLine}>
          <div className={styles.thirdLineColumnOne}>
            <label htmlFor="orcamento">Orçamento: </label><br />
            <input type="text" name="orcamento" />
          </div>
          <div className={styles.thirdLineColumnTwo}>
            <label htmlFor="telefone">Telefone: </label><br />
            <input type="text" name="telefone" />
          </div>
        </div>

        <div className={styles.forthLine}>
          <label htmlFor="descricao">Descrição: </label><br />
          <textarea name="descricao" id="" cols="70" rows="6"></textarea>
        </div>
        
      </div>
      <div className={styles.priorityThree}>

      </div>
    </div>
  )
}