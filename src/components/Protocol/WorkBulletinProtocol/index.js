import styles from './styles.module.css'

export function WorkBulletinProtocol({ handleSubmit }){
  return(
    <>
      <h2 className={styles.nameSession}>Boletim Diário da Obra</h2>
      <div className={styles.container}>
        <div className={styles.firstColumn}>
          <div>
            <label htmlFor="protocolo">Protocolo: </label><br />
            <input type="text" name="protocolo" onChange={ handleSubmit } />
          </div>
          <div>
            <label htmlFor="protocolocopel">Protocolo Copel: </label><br />
            <input type="text" name="protocolocopel" onChange={ handleSubmit } />
          </div>
        </div>
        <div className={styles.secondColumn}>
          <div>
            <label htmlFor="numerodoprojeto">N do Projeto: </label><br />
            <input type="text" name="numerodoprojeto" onChange={ handleSubmit } />
          </div>
          <div>
            <label htmlFor="escopodaobra">Escopo da Obra: </label><br />
            <input type="text" name="escopodaobra" onChange={ handleSubmit } />
          </div>
        </div>
        <div className={styles.thirdColumn}>
          <div>
            <label htmlFor="data">Data: </label><br />
            <input type="text" name="data" onChange={ handleSubmit } />
          </div>
          <div>
            <label htmlFor="local">Local: </label><br />
            <input type="text" name="local" onChange={ handleSubmit } />
          </div>
        </div>
        <div className={styles.fourthColumn}>
          <div>
            <label htmlFor="status">Status: </label><br />
            <input type="text" name="status" placeholder="Aberta" disabled />
          </div>
          <div>
            <label htmlFor="levantamento">Levantamento: </label><br />
            <input type="text" name="levantamento" placeholder="Pendente" disabled />
          </div>
        </div>
      </div>
    </>
  )
}