import React, { useState } from 'react'
import './index.css';

function App() {
   

    const [Form,SetForm] = useState({
Nome : " ", 
Cargo : " ",
Matricula : " ",
CPF : " ",
RG : " ",
DataDeNascimento: " ",
Naturalidade : " ",
Nacionalidade : " ",
Altura : " ",
Peso : " ",
Raca : " ",
CorDosOlhos : " ",
EmailPessoal : " ",
EmailDeTrabalho : " ",
Telefone : " ",
Pis : " ",
TempoDeServico : " ",
Cep : " ",
Estado : " ",
Cidade : " ",
Bairro : " ",
Rua : " ",
Numero : " ",
Complemento : " ",
PontoDereferencia : " ",
Conjuge : " ",
Linkedin : " ",
GitHub : " ",
Banco : " ",
Agencia : " ",
Conta : " ",
Titular : " ",
Pix : " ",
Trello : " ",
Gitlab : " ",
Discord : " ",
DataDeAdmissao : " ",
DataDeDesligamento : " ",
EnderecoDaImagem : " ", 
CpfDoTitular : " "
    })

  const [DadosSalvos, setDadosSalvos] = useState(null);

  const handleChange = (e) => {
    SetForm ({...Form, [e.target.name]: e.target.value});
  };

  

  const handleSubmit = (e) => {
    e.preventDefault()
    setDadosSalvos(Form);

    console.log("Formulário Enviado com Sucesso",Form)

    SetForm({
      Nome : " ", 
      Cargo : " ",
      Matricula : " ",
      CPF : " ",
      RG : " ",
      DataDeNascimento: " ",
      Naturalidade : " ",
      Nacionalidade : " ",
      Altura : " ",
      Peso : " ",
      Raca : " ",
      CorDosOlhos : " ",
      EmailPessoal : " ",
      EmailDeTrabalho : " ",
      Telefone : " ",
      Pis : " ",
      TempoDeServico : " ",
      Cep : " ",
      Estado : " ",
      Cidade : " ",
      Bairro : " ",
      Rua : " ",
      Numero : " ",
      Complemento : " ",
      PontoDereferencia : " ",
      Conjuge : " ",
      Linkedin : " ",
      GitHub : " ",
      Banco : " ",
      Agencia : " ",
      Conta : " ",
      Titular : " ",
      Pix : " ",
      Trello : " ",
      Gitlab : " ",
      Discord : " ",
      DataDeAdmissao : " ",
      DataDeDesligamento : " ",
      EnderecoDaImagem : " ", 
      CpfDoTitular : " "})    
  }
  

   return ( 
    <div className='geral'>
        <form onSubmit = {handleSubmit}>
          <h2 className ='cadastroColaboradores'>Cadastro de Colaboradores</h2>

          <h3 className = 'pessoais'>Informações pessoais</h3>

          <section className = "Informações Pessoais">




          <div className='pessoais1'>

          <div className = 'Nome'>
            <label>Nome</label>
            <input className='inputNome'
            name="Nome"
            value={Form.Nome}
            onChange={handleChange}
           />
          </div>

          <div className = "CPF">
          <label>CPF</label>
          <input
            name="CPF"
            value={Form.CPF}
            onChange={handleChange}
           />
           </div>

          <div className='Matricula'>
          <label>Matrícula</label>
          <input
            name="Matricula"
            value={Form.Matricula}
            onChange={handleChange}
           />
           </div>

          <div className='Nacionalidade'>
          <label>Nacionalidade</label>
          <input
            name="Nacionalidade"
            value={Form.Nacionalidade}
            onChange={handleChange}
           />
           </div>

          <div className = 'Naturalidade'>
          <label>Naturalidade</label>
          <input
            name="Naturalidade"
            value={Form.Naturalidade}
            onChange={handleChange}
           />
           </div>

          <div className = 'Raca'>
          <label>Raça</label>
          <input
            name="Raca"
            value={Form.Raca}
            onChange={handleChange}
           />
           </div>

          <div className = 'Conjuge'>
          <label>Conjuge</label>
          <input
            name="Conjuge"
            value={Form.Conjuge}
            onChange={handleChange}
           />
           </div>


          </div>





          <div className='Cargo'>
          <label>Cargo</label>
          <input
            name="Cargo"
            value={Form.Cargo}
            onChange={handleChange}
           />
           </div>

          <div className = 'RG'>
          <label>RG</label>
          <input
            name="RG"
            value={Form.RG}
            onChange={handleChange}
           />
           </div>

          <div className = 'Peso'>
          <label>Peso</label>
          <input
            name="Peso"
            value={Form.Peso}
            onChange={handleChange}
           />
           </div>

          <div className = 'Altura'>
          <label>Altura</label>
          <input
            name="Altura"
            value={Form.Altura}
            onChange={handleChange}
           />
           </div>

          <div className = 'Nascimento'>
          <label>Data de Nascimento</label>
          <input
            name="DataDeNascimento"
            value={Form.DataDeNascimento}
            onChange={handleChange}
           />
           </div>

          <div className ='Olhos'>
           <label>Cor dos Olhos</label>
          <input
            name="CorDosOlhos"
            value={Form.CorDosOlhos}
            onChange={handleChange}
           />
           </div>

          <div className='EmailP'>
          <label>E-mail Pessoal</label>
          <input
            name="EmailPessoal"
            value={Form.EmailPessoal}
            onChange={handleChange}
           />
           </div>

          <div className='EmailT'>
          <label>E-mail De Trabalho</label>
          <input
            name="EmailDeTrabalho"
            value={Form.EmailDeTrabalho}
            onChange={handleChange}
           />
           </div>

          <div className='Telefone'>
          <label>Telefone</label>
          <input
            name="Telefone"
            value={Form.Telefone}
            onChange={handleChange}
           />
           </div>

          <div className='TempoDeServico'>
          <label>Tempo de Serviço</label>
          <input
            name="TempoDeServico"
            value={Form.TempoDeServico}
            onChange={handleChange}
           />
           </div>

           <div className='DatadeAdmissao'>
          <label>Data de Admissão</label>
          <input
            name="DataDeAdmissao"
            value={Form.DataDeAdmissao}
            onChange={handleChange}
           />
           </div>

           <div className='DatadeDesligamento'>
          <label>Data de Desligamento</label>
          <input
            name="DataDeDesligamento"
            value={Form.DataDeDesligamento}
            onChange={handleChange}
           />
           </div>

           <div className='EnderecoDaImagem'>
          <label>Imagem</label>
          <input
            name="EnderecoDaImagem"
            value={Form.EnderecoDaImagem}
            onChange={handleChange}
           />
           </div>

           <div className='Pis'>
          <label>Pis</label>
          <input
            name="Pis"
            value={Form.Pis}
            onChange={handleChange}
           />
           </div>
          </section>

          <h3>Informações Residênciais</h3>

          <section className = "Informações Residênciais">

          <div className='Cep'>
          <label>Cep</label>
          <input
            name="Cep"
            value={Form.Cep}
            onChange={handleChange}
           />
           </div>

           <div className='Cidade'>
          <label>Cidade</label>
          <input
            name="Cidade"
            value={Form.Cidade}
            onChange={handleChange}
           />
           </div>

           <div className='Bairro'>
          <label>Bairro</label>
          <input
            name="Bairro"
            value={Form.Bairro}
            onChange={handleChange}
           />
           </div>

           <div className='Rua'>
          <label>Rua</label>
          <input
            name="Rua"
            value={Form.Rua}
            onChange={handleChange}
           />
           </div>

           <div className='Numero'>
          <label>N°</label>
          <input
            name="Numero"
            value={Form.Numero}
            onChange={handleChange}
           />
           </div>

           <div className='Estado'>
          <label>Estado</label>
          <input
            name="Estado"
            value={Form.Estado}
            onChange={handleChange}
           />
           </div>

           <div className='Complemento'>
          <label>Complemento</label>
          <input
            name="Complemento"
            value={Form.Complemento}
            onChange={handleChange}
           />
           </div>

           <div className='PontoDeReferencia'>
          <label>Ponto De Referência</label>
          <input
            name="PontoDeReferencia"
            value={Form.PontoDereferencia}
            onChange={handleChange}
           />
           </div>
          </section>

          <h3>Informações Sociais</h3>
          <section className = "Informações Sociais">

          <div className='Linkedin'>
          <label>Linkedin</label>
          <input
            name="Linkedin"
            value={Form.Linkedin}
            onChange={handleChange}
           />
           </div>

           <div className='GitLab'>
          <label>GitLab</label>
          <input
            name="GitLab"
            value={Form.Gitlab}
            onChange={handleChange}
           />
           </div>

           <div className='Discord'>
          <label>Discord</label>
          <input
            name="Discord"
            value={Form.Discord}
            onChange={handleChange}
           />
           </div>

           <div className='Trello'>
          <label>Trello</label>
          <input
            name="Trello"
            value={Form.Trello}
            onChange={handleChange}
           />
           </div>
           </section>

          <h3>Informações Bancárias</h3>
          <section className = "Informações Bancárias">
          <div className='Banco'>
          <label>Banco</label>
          <input
            name="Banco"
            value={Form.Banco}
            onChange={handleChange}
           />
           </div>

           <div className='Agencia'>
          <label>Agência</label>
          <input
            name="Agencia"
            value={Form.Agencia}
            onChange={handleChange}
           />
           </div>

           <div className='Titular'>
          <label>Titular</label>
          <input
            name="Titular"
            value={Form.Titular}
            onChange={handleChange}
           />
           </div>

           <div className='CpfDoTitular'>
          <label>CPF do Titular</label>
          <input
            name="CpfDoTitular"
            value={Form.CpfDoTitular}
            onChange={handleChange}
           />
           </div>

           <div className='Pix'>
          <label>Pix</label>
          <input
            name="Pix"
            value={Form.Pix}
            onChange={handleChange}
           />
           </div>

           <div className='Conta'>
          <label>Numero da Conta</label>
          <input
            name="Conta"
            value={Form.Conta}
            onChange={handleChange}
           />
           </div>

            <button type="submit">Enviar</button>


          </section>
        </form>
      </div>
  );
}


export default App;

