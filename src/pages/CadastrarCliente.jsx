import { useEffect, useState } from "react";
import axios from "axios";
import UsuarioSalvo from "../components/UsuarioSalvo";

function CadastrarCliente()
{

    function verificarLogin()
    {
        var funcionarioRecebido = UsuarioSalvo.buscarUsuario();
        console.log(funcionarioRecebido);
        if (funcionarioRecebido.Nome != null && funcionarioRecebido.Tipo != null)
        {
            setNome(funcionarioRecebido.Nome);
        }
        else
        {
            location.href="http://localhost:5173/"
        }
    }

    useEffect(() => {
        verificarLogin();
    }, []);

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
    const [tipoUsuario, setTipoUsuario] = useState("cliente");

    const cadastrarCliente = async (e) => {
        e.preventDefault();

        const title = "Cadastro";
        const body = {'Nome': nome, 'Nascimento': dataNascimento, 'Email': email, 'Senha': senha, 'Logradouro': logradouro, 'NumeroLogradouro': numeroLogradouro, 'Bairro': bairro, 'Cidade': cidade, 'Estado': UF,  'CEP': cep, 'TipoUsuario': tipoUsuario};
        try
        {
            const resposta = await axios.post('http://localhost/Warp-Pizza/ApiWarpPizza/cadastrarUsuario', {body : body,},{headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}});
            if (resposta.data == "erro")
            {
                alert("É necessário inserir todas as informações");
            }
            else
            {
                if (resposta.data == "usuarioCadastrado")
                {
                    alert("Usuário cadastrado com sucesso!");
                }
                else
                {
                    if (resposta.data == "usuarioNaoCadastrado")
                    {
                        alert("Usuário já existente!");
                    }
                }
            }
        }
        catch (error)
        {
            console.log(error);
        }
    }

    const verCEP = (e) => {
        e.preventDefault();
        pesquisarCEP(cep)
    }

    function pesquisarCEP(valor){

        var cepPronto = valor.replace(/\D/g, '');

        if (cepPronto != "")
        {
            var validador = /^[0-9]{8}$/;

            if(validador.test(cepPronto))
            {
                // var script = document.createElement('script');

                // script.src = 'https://viacep.com.br/ws/'+ cepPronto + '/json/?callback=colocarResultado';

                // document.body.appendChild(script);

                fetch('https://viacep.com.br/ws/'+ cepPronto + '/json/')
                .then((response) => response.json())
                .then((json) => colocarResultado(json));
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
        setLogradouro("");
        document.getElementById('bairro').value = "";
        setBairro("");
        document.getElementById('cidade').value = "";
        setCidade("");
        document.getElementById('estado').value = "naoSelecionado";
        setUF(naoSelecionado);

    }

    function colocarResultado(resultado)
    {
        if (!("erro" in resultado))
        {
            document.getElementById('endereco').value = resultado.logradouro;
            setLogradouro(resultado.logradouro);
            document.getElementById('bairro').value = resultado.bairro;
            setBairro(resultado.bairro);
            document.getElementById('cidade').value = resultado.localidade;
            setCidade(resultado.localidade);
            document.getElementById('estado').value = resultado.uf;
            setUF(resultado.uf);
        }
        else
        {
            limparFormulario();
            alert("CEP não encontrado.");
        }
    }

    return(
        <div className="telaPadrao telaMinima flex flex-col items-center">
            <div className="w-full flex justify-center py-2">
                <div className="w-8/12 flex flex-row">
                    <div className="w-4/12 flex items-center justify-center">
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
            <div className="w-full flex flex-row justify-center h-full pt-[10rem] bg-[#f8f2f4]">
                <div className="w-8/12 flex flex-col items-center">
                    <div className="w-4/12 flex justify-center absolute top-[8rem]">
                        <div className="rounded-full bg-white drop-shadow-xl w-4/12 z-20">
                            <img src="src/assets/images/brasaoFederacaoPizza.png"></img>
                        </div>
                    </div>
                    <div className=" w-7/12 bg-white rounded-2xl px-[6rem] pt-[7rem] pb-[3rem] drop-shadow-2xl">
                        <form onSubmit={(e) => cadastrarCliente(e)}>
                            <div className="flex">
                                <div className="flex flex-col w-6/12 pe-2">
                                    <label className="text-center w-full">Qual é o nome do cliente?</label>
                                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} name="nome" id="nome" className="inputCadastro border w-full h-[3rem] rounded-3xl border-gray-400 mb-3 px-7" placeholder="Informe o nome do cliente"/>
                                </div>
                                <div className="flex flex-col w-6/12 ps-2">
                                    <label className="text-center w-full">Qual é o seu aniversário?</label>
                                    <input type="date" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} name="aniversario" id="aniversario" className="inputCadastro border w-full h-[3rem] rounded-3xl border-gray-400 mb-3 px-7" placeholder="Informa pra gente sua data de nascimento"/>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex flex-col w-6/12 pe-2">
                                    <label className="text-center w-full">Qual é o email do cliente?</label>
                                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" className="inputCadastro border w-full h-[3rem] rounded-3xl border-gray-400 mb-3 px-7" placeholder="Informe um email"/>
                                </div>
                                <div className="flex flex-col w-6/12 ps-2">
                                    <label className="text-center w-full">Digite uma senha:</label>
                                    <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} name="senha" id="senha" className="inputCadastro border w-full h-[3rem] rounded-3xl border-gray-400 mb-3 px-7" placeholder="Digite uma senha"/>
                                </div>
                            </div>
                            <div className="w-full flex justify-between">
                                <div className="w-6/12 flex flex-col justify-center pe-2">
                                    <label className="text-center w-full">Endereço</label>
                                    <input value={logradouro} onChange={(e) => setLogradouro(e.target.value)} id="endereco" name="endereco" className="inputCadastro border w-full h-[3rem] rounded-3xl border-gray-400 mb-3 px-7" placeholder="Endereço" disabled></input>
                                </div>
                                <div className="w-6/12 flex flex-col justify-center ps-2 items-end">
                                    <label className="text-center w-full">Numero</label>
                                    <input value={numeroLogradouro} onChange={(e) => setNumeroLogradouro(e.target.value)} id="numeroEndereco" name="numeroEndereco" className="inputCadastro border w-full h-[3rem] rounded-3xl border-gray-400 mb-3 px-7" placeholder="Numero"></input>
                                </div>
                            </div>
                            <div className="w-full flex justify-between">
                                <div className="w-6/12 flex flex-col justify-center pe-2">
                                    <label className="text-center w-full">Bairro</label>
                                    <input value={bairro} onChange={(e) => setBairro(e.target.value)} id="bairro" name="bairro" className="inputCadastro border w-full h-[3rem] rounded-3xl border-gray-400 mb-3 px-7" placeholder="Bairro" disabled></input>
                                </div>
                                <div className="w-6/12 flex flex-col justify-center ps-2 items-end">
                                    <label className="text-center w-full">Cidade</label>
                                    <input value={cidade} onChange={(e) => setCidade(e.target.value)} id="cidade" name="cidade" className="inputCadastro border w-full h-[3rem] rounded-3xl border-gray-400 mb-3 px-7" placeholder="Cidade" disabled></input>
                                </div>
                            </div>
                            <div className="w-full flex justify-between">
                                <div className="w-6/12 flex flex-col justify-center pe-2">
                                    <label className="text-center w-full">Estado</label>
                                    <select value={UF} onChange={(e) => setUF(e.target.value)} id="estado" name="estado" className="inputCadastro border w-full h-[3rem] rounded-3xl border-gray-400 mb-3 px-7" disabled>
                                        <option value="naoSelecionado" defaultValue disabled>Estado</option>
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
                                    <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} id="CEP" name="CEP" className="inputCadastro border w-full h-[3rem] rounded-3xl border-gray-400 mb-3 px-7" placeholder="CEP" onBlur={(e) => verCEP(e)}></input>
                                </div>
                            </div>
                            <div className="flex">
                                <a className="w-6/12 pe-1" href="/menuFuncionario">
                                    <button type="button" className="border w-full h-[3rem] rounded-3xl border-[#18206B] bg-[#18206B] text-white font-medium mt-3">Voltar</button>
                                </a>
                                <div className="w-6/12 ps-1">
                                    <input type="submit" value="Cadastrar" className="border w-full h-[3rem] rounded-3xl border-[#18206B] bg-[#18206B] text-white font-medium mt-3"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CadastrarCliente;