import { useState } from 'react';

import { HeaderProtocol } from './HeaderProtocol';
import { OrderOfServiceProtocol } from './OrderOfServiceProtocol';
import { WorkBulletinProtocol } from './WorkBulletinProtocol';
import { SurveyDataProtocol } from './SurveyDataProtocol';
import { OccurencesOfTheWorkProtocol } from './OccurrencesOfTheWorkProtocol';

import styles from './styles.module.css';
import { GreenLine } from '../GreenLine';

export function Protocol(){

  const [formValues, setFormValues] = useState({});
  
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const isCheckbox = type === 'checkbox';

    const data = formValues[name] || {};
    if(isCheckbox) {
      data[value] = checked;
    }

    const newValue = isCheckbox ? data : value

    setFormValues({...formValues, [name]: newValue});
    console.log(formValues);
  };

  return(
    <div className={styles.container}>
      <HeaderProtocol />
      <OrderOfServiceProtocol handleSubmit={ handleInputChange }/>
      <GreenLine />
      <WorkBulletinProtocol handleSubmit={ handleInputChange } />
      <GreenLine />
      <SurveyDataProtocol handleSubmit={ handleInputChange } />
      <GreenLine />
      <OccurencesOfTheWorkProtocol handleSubmit={ handleInputChange } />
    </div>
  )
};