import styles from './styles.module.css'


export function SurveyDataProtocol(){
  return(
    <>
      <h2 className={styles.nameSession}>Dados do Levantamento</h2>
      <div className={styles.container}>
        <div className={styles.firstColumn}>
          <label>
            <input type="checkbox" name="clienteacompanhouolevantamento" value="clienteacompanhouolevantamento" />
            Cliente Acompanhou o Levantamento
          </label><br />
          <label>
            <input type="checkbox" name="vizinhoapontoulocaldaligacao" value="vizinhoapontoulocaldaligacao" />
            Vizinho Apontou Local da Ligação
          </label><br />
          <label>
            <input type="checkbox" name="clienteinformoulocalportelefone" value="clienteinformoulocalportelefone" />
            Cliente Informou Local por Telefone
          </label><br />
          <label>
            <input type="checkbox" name="clientenaoatendetelefone" value="clientenaoatendetelefone" />
            Cliente Não Atende Telefone
          </label><br />
          <label>
            <input type="checkbox" name="tiradofotodolevantamento" value="tiradofotodolevantamento" />
            Tirado Foto do Levantamento
          </label><br />
          <label>
            <input type="checkbox" name="paralisacaodaobra" value="paralisacaodaobra" />
            Paralisação da Obra
          </label><br />
          <label>
            <input type="checkbox" name="localnaoencontrado" value="localnaoencontrado" />
            Local Não Encontrado
          </label><br />
          <label>
            <input type="checkbox" name="telefonenaoatendeouinexistente" value="telefonenaoatendeouinexistente" />
            Telefone Não Atende ou Inexistente
          </label><br />
        </div>
        <div className={styles.secondColumn}>
          <label>
            <input type="checkbox" name="coletadopontosdegps" value="coletadopontosdegps" />
            Coletado Pontos de GPS
          </label><br />
          <label>
            <input type="checkbox" name="necessitaautorizacaodepassagem" value="necessitaautorizacaodepassagem" />
            Necessita Autorização de Passagem
          </label><br />
          <label>
            <input type="checkbox" name="necessitaautorizacaodepodacortedearvores" value="necessitaautorizacaodepodacortedearvores" />
            Necessita Autorização de Corte/Poda de Árvores
          </label><br />
          <label>
            <input type="checkbox" name="necessitadetalhesdetravessiatorresdetransmissao" value="necessitadetalhesdetravessiatorresdetransmissao" />
            Necessita Detalhes de Travessia - Torres de Transmissão
          </label><br />
          <label>
            <input type="checkbox" name="necessitaocupacaodefaixaderdnit" value="necessitaocupacaodefaixaderdnit" />
            Necessita Ocupação de Faixa - DER/DNIT
          </label><br />
          <label>
            <input type="checkbox" name="necessitalaudoiap" value="necessitalaudoiap" />
            Necessita Laudo do IAP
          </label><br />
          <label>
            <input type="checkbox" name="clientevaialterarpedidodaobra" value="clientevaialterarpedidodaobra" />
            Cliente vai Alterar Pedido da Obra
          </label><br />
          <label>
            <input type="checkbox" name="caracteristicasdeloteamentorural" value="caracteristicasdeloteamentorural" />
            Características de Loteamento Rural
          </label><br />
        </div>
      </div>
    
    </>
  )
}