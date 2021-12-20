import { useState } from 'react';
import styles from './styles.module.css';


export function OccurencesOfTheWorkProtocol({ handleSubmit }){

  const [ formData, setFormData ] = useState({})

  function submit(e){
    e.preventDefault()
    setFormData(e.target.value)
    handleSubmit(formData)
  }

  return(
    <>
      <h2 className={styles.nameSession}>Ocorrências Da Obra</h2>
      <div className={styles.container}>
        <form onSubmit={ submit }>
          <textarea 
            name="ocorrenciasdaobra" 
            id="" 
            cols="30" 
            rows="10"
            onChange={ handleSubmit }
            value={ formData.ocorrenciasdaobra || '' }
          >{formData}
          </textarea>
        </form>
      </div>
    </>

  )
}