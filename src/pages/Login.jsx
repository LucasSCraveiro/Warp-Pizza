import Navbar from "../components/Navbar";
import { useEffect, useState, React } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

function Login(){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const logarUsuario = async (e) => {
        e.preventDefault();

        const body = {'Email': email, 'Senha': senha}
        try
        {
            const resposta = await axios.post('http://localhost/Warp-Pizza/ApiWarpPizza/logarUsuario', {body: body},{headers: {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}});
            console.log(resposta.data);
            if (resposta.data)
            {
                decidirLogin(resposta.data);
            }
            // if (resposta.data == "true")
            // {
            //     console.log('entrando no resposta')
            //     location.href = 'http://localhost:5173/menuFuncionario';
            // }
        }
        catch (error)
        {
            console.log(error);
        }
    }

    function decidirLogin(resposta)
    {
        if (resposta == "true")
        {
            location.href = 'http://localhost:5173/menuFuncionario';
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
            <div className="w-8/12 flex flex-row mt-6">
                <div className="w-6/12 flex flex-col justify-center">
                    <label className="text-[#18206B] text-3xl">Warp Pizza, um oferecimento do departamento de desenvolvimento da Federação</label>
                    <img src="src/assets/images/brasaoFederacaoPizza.png" className="mt-10 mb-3"></img>
                    <label className="text-[#18206B] text-2xl">Powered by Memory Alpha</label>
                </div>
                <div className="w-6/12 flex flex-col items-center justify-center px-[6rem]">
                    <div className="flex flex-col items-center pt-5 w-full">
                        <p className="text-center text-xl w-full mb-5">Bem-Vindo de volta!</p>
                        <form onSubmit={(e) => logarUsuario(e)}>
                            <label className="text-left w-full">Email</label>
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" className="inputCadastro border w-full h-[3rem] rounded-3xl border-gray-400 mb-3 px-7" placeholder="Informe um email"/>
                            <label className="text-left w-full">Senha</label>
                            <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} name="senha" id="senha" className="inputCadastro border w-full h-[3rem] rounded-3xl border-gray-400 mb-3 px-7" placeholder="Digite uma senha"/>
                            <input type="submit" value="Entrar" className="border w-full h-[3rem] rounded-3xl border-[#18206B] bg-[#18206B] text-white font-medium mt-3"/>
                        </form>
                        <a href="/menuFuncionario" className="my-3">Cadastrar depois</a>
                        <div className="flex flex-row">
                        <label className="me-2">Não tem uma conta?</label>
                        <a href="/cadastro" className="underline underline-offset-1">Acesse aqui</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login