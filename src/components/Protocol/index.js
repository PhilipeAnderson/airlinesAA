import { useState } from 'react';

import { HeaderProtocol } from './HeaderProtocol'
import { OrderOfServiceProtocol } from './OrderOfServiceProtocol'
import { WorkBulletinProtocol } from './WorkBulletinProtocol'
import { SurveyDataProtocol } from './SurveyDataProtocol'
import { OccurencesOfTheWorkProtocol } from './OccurrencesOfTheWorkProtocol'

import styles from './styles.module.css'
import { GreenLine } from '../GreenLine'

export function Protocol(){

  const [formValues, setFormValues] = useState({})

  function handleInputChange(e){
    const { name, value } = e.target
    setFormValues({...formValues, [name]: value})
    console.log(formValues)
  }

  return(
    <div className={styles.container}>
      <HeaderProtocol />
      <OrderOfServiceProtocol />
      <GreenLine />
      <WorkBulletinProtocol handleSubmit={ handleInputChange } />
      <GreenLine />
      <SurveyDataProtocol />
      <GreenLine />
      <OccurencesOfTheWorkProtocol handleSubmit={ handleInputChange }/>
    </div>
  )
}