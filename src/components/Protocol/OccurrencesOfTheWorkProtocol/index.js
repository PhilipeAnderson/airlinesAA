import styles from './styles.module.css';


export function OccurencesOfTheWorkProtocol({ handleSubmit }){

  return(
    <>
      <h2 className={styles.nameSession}>Ocorrências Da Obra</h2>
      <div className={styles.container}>
          <textarea 
            name="ocorrenciasdaobra" 
            id="" 
            cols="30" 
            rows="10"
            onChange={ handleSubmit }
          >
          </textarea>
      </div>
    </>

  )
}