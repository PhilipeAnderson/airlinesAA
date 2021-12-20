

import { HeaderProtocol } from './HeaderProtocol'
import { OrderOfServiceProtocol } from './OrderOfServiceProtocol'
import { WorkBulletinProtocol } from './WorkBulletinProtocol'
import { SurveyDataProtocol } from './SurveyDataProtocol'
import { OccurencesOfTheWorkProtocol } from './OccurrencesOfTheWorkProtocol'

import styles from './styles.module.css'
import { GreenLine } from '../GreenLine'

export function Protocol(){



  function handleTextArea(project){
    console.log(project)
  }

  return(
    <div className={styles.container}>
      <HeaderProtocol />
      <OrderOfServiceProtocol />
      <GreenLine />
      <WorkBulletinProtocol />
      <GreenLine />
      <SurveyDataProtocol />
      <GreenLine />
      <OccurencesOfTheWorkProtocol handleSubmit={ handleTextArea }/>
    </div>
  )
}