import React, { useState } from "react"
import "./index.css";

function App() {


  const [Form, SetForm] = useState({
    Nome: " ",
    Cargo: " ",
    Matricula: " ",
    CPF: " ",
    RG: " ",
    DataDeNascimento: " ",
    Naturalidade: " ",
    Nacionalidade: " ",
    Altura: " ",
    Peso: " ",
    Raca: " ",
    CorDosOlhos: " ",
    EmailPessoal: " ",
    EmailDeTrabalho: " ",
    Telefone: " ",
    Pis: " ",
    TempoDeServico: " ",
    Cep: " ",
    Estado: " ",
    Cidade: " ",
    Bairro: " ",
    Rua: " ",
    Numero: " ",
    Complemento: " ",
    PontoDeReferencia: " ",
    Conjuge: " ",
    Linkedin: " ",
    GitHub: " ",
    Banco: " ",
    Agencia: " ",
    Conta: " ",
    Titular: " ",
    Pix: " ",
    Trello: " ",
    Gitlab: " ",
    Discord: " ",
    DataDeAdmissao: " ",
    DataDeDesligamento: " ",
    EnderecoDaImagem: " ",
    CpfDoTitular: " "
  })

  const [DadosSalvos, setDadosSalvos] = useState(null);

  const handleChange = (e) => {
    SetForm({ ...Form, [e.target.name]: e.target.value });
  };



  const handleSubmit = (e) => {
    e.preventDefault()
    setDadosSalvos(Form);

    console.log("Formulário Enviado com Sucesso", Form)

    SetForm({
      Nome: '',
      Cargo: '',
      Matricula: '',
      CPF: '',
      RG: '',
      DataDeNascimento: '',
      Naturalidade: '',
      Nacionalidade: '',
      Altura: '',
      Peso: '',
      Raca: '',
      CorDosOlhos: '',
      EmailPessoal: '',
      EmailDeTrabalho: '',
      Telefone: '',
      Pis: '',
      TempoDeServico: '',
      Cep: '',
      Estado: '',
      Cidade: '',
      Bairro: '',
      Rua: '',
      Numero: '',
      Complemento: '',
      PontoDereferencia: '',
      Conjuge: '',
      Linkedin: '',
      GitHub: '',
      Banco: '',
      Agencia: '',
      Conta: '',
      Titular: '',
      Pix: '',
      Trello: '',
      GitLab: '',
      Discord: '',
      DataDeAdmissao: '',
      DataDeDesligamento: '',
      EnderecoDaImagem: '',
      CpfDoTitular: ''
    })
  }


  return (
    <div className="geral">
      <form onSubmit={handleSubmit}>
        <h2 className="cadastroColaboradores">Cadastro de Colaboradores</h2>

        <h3 className="pessoais">Informações pessoais</h3>


        <section className="Informações Pessoais">

          <div className="pessoais1">

            <div className="Nome">
              <label>Nome</label>
              <input type="text" className="inputNome"
                name="Nome"
                value={Form.Nome}
                onChange={handleChange}
              />
            </div>

            <div className="CPF">
              <label>CPF</label>
              <input type="number" className="inputCPF"
                name="CPF"
                value={Form.CPF}
                onChange={handleChange}
              />
            </div>

            <div className="Matricula">
              <label>Matrícula</label>
              <input type="number" className="inputMatricula"
                name="Matricula"
                value={Form.Matricula}
                onChange={handleChange}
              />
            </div>

            <div className="Nacionalidade">
              <label>Nacionalidade</label>
              <input className="inputNacionalidade"
                name="Nacionalidade"
                value={Form.Nacionalidade}
                onChange={handleChange}
              />
            </div>

            <div className="Naturalidade">
              <label>Naturalidade</label>
              <input className="inputNaturalidade"
                name="Naturalidade"
                value={Form.Naturalidade}
                onChange={handleChange}
              />
            </div>

            <div className="Raca">
              <label>Raça</label>
              <input className="inputRaca"
                name="Raca"
                value={Form.Raca}
                onChange={handleChange}
              />
            </div>

            <div className="Conjuge">
              <label>Conjuge</label>
              <input className="inputConjuge"
                name="Conjuge"
                value={Form.Conjuge}
                onChange={handleChange}
              />
            </div>


          </div>





          <div className="pessoais2">

            <div className="Cargo">
              <label>Cargo</label>
              <input className="inputCargo"
                name="Cargo"
                value={Form.Cargo}
                onChange={handleChange}
              />
            </div>


            <div className="RG">
              <label>RG</label>
              <input type="number" className="inputRG"
                name="RG"
                value={Form.RG}
                onChange={handleChange}
              />
            </div>

            <div className="Peso">
              <label>Peso</label>
              <input type="number" className="inputPeso"
                name="Peso"
                value={Form.Peso}
                onChange={handleChange}
              />
            </div>

            <div className="Altura">
              <label>Altura</label>
              <input type="number" className="inputAltura"
                name="Altura"
                value={Form.Altura}
                onChange={handleChange}
              />
            </div>

            <div className="Nascimento">
              <label>Data de Nascimento</label>
              <input type="date" className="inputDataDeNascimento"
                name="DataDeNascimento"
                value={Form.DataDeNascimento}
                onChange={handleChange}
              />
            </div>

            <div className="Olhos">
              <label>Cor dos Olhos</label>
              <input className="inputCorDosOlhos"
                name="CorDosOlhos"
                value={Form.CorDosOlhos}
                onChange={handleChange}
              />
            </div>


          </div>


          <div className="pessoais3">

            <div className="EmailP">
              <label>E-mail Pessoal</label>
              <input className="inputEmailPessoal"
                name="EmailPessoal"
                value={Form.EmailPessoal}
                onChange={handleChange}
              />
            </div>

            <div className="EmailT">
              <label>E-mail De Trabalho</label>
              <input className="inputEmailDeTrabalho"
                name="EmailDeTrabalho"
                value={Form.EmailDeTrabalho}
                onChange={handleChange}
              />
            </div>

            <div className="Telefone">
              <label>Telefone</label>
              <input type="number" className="inputTelefone"
                name="Telefone"
                value={Form.Telefone}
                onChange={handleChange}
              />
            </div>

            <div className="TempoDeServico">
              <label>Tempo de Serviço</label>
              <input className="inputTempoDeServico"
                name="TempoDeServico"
                value={Form.TempoDeServico}
                onChange={handleChange}
              />
            </div>

            <div className="DatadeAdmissao">
              <label>Data de Admissão</label>
              <input type="date" className="inputDataDeAdmissao"
                name="DataDeAdmissao"
                value={Form.DataDeAdmissao}
                onChange={handleChange}
              />
            </div>

            <div className="DatadeDesligamento">
              <label>Data de Desligamento</label>
              <input type="date" className="inputDataDeDesligamento"
                name="DataDeDesligamento"
                value={Form.DataDeDesligamento}
                onChange={handleChange}
              />
            </div>

            <div className="EnderecoDaImagem">
              <label>Imagem</label>
              <input className="inputEnderecoDaImagem"
                name="EnderecoDaImagem"
                value={Form.EnderecoDaImagem}
                onChange={handleChange}
              />
            </div>

            <div className="Pis">
              <label>Pis</label>
              <input type="number" className="inputPis"
                name="Pis"
                value={Form.Pis}
                onChange={handleChange}
              />
            </div>


          </div>



        </section>




        <h3>Informações Residênciais</h3>


        <section className="InformacoesResidenciais">


          <div className="endereco1">

            <div className="Cep">
              <label>Cep</label>
              <input type="number" className="inputCep"
                name="Cep"
                value={Form.Cep}
                onChange={handleChange}
              />
            </div>

            <div className="Cidade">
              <label>Cidade</label>
              <input className="inputCidade"
                name="Cidade"
                value={Form.Cidade}
                onChange={handleChange}
              />
            </div>

            <div className="Bairro">
              <label>Bairro</label>
              <input className="inputBairro"
                name="Bairro"
                value={Form.Bairro}
                onChange={handleChange}
              />
            </div>

            <div className="Rua">
              <label>Rua</label>
              <input className="inputRua"
                name="Rua"
                value={Form.Rua}
                onChange={handleChange}
              />
            </div>

            <div className="Numero">
              <label>N°</label>
              <input type="number" className="inputNumero"
                name="Numero"
                value={Form.Numero}
                onChange={handleChange}
              />
            </div>

            <div className="Estado">
              <label>Estado</label>
              <input className="inputEstado"
                name="Estado"
                value={Form.Estado}
                onChange={handleChange}
              />
            </div>


          </div>



          <div className="endereco2">

            <div className="Complemento">
              <label>Complemento</label>
              <input className="inputComplemento"
                name="Complemento"
                value={Form.Complemento}
                onChange={handleChange}
              />
            </div>

            <div className="PontoDeReferencia">
              <label>Ponto De Referência</label>
              <input className="inputPontoDeReferencia"
                name="PontoDeReferencia"
                value={Form.PontoDereferencia}
                onChange={handleChange}
              />
            </div>

          </div>
        </section>




        <h3>Informações Sociais</h3>

        <section className="Informações Sociais">

          <div className="sociais1">

            <div className="Linkedin">
              <label>Linkedin</label>
              <input className="inputLinkedin"
                name="Linkedin"
                value={Form.Linkedin}
                onChange={handleChange}
              />
            </div>

            <div className="GitLab">
              <label>GitLab</label>
              <input className="inputGitLab"
                name="GitLab"
                value={Form.GitLab}
                onChange={handleChange}
              />
            </div>

            <div className="Discord">
              <label>Discord</label>
              <input className="inputDiscord"
                name="Discord"
                value={Form.Discord}
                onChange={handleChange}
              />
            </div>

            <div className="Trello">
              <label>Trello</label>
              <input className="inputTrello"
                name="Trello"
                value={Form.Trello}
                onChange={handleChange}
              />
            </div>

          </div>

        </section>



        <h3>Informações Bancárias</h3>

        <section className="Informações Bancárias">

          <div className="banco1">

            <div className="Banco">
              <label>Banco</label>
              <input className="inputBanco"
                name="Banco"
                value={Form.Banco}
                onChange={handleChange}
              />
            </div>

            <div className="Agencia">
              <label>Agência</label>
              <input className="inputAgencia"
                name="Agencia"
                value={Form.Agencia}
                onChange={handleChange}
              />
            </div>

            <div className="Titular">
              <label>Titular</label>
              <input className="inputTitular"
                name="Titular"
                value={Form.Titular}
                onChange={handleChange}
              />
            </div>

          </div>


          <div className="CpfDoTitular">
            <label>CPF do Titular</label>
            <input type="number" className="inputCpfDoTitular"
              name="CpfDoTitular"
              value={Form.CpfDoTitular}
              onChange={handleChange}
            />
          </div>

          <div className="Pix">
            <label>Pix</label>
            <input className="inputPix"
              name="Pix"
              value={Form.Pix}
              onChange={handleChange}
            />
          </div>

          <div className="Conta">
            <label>Numero da Conta</label>
            <input className="inputConta"
              name="Conta"
              value={Form.Conta}
              onChange={handleChange}
            />
          </div>

          <button className="button" type="submit">Enviar</button>


        </section>
      </form>
    </div>
  );
}


export default App;

