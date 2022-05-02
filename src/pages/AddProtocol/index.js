import { useState } from 'react';

import { Header } from '../../components/Header';
import { Title } from '../../components/Title';
import { ButtonLink } from '../../components/ButtonLink';
import { ButtonSubmit } from '../../components/ButtonSubmit';

// Protocol
import { HeaderProtocol } from '../../components/Protocol/HeaderProtocol';
import { OrderOfServiceProtocol } from '../../components/Protocol/OrderOfServiceProtocol';
import { WorkBulletinProtocol } from '../../components/Protocol/WorkBulletinProtocol';
import { SurveyDataProtocol } from '../../components/Protocol/SurveyDataProtocol';
import { OccurencesOfTheWorkProtocol } from '../../components/Protocol/OccurrencesOfTheWorkProtocol';
import { GreenLine } from '../../components/GreenLine';


import styles from './styles.module.css';

export function AddProtocol() {

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

  };
  
  console.log(formValues);

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    //const formData = new FormData(e.target);
    //const data = Object.fromEntries(formData)

    //console.log('Dados do Inserir:', data)
    const data = formValues
    console.log('Dados do data:', data)
    console.log('Dados do formValues:', formValues)
    
    //return formValues
  }

  return (
    <>
      <Header />
      <form onSubmit={ handleSubmitEvent }>
        <div className={styles.container}>
          <main className={styles.content}>
            <div className={styles.contentLeft}>
              <Title titlePage="Novo Protocolo" />
            </div>
            <div className={styles.contentRight}>
              <ButtonLink name="Voltar" link="/home" />
              <ButtonSubmit name="Inserir" link="/home" />
            </div>
          </main>

          {/* Protocol */}
          <div className={styles.formProtocol}>
            <HeaderProtocol />
            <OrderOfServiceProtocol handleSubmit={ handleInputChange }/>
            <GreenLine />
            <WorkBulletinProtocol handleSubmit={ handleInputChange } />
            <GreenLine />
            <SurveyDataProtocol handleSubmit={ handleInputChange } />
            <GreenLine />
            <OccurencesOfTheWorkProtocol handleSubmit={ handleInputChange } />
          </div>
        </div>
      </form>
    </>
  )
}