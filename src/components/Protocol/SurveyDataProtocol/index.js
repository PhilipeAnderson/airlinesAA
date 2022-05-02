import styles from './styles.module.css'


export function SurveyDataProtocol({ handleSubmit }){
  return(
    <>
      <h2 className={styles.nameSession}>Dados do Levantamento</h2>
      <div className={styles.container}>
        <div className={styles.firstColumn}>
          <label>
            <input type="checkbox" name="dadoslevantamento" value="clienteacompanhouolevantamento" onChange={ handleSubmit } />
            Cliente Acompanhou o Levantamento
          </label><br />
          <label>
            <input type="checkbox" name="dadoslevantamento" value="vizinhoapontoulocaldaligacao" onChange={ handleSubmit } />
            Vizinho Apontou Local da Ligação
          </label><br />
          <label>
            <input type="checkbox" name="dadoslevantamento" value="clienteinformoulocalportelefone" onChange={ handleSubmit } />
            Cliente Informou Local por Telefone
          </label><br />
          <label>
            <input type="checkbox" name="dadoslevantamento" value="clientenaoatendetelefone" onChange={ handleSubmit } />
            Cliente Não Atende Telefone
          </label><br />
          <label>
            <input type="checkbox" name="dadoslevantamento" value="tiradofotodolevantamento" onChange={ handleSubmit } />
            Tirado Foto do Levantamento
          </label><br />
          <label>
            <input type="checkbox" name="dadoslevantamento" value="paralisacaodaobra" onChange={ handleSubmit } />
            Paralisação da Obra
          </label><br />
          <label>
            <input type="checkbox" name="dadoslevantamento" value="localnaoencontrado" onChange={ handleSubmit } />
            Local Não Encontrado
          </label><br />
          <label>
            <input type="checkbox" name="dadoslevantamento" value="telefonenaoatendeouinexistente" onChange={ handleSubmit } />
            Telefone Não Atende ou Inexistente
          </label><br />
        </div>
        <div className={styles.secondColumn}>
          <label>
            <input type="checkbox" name="dadoslevantamento" value="coletadopontosdegps" onChange={ handleSubmit } />
            Coletado Pontos de GPS
          </label><br />
          <label>
            <input type="checkbox" name="dadoslevantamento" value="necessitaautorizacaodepassagem" onChange={ handleSubmit } />
            Necessita Autorização de Passagem
          </label><br />
          <label>
            <input type="checkbox" name="dadoslevantamento" value="necessitaautorizacaodepodacortedearvores" onChange={ handleSubmit } />
            Necessita Autorização de Corte/Poda de Árvores
          </label><br />
          <label>
            <input type="checkbox" name="dadoslevantamento" value="necessitadetalhesdetravessiatorresdetransmissao" onChange={ handleSubmit } />
            Necessita Detalhes de Travessia - Torres de Transmissão
          </label><br />
          <label>
            <input type="checkbox" name="dadoslevantamento" value="necessitaocupacaodefaixaderdnit" onChange={ handleSubmit } />
            Necessita Ocupação de Faixa - DER/DNIT
          </label><br />
          <label>
            <input type="checkbox" name="dadoslevantamento" value="necessitalaudoiap" onChange={ handleSubmit } />
            Necessita Laudo do IAP
          </label><br />
          <label>
            <input type="checkbox" name="dadoslevantamento" value="clientevaialterarpedidodaobra" onChange={ handleSubmit } />
            Cliente vai Alterar Pedido da Obra
          </label><br />
          <label>
            <input type="checkbox" name="dadoslevantamento" value="caracteristicasdeloteamentorural" onChange={ handleSubmit } />
            Características de Loteamento Rural
          </label><br />
        </div>
      </div>
    
    </>
  )
}