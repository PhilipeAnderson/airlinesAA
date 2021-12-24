import { useState } from 'react';
import styles from './styles.module.css';


export function OccurencesOfTheWorkProtocol({ handleSubmit }){

  const [textArea, setTextArea] = useState({})

  const handleTextAreaChange = (e) => {
    const { target } = e;
    const { ocorrenciasdaobra } = target
    console.log( ocorrenciasdaobra )
  }

  function submit(e){
    e.preventDefault()
    const formData = new FormData(e.target.value)
    const data = Object.fromEntries(formData)
    setTextArea(e.target.value)
    // handleSubmit(data)
    // console.log(data)
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
            // onChange={ handleSubmit }
            onChange={ handleTextAreaChange }
            value={ textArea }
          >
          </textarea>
        </form>
      </div>
    </>

  )
}