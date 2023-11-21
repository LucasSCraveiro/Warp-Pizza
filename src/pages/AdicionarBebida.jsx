import Navbar from "../components/Navbar";
import { useEffect, useState, React } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

function AdicionarBebida(){

    const [nomeBebida, setNomeBebida] = useState("");
    const [descricaoBebida, setDescricaoBebida] = useState("");
    const [valorBebida, setValorBebida] = useState("");
    const [imagemBebida, setImagemBebida] = useState("src/assets/images/bebidas/agua.png");

    const cadastrarBebida = async (e) => {
        e.preventDefault();

        const title = "";
        const body = {"NomeBebida":nomeBebida,"DescricaoBebida":descricaoBebida,"ValorBebida":valorBebida,"ImagemBebida":imagemBebida};
        const post = {title, body};
        try
        {
            const resposta = await axios.post('http://localhost/Warp-Pizza/ApiWarpPizza/cadastrarBebida', {body : body},{headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}});
            alert(resposta.data);
        }
        catch (error)
        {
            console.log(error);
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
            <div className="w-full flex flex-row justify-center items-center h-full bg-[#f8f2f4]">
                <div className="w-3/12 drop-shadow-md px-2">
                    <div className="w-11/12 pb-3 px-3 bg-white rounded-lg h-[15rem]">
                        <form onSubmit={(e) => cadastrarBebida(e)}>
                            <div className="flex py-2 justify-start">
                                <div className="w-7/12 text-left pe-5">
                                    <p className="font-medium text-lg reticencias"><input placeholder="Nome da Bebida" onChange={(e) => (setNomeBebida(e.target.value))}></input></p>
                                    <p className="font-base text-sm mb-5 reticencias h-[3.8rem]"><input placeholder="Descrição da Bebida" onChange={(e) => (setDescricaoBebida(e.target.value))}></input></p>
                                    <p className="text-sm">A partir de</p>
                                    <p className="font-medium">Créditos <input placeholder="Valor da Bebida" type="number" step={0.01} className="w-7/12" onChange={(e) => (setValorBebida(e.target.value))}></input></p>
                                </div>
                                <div className="w-5/12 flex justify-center items-center">
                                    <div className=" border border-gray-400 rounded-lg flex justify-center items-center imagemCardPizza shadow-inner h-[9rem] w-[9rem]">
                                        <button>Imagem Padrão</button>
                                    </div>
                                </div>
                            </div>
                            <hr className="w-full"></hr>
                            <div className="flex justify-evenly pt-3">
                                <a href="/menuFuncionario">
                                    <button type="button" className="border border-black bg-white text-black px-3 py-1 rounded-full">Cancelar</button>
                                </a>
                                    <button type="submit" className="border border-black bg-white text-black px-3 py-1 rounded-full">Adicionar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdicionarBebida