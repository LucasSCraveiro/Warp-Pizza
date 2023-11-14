import Navbar from "../components/Navbar";
import { useEffect, useState, React } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

function Cadastro(){

    const [cep, setCep] = useState("");
    const [nome, setNome] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [numeroLogradouro, setNumeroLogradouro] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [UF, setUF] = useState("");

    const cadastrarUsuario = async (e) => {
        e.preventDefault();

        const title = "";
        const body = nome;
        const post = {title, body};
        try
        {
            const resposta = await axios.post('http://localhost/Warp-Pizza/ApiWarpPizza/cadastrarUsuario', {body : post});
            // console.log(title, body);
        }
        catch (error)
        {
            console.log(error);
        }
    }

    function pesquisarCEP(valor){

        var cepPronto = valor.replace(/\D/g, '');

        if (cepPronto != "")
        {
            var validador = /^[0-9]{8}$/;

            if(validador.test(cepPronto))
            {
                var script = document.createElement('script');

                script.src = 'https://viacep.com.br/ws/'+ cepPronto + '/json/?callback=colocarResultado';

                document.body.appendChild(script);
            }
            else
            {
                limparFormulario();
                alert("CEP não existe.");
            }
        }
        else
        {
            limparFormulario();
        }
    }

    function limparFormulario()
    {
        document.getElementById('endereco').value = "";
        document.getElementById('bairro').value = "";
        document.getElementById('cidade').value = "";
        document.getElementById('estado').value = "";
    }

    function colocarResultado(resultado)
    {
        if (!("erro" in resultado))
        {
            document.getElementById('endereco').value = resultado.logradouro;
            document.getElementById('bairro').value = resultado.bairro;
            document.getElementById('cidade').value = resultado.localidade;
            document.getElementById('estado').value = resultado.uf;
        }
        else
        {
            limparFormulario();
            alert("CEP não encontrado.");
        }
    }

    return(
        <div className="telaPadrao flex flex-col items-center">
            <div className="w-full flex justify-center py-2">
                <div className="w-8/12 flex flex-row">
                    <div className="w-4/12 flex items-center justify-center">
                        <a href="/" className="text-[#C8102E] font-normal">Voltar para o início</a>
                    </div>
                    <div className="w-4/12 flex justify-center slide-in-blurred-right">
                        <a href="/" className="w-6/12">
                            <img src="src/assets/images/warpSlicePizzaria3.png" className="w-full"></img>
                        </a>
                    </div>
                    <div className="w-4/12">

                    </div>
                </div>
            </div>
            <hr className="w-full"></hr>
            <div className="w-8/12 flex flex-row mt-12">
                <div className="w-6/12 flex flex-col justify-center">
                    <label className="text-[#18206B] text-3xl">Pizza Ruth, um oferecimento do departamento de desenvolvimento da Federação</label>
                    <img src="src/assets/images/brasaoFederacaoPizza.png" className="mt-10 mb-3"></img>
                    <label className="text-[#18206B] text-2xl">Powered by Memory Alpha</label>
                </div>
                <div className="w-6/12 flex flex-col items-center px-[6rem]">
                    <p className="font-medium text-2xl text-left self-start">Criar minha conta</p>
                    <div className="flex flex-col items-center pt-5 w-full">
                        <p className="text-left text-xl w-full mb-5">Boa, vamos começar!</p>
                        <form onSubmit={(e) => cadastrarUsuario(e)}>
                            <label className="text-left w-full ps-5">Qual seu nome e sobrenome?</label>
                            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} name="nome" id="nome" className="inputCadastro border w-full h-[3rem] rounded-3xl border-gray-400 mb-3 px-7" placeholder="Informe pra gente seu nome completo"/>
                            <label className="text-left w-full ps-5">Qual é o seu aniversário?</label>
                            <input type="number" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} name="aniversario" id="aniversario" className="inputCadastro border w-full h-[3rem] rounded-3xl border-gray-400 mb-3 px-7" placeholder="Informa pra gente sua data de nascimento"/>
                            <label className="text-left w-full ps-5">Qual é o seu email?</label>
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" className="inputCadastro border w-full h-[3rem] rounded-3xl border-gray-400 mb-3 px-7" placeholder="Informe um email"/>
                            <label className="text-left w-full ps-5">Digite uma senha:</label>
                            <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} name="senha" id="senha" className="inputCadastro border w-full h-[3rem] rounded-3xl border-gray-400 mb-3 px-7" placeholder="Digite uma senha"/>
                            <div className="w-full flex justify-between">
                                <div className="w-6/12 flex flex-col justify-center pe-2">
                                    <label className="text-center w-full">Endereço</label>
                                    <input value={logradouro} onChange={(e) => setLogradouro(e.target.value)} id="endereco" name="endereco" className="inputCadastro border w-full h-[3rem] rounded-3xl border-gray-400 mb-3 px-7" placeholder="Endereço"></input>
                                </div>
                                <div className="w-6/12 flex flex-col justify-center ps-2 items-end">
                                    <label className="text-center w-full">Numero</label>
                                    <input value={numeroLogradouro} onChange={(e) => setNumeroLogradouro(e.target.value)} id="numeroEndereco" name="numeroEndereco" className="inputCadastro border w-full h-[3rem] rounded-3xl border-gray-400 mb-3 px-7" placeholder="Numero"></input>
                                </div>
                            </div>
                            <div className="w-full flex justify-between">
                                <div className="w-6/12 flex flex-col justify-center pe-2">
                                    <label className="text-center w-full">Bairro</label>
                                    <input value={bairro} onChange={(e) => setBairro(e.target.value)} id="bairro" name="bairro" className="inputCadastro border w-full h-[3rem] rounded-3xl border-gray-400 mb-3 px-7" placeholder="Bairro"></input>
                                </div>
                                <div className="w-6/12 flex flex-col justify-center ps-2 items-end">
                                    <label className="text-center w-full">Cidade</label>
                                    <input value={cidade} onChange={(e) => setCidade(e.target.value)} id="cidade" name="cidade" className="inputCadastro border w-full h-[3rem] rounded-3xl border-gray-400 mb-3 px-7" placeholder="Cidade"></input>
                                </div>
                            </div>
                            <div className="w-full flex justify-between">
                                <div className="w-6/12 flex flex-col justify-center pe-2">
                                    <label className="text-center w-full">Estado</label>
                                    <select value={UF} onChange={(e) => setUF(e.target.value)} id="estado" name="estado" className="inputCadastro border w-full h-[3rem] rounded-3xl border-gray-400 mb-3 px-7">
                                        <option value="AC">Acre</option>
                                        <option value="AL">Alagoas</option>
                                        <option value="AP">Amapá</option>
                                        <option value="AM">Amazonas</option>
                                        <option value="BA">Bahia</option>
                                        <option value="CE">Ceará</option>
                                        <option value="DF">Distrito Federal</option>
                                        <option value="ES">Espírito Santo</option>
                                        <option value="GO">Goiás</option>
                                        <option value="MA">Maranhão</option>
                                        <option value="MT">Mato Grosso</option>
                                        <option value="MS">Mato Grosso do Sul</option>
                                        <option value="MG">Minas Gerais</option>
                                        <option value="PA">Pará</option>
                                        <option value="PB">Paraíba</option>
                                        <option value="PR">Paraná</option>
                                        <option value="PE">Pernambuco</option>
                                        <option value="PI">Piauí</option>
                                        <option value="RJ">Rio de Janeiro</option>
                                        <option value="RN">Rio Grande do Norte</option>
                                        <option value="RS">Rio Grande do Sul</option>
                                        <option value="RO">Rondônia</option>
                                        <option value="RR">Roraima</option>
                                        <option value="SC">Santa Catarina</option>
                                        <option value="SP">São Paulo</option>
                                        <option value="SE">Sergipe</option>
                                        <option value="TO">Tocantins</option>
                                    </select>
                                </div>
                                <div className="w-6/12 flex flex-col justify-center ps-2 items-end">
                                    <label className="text-center w-full">CEP</label>
                                    <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} id="CEP" name="CEP" className="inputCadastro border w-full h-[3rem] rounded-3xl border-gray-400 mb-3 px-7" placeholder="CEP"></input>
                                </div>
                            </div>
                        <input type="submit" value="Cadastrar" className="border w-full h-[3rem] rounded-3xl border-[#18206B] bg-[#18206B] text-white font-medium mt-3"/>
                        </form>
                        <a href="#" className="my-3">Cadastrar depois</a>
                        <div className="flex flex-row">
                        <label className="me-2">Já tem uma conta?</label>
                        <a href="#" className="underline underline-offset-1">Acesse aqui</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cadastro