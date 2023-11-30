import { useState, useEffect } from "react";
import axios from "axios";
import Carrinho from "../components/Carrinho";

function PedidoFuncionario()
{

    const [pizzasMenu, setPizzasMenu] = useState([]);
    const [bebidasMenu, setBebidasMenu] = useState([]);
    const [entradasMenu, setEntradasMenu] = useState([]);
    const [valorCarrinho, setValorCarrinho] = useState(0);
    const [quantidadeCarrinho, setQuantidadeCarrinho] = useState(0);
    const [endereco, setEndereco] = useState("");
    const [listaPronta, setListaPronta] = useState([]);

    useEffect(() => {
        pegarDados();
        pegarValorCarrinho();
        var listaSemiPronta = (JSON.parse(localStorage.getItem("ItemsCarrinho")));
        if (JSON.parse(localStorage.getItem("ItemsCarrinho")) != null)
        {
            console.log("entrando nao nulo")
            var chavesListaPronta = Object.keys(listaSemiPronta);
            setListaPronta(Object.values(listaSemiPronta));
        }
        var dadosCarrinho = Carrinho.pegarCarrinho();
        setValorCarrinho(dadosCarrinho.ValorCarrinho);
        setQuantidadeCarrinho(dadosCarrinho.ItemsCarrinho);
    }, []);

    function pegarDados()
    {
        fetch("http://localhost/Warp-Pizza/ApiWarpPizza/pizzas")
        .then((response) => response.json())
        .then((json) => setPizzasMenu(json));
        fetch("http://localhost/Warp-Pizza/ApiWarpPizza/bebidas")
        .then((response) => response.json())
        .then((json) => setBebidasMenu(json));
        fetch("http://localhost/Warp-Pizza/ApiWarpPizza/entradas")
        .then((response) => response.json())
        .then((json) => setEntradasMenu(json));
    }

    function pegarItem(nome, valor, imagem)
    {
        // Carrinho.resetarCarrinho();
        var item = {"nome": nome, "valor": valor, "imagem": imagem};
        Carrinho.adicionarAoCarrinho(item);
        console.log(localStorage.getItem("ValorCarrinho"));
        var dadosCarrinho = Carrinho.pegarCarrinho();
        setValorCarrinho(dadosCarrinho.ValorCarrinho);
        setQuantidadeCarrinho(dadosCarrinho.ItemsCarrinho);
        var listaSemiPronta = (JSON.parse(localStorage.getItem("ItemsCarrinho")));
        if (JSON.parse(localStorage.getItem("ItemsCarrinho")) != null)
        {
            console.log("entrando nao nulo")
            var chavesListaPronta = Object.keys(listaSemiPronta);
            setListaPronta(Object.values(listaSemiPronta));
        }
        var dadosCarrinho = Carrinho.pegarCarrinho();
    }

    function pegarValorCarrinho()
    {
        var dadosCarrinho = Carrinho.pegarCarrinho();
        setValorCarrinho(dadosCarrinho.ValorCarrinho);
        setQuantidadeCarrinho(dadosCarrinho.ItemsCarrinho);
    }

    const realizarPedido = async (e) => {
        e.preventDefault();
        const carrinho = Carrinho.pegarCarrinho();
        var valorTotal = carrinho.ValorCarrinho;
        const body = {'Usuario': localStorage.getItem("IDUsuario"), 'Pedido': listaPronta, 'Valor': valorTotal, 'Endereco': endereco};
        if (endereco)
        {
            try
            {
                const resposta = await axios.post('http://localhost/Warp-Pizza/ApiWarpPizza/cadastrarPedido', {body: body}, {headers: {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}});
                Carrinho.resetarCarrinho();
                alert("Pedido realizado com sucesso!");
                window.location.href = "http://localhost:5173/menuFuncionario";
            }
            catch(error)
            {
                console.log(error);
            }
        }
    }

    return(
        <div className="AlturaMinima bg-pink-200">
            <div className="w-full flex justify-center py-2 bg-white">
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
            <div className="h-full w-full pt-5 flex flex-col items-center">
                <p className="font-medium text-2xl">Selecione os items solicitados pelo cliente</p>
                <div className="w-7/12 bg-white rounded-lg drop-shadow-2xl pt-5">
                    <div>
                        <p className="font-bold text-2xl mb-5">Pizzas</p>
                        <div className="flex flex-wrap gap-y-5">
                            {pizzasMenu.map((pizza) =>
                                <div className="w-4/12 drop-shadow-md px-2" key={pizza.cd_pizza}>
                                    <div className="w-full pb-3 px-3 border border-gray-300 bg-white rounded-lg">
                                        <div className="flex py-2 justify-start">
                                            <div className="w-7/12 text-left pe-5">
                                                <p className="font-medium text-lg reticencias whitespace-nowrap">{pizza.nm_pizza}</p>
                                                <p className="font-base text-sm mb-5 reticencias h-[3.8rem]">{pizza.ds_pizza}</p>
                                                <p className="text-sm">A partir de</p>
                                                <p className="font-medium">{pizza.vl_pizza} Créditos</p>
                                            </div>
                                            <div className="w-5/12 flex justify-center items-center">
                                                <div className="border border-gray-400 rounded-lg flex justify-center items-center imagemCardPizza">
                                                <img src={pizza.img_pizza} className=""></img>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="w-full"></hr>
                                        <div className="flex justify-end pt-3">
                                            <button type="button" onClick={(e) => pegarItem(pizza.nm_pizza,pizza.vl_pizza, pizza.img_pizza)} className="border border-black bg-white text-black px-3 py-1 rounded-full">Adicionar ao carrinho</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div>
                        <p className="font-bold text-2xl my-5">Bebidas</p>
                        <div className="flex flex-wrap gap-y-5">
                            {bebidasMenu.map((bebida) =>
                                <div className="w-4/12 drop-shadow-md px-2" key={bebida.cd_bebida}>
                                    <div className="w-full pb-3 px-3 border border-gray-300 bg-white rounded-lg h-[15rem]">
                                        <div className="flex py-2 justify-start">
                                            <div className="w-7/12 text-left pe-5">
                                                <p className="font-medium text-lg reticencias">{bebida.nm_bebida}</p>
                                                <p className="font-base text-sm mb-5 reticencias h-[3.8rem]">{bebida.ds_bebida}</p>
                                                <p className="text-sm">A partir de</p>
                                                <p className="font-medium">{bebida.vl_bebida} Créditos</p>
                                            </div>
                                            <div className="w-5/12 flex justify-center items-center">
                                                <div className=" border border-gray-400 rounded-lg flex justify-center items-center imagemCardPizza shadow-inner h-[9rem]">
                                                    <img src={bebida.img_bebida} className=""></img>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="w-full"></hr>
                                        <div className="flex justify-end pt-3">
                                            <button type="button" onClick={(e) => pegarItem(bebida.nm_bebida,bebida.vl_bebida, bebida.img_bebida)} className="border border-black bg-white text-black px-3 py-1 rounded-full">Adicionar ao carrinho</button>
                                        </div>
                                    </div>
                                </div>
                            )}      
                        </div>
                    </div>
                    <div>
                        <p className="font-bold text-2xl my-5">Entradas</p>
                        <div className="flex flex-wrap gap-y-5">
                            {entradasMenu.map((entradinha) =>
                                <div className="w-4/12 drop-shadow-md px-2" key={entradinha.cd_entrada}>
                                    <div className="w-full pb-3 px-3 border border-gray-300 bg-white rounded-lg h-[15rem]">
                                        <div className="flex py-2 justify-start">
                                            <div className="w-7/12 text-left pe-5">
                                                <p className="font-medium text-lg reticencias">{entradinha.nm_entrada}</p>
                                                <p className="font-base text-sm mb-5 reticencias h-[3.8rem]">{entradinha.ds_entrada}</p>
                                                <p className="text-sm">A partir de</p>
                                                <p className="font-medium">{entradinha.vl_entrada} Créditos</p>
                                            </div>
                                            <div className="w-5/12 flex justify-center items-center">
                                                <div className=" border border-gray-400 rounded-lg flex justify-center items-center imagemCardPizza shadow-inner h-[9rem]">
                                                    <img src={entradinha.img_entrada} className=""></img>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="w-full"></hr>
                                        <div className="flex justify-end pt-3">
                                            <button type="button" onClick={(e) => pegarItem(entradinha.nm_entrada,entradinha.vl_entrada, entradinha.img_entrada)} className="border border-black bg-white text-black px-3 py-1 rounded-full">Adicionar ao carrinho</button>
                                        </div>
                                    </div>
                                </div>
                            )}                    
                        </div>
                    </div>
                    <div className="my-7">
                        <div className="flex w-full justify-evenly">
                            <p className="font-medium text-xl mb-5">{quantidadeCarrinho} Items Adicionados</p>
                            <p className="font-medium text-xl mb-5">Valor total: R${valorCarrinho}</p>
                        </div>
                        <div>
                            <input type="text" placeholder="Endereço de entrega" className="border h-[2rem] rounded-md border-black w-6/12 mb-5" onChange={(e) => setEndereco(e.target.value)}></input>
                        </div>
                        <button type="button" className="bg-[#CC223E] text-white w-3/12 h-[3rem] rounded-xl" onClick={(e) => realizarPedido(e)}>Realizar Pedido</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PedidoFuncionario