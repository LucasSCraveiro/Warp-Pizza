import { useState } from "react"
import NavbarReal from "../components/NavbarReal"
import { useEffect } from "react";
import Carrinho from "../components/Carrinho";
import UsuarioSalvo from "../components/UsuarioSalvo";
import axios from "axios";


function CarrinhoPedido()
{
    const [listaCarrinho, setListaCarrinho] = useState([]);
    const [listaPronta, setListaPronta] = useState([]);

    useEffect(() => {
        setListaCarrinho(JSON.parse(localStorage.getItem("ItemsCarrinho")));
        console.log(JSON.parse(localStorage.getItem("ItemsCarrinho")));
        var listaSemiPronta = (JSON.parse(localStorage.getItem("ItemsCarrinho")));
        var chavesListaPronta = Object.keys(listaSemiPronta);
        var valoresListaPronta = Object.values(listaSemiPronta);
        setListaPronta(valoresListaPronta);
    },[]);

    // function verValor()
    // {
    //     var chavesLista = Object.keys(listaCarrinho);
    //     console.log(Object.values(listaCarrinho));
    //     setListaPronta(Object.values(listaCarrinho));

    // }

    const realizarCompra = async (e) => {
        e.preventDefault();
        const carrinho = Carrinho.pegarCarrinho();
        var valorTotal = carrinho.ValorCarrinho;
        if (localStorage.getItem('TipoUsuario') == "cliente")
        {
            var endereco = localStorage.getItem("EnderecoCompleto");
        }
        else
        {
            if (localStorage.getItem('TipoUsuario') == "funcionario")
            {
                var endereco = localStorage.getItem("EnderecoCliente");
            }
        }
        const body = {'Usuario': localStorage.getItem("IDUsuario"), 'Pedido': listaPronta, 'Valor': valorTotal, 'Endereco': endereco};
        try
        {
            const resposta = await axios.post('http://localhost/Warp-Pizza/ApiWarpPizza/cadastrarPedido', {body: body}, {headers: {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}});
        }
        catch(error)
        {
            console.log(error);
        }
    }

    return(
    <div className="alturaMinima">
        <NavbarReal/>
        <div className="w-full bg-[#f8f2f4]  flex justify-center">
            <div className="pt-5 pb-10 bg-white rounded-2xl drop-shadow-xl w-4/12 border border-gray-500">
                <p className="font-medium text-4xl mb-5">Carrinho</p>
                <div className="px-10">
                    {
                        listaPronta.map(item => 
                            <div className="w-full text-left">
                                <div className="border-t border-b py-2 flex items-center">
                                    <div className="w-2/12">
                                        <img src={item.Imagem}></img>
                                    </div>
                                    <div className="w-9/12 ms-5">
                                        <p className="font-medium text-xl">Item: {item.Nome}</p>
                                        <p className="font-medium text-md">Valor: R${item.Valor}</p>
                                    </div>
                                </div>
                            </div>
                            )
                    }
                </div>
                <button className="bg-[#CC223E] text-white w-3/12 h-[3rem] rounded-xl mt-10" onClick={(e) => realizarCompra(e)}>Comprar</button>
            </div>
        </div>
    </div>
    )
}

export default CarrinhoPedido