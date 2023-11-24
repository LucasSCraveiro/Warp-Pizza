import Navbar from "../components/Navbar";
import { useEffect, useState, React } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import UsuarioSalvo from "../components/UsuarioSalvo";

function MenuFuncionario(){

    const [nome, setNome] = useState("");



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

    const deslogar = (e) => {
        e.preventDefault();
        UsuarioSalvo.deslogarUsuario();
    }

    useEffect(() => {
        verificarLogin();
    }, []);

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
            <div className="w-full flex flex-row justify-center items-center h-full bg-[#f8f2f4]">
                <div className="w-8/12 pb-[6rem]">
                    <p className="font-semibold text-5xl mb-[6rem]">Bem-Vindo {nome}</p>
                    <div className="flex flex-row justify-evenly w-full flex-wrap gap-y-16">
                        <div className="w-4/12 flex justify-center">
                            <a className="w-8/12 h-24 bg-white border-gray-200 shadow-xl rounded-xl flex justify-center items-center" href="/adicionarPizza">
                                <div className="w-full">
                                    <p className="font-semibold text-3xl">Adicionar Pizza</p>
                                </div>
                            </a>
                        </div>
                        <div className="w-4/12 flex justify-center">
                            <a className="w-8/12 h-24 bg-white border-gray-200 shadow-xl rounded-xl flex justify-center items-center" href="/adicionarBebida">
                                <div className="w-full">
                                    <p className="font-semibold text-3xl">Adicionar Bebida</p>
                                </div>
                            </a>
                        </div>
                        <div className="w-4/12 flex justify-center">
                            <a className="w-8/12 h-24 bg-white border-gray-200 shadow-xl rounded-xl flex justify-center items-center" href="/adicionarEntrada">
                                <div className="w-full">
                                    <p className="font-semibold text-3xl">Adicionar Entrada</p>
                                </div>
                            </a>
                        </div>
                        <div className="w-4/12 flex justify-center">
                            <a className="w-8/12 h-24 bg-white border-gray-200 shadow-xl rounded-xl flex justify-center items-center" href="/cadastrarCliente">
                                <div className="w-full">
                                    <p className="font-semibold text-3xl">Cadastrar Cliente</p>
                                </div>
                            </a>
                        </div>
                        <div className="w-4/12 flex justify-center">
                            <a className="w-8/12 h-24 bg-white border-gray-200 shadow-xl rounded-xl flex justify-center items-center" href="">
                                <div className="w-full">
                                    <p className="font-semibold text-3xl">Realizar Pedido</p>
                                </div>
                            </a>
                        </div>
                        <div className="w-4/12 flex justify-center">
                            <button onClick={(e) => deslogar(e)} className="w-8/12 h-24 bg-white border-gray-200 shadow-xl rounded-xl flex justify-center items-center" href="/">
                                <div className="w-full">
                                    <p className="font-semibold text-3xl">Sair</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuFuncionario