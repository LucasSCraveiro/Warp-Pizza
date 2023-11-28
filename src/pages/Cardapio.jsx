import Footer from "../components/Footer";
import React from 'react';
import NavbarReal from "../components/NavbarReal";
import { useState, useEffect } from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import UsuarioSalvo from "../components/UsuarioSalvo";
import Carrinho from "../components/Carrinho";

function Cardapio()
{

    const [pizzas2, setPizzas] = useState([]);
    const [entradas, setEntradas] = useState([]);
    const [bebidas, setBebidas] = useState([]);

    function data() {
        fetch('http://localhost/Warp-Pizza/ApiWarpPizza/pizzasMenu')
        .then((response) => response.json())
        .then((json) => setPizzas(json))

        fetch('http://localhost/Warp-Pizza/ApiWarpPizza/entradasMenu')
        .then((response) => response.json())
        .then((json) => setEntradas(json))

        fetch('http://localhost/Warp-Pizza/ApiWarpPizza/bebidasMenu')
        .then((response) => response.json())
        .then((json) => setBebidas(json))
    }

    function verificarLogin()
    {
        var funcionarioRecebido = UsuarioSalvo.buscarUsuario();
        // console.log(funcionarioRecebido);
        if (funcionarioRecebido.Usuario.Nome == null && funcionarioRecebido.Usuario.Tipo == null)
        {
            location.href="http://localhost:5173/"
        }
    }

    function pegarItem(nome, valor, imagem)
    {
        // Carrinho.resetarCarrinho();
        var item = {"nome": nome, "valor": valor, "imagem": imagem};
        Carrinho.adicionarAoCarrinho(item);
        console.log(localStorage.getItem("ValorCarrinho"));
    }

    useEffect(() => {
        verificarLogin();
        data();
    }, []);

    const [count, setCount] = useState(0)

    const handleDragStart = (e) => e.preventDefault();

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    const items = [
        <a href="/federacaoPromocao">
            <img src="src/assets/images/pizzaPadraoFederacao.png" onDragStart={handleDragStart} role="presentation" className="p-2 rounded-3xl"/>
        </a>,
        <a href="/federacaoPromocao">
            <img src="src/assets/images/pizzaForjaVulcana.png" onDragStart={handleDragStart} role="presentation" className="p-2 rounded-3xl"/>
        </a>,
        <a href="/federacaoPromocao">
            <img src="src/assets/images/pizzaZeroAbsoluto.png" onDragStart={handleDragStart} role="presentation" className="p-2 rounded-3xl"/>
        </a>,
        <a href="/federacaoPromocao">
            <img src="src/assets/images/pizzaGuerraEugenica.png" onDragStart={handleDragStart} role="presentation" className="p-2 rounded-3xl"/>
        </a>,
      ];

    return(
        <div className="telaPadrao fundoPizzaHut p-0 flex flex-col overflow-hidden items-center w-full">
            <NavbarReal></NavbarReal>
            <div className="w-full">
                <img src="src/assets/images/bannerFrotaCardapio.png"></img>
            </div>
            <div className="w-7/12 flex flex-col items-center">
                <div className="rounded-[12px] md:w-full mb-12 w-10/12 overflow-hidden mt-[2rem] border-4 border-white drop-shadow-[0_0_5px_rgba(0,0,0,0.25)]">
                    <img src="src/assets/images/bannerFrotaPizza.png" className="w-full"></img>
                </div>
                <div className="flex flex-col items-center w-full mb-8">
                    <div className="flex justify-between w-full items-center">
                        <p className="font-medium text-2xl">Dê uma olhada nas melhores ofertas do quadrante!</p>
                        <a className="text-[#C8102E] underline underline-offset-1" href="/federacaoPromocao">Ver todas</a>
                    </div>
                    <div className="w-full">
                        <AliceCarousel
                            mouseTracking 
                            items={items} 
                            controlsStrategy="alternate"
                            disableButtonsControls
                            disableDotsControls
                            responsive={responsive}
                            
                            className=""
                        />
                    </div>
                </div>
                <div className="w-full">
                    <p className="font-medium text-2xl mb-5 text-left">Dê uma bizoiada nas mais sintetizadas da Federação</p>
                    <div className="w-full mb-12">
                        <div className="w-full flex justify-between">
                            <p className="font-bold text-xl mb-4 text-left">Pizzas</p>
                            <a className="text-[#C8102E] underline underline-offset-1" href="/pizzas">Ver todas</a>
                        </div>
                        <div className="w-full mt-1 flex">
                            
                        {pizzas2.map((pizza) =>
                            <div className="w-4/12 drop-shadow-md px-2" key={pizza.cd_pizza}>
                                <div className="w-full pb-3 px-3 bg-white rounded-lg h-[15rem]">
                                    <div className="flex py-2 justify-start">
                                        <div className="w-7/12 text-left pe-5">
                                            <p className="font-medium text-lg reticencias">{pizza.nm_pizza}</p>
                                            <p className="font-base text-sm mb-5 reticencias h-[3.8rem]">{pizza.ds_pizza}</p>
                                            <p className="text-sm">A partir de</p>
                                            <p className="font-medium">{pizza.vl_pizza} Créditos</p>
                                        </div>
                                        <div className="w-5/12 flex justify-center items-center">
                                            <div className=" border border-gray-400 rounded-lg flex justify-center items-center imagemCardPizza shadow-inner h-[9rem]">
                                                <img src={pizza.img_pizza} className=""></img>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="w-full"></hr>
                                    <div className="flex justify-end pt-3">
                                        <button type="button" onClick={(e) => pegarItem(pizza.nm_pizza,pizza.vl_pizza, pizza.img_pizza)} className="border border-black bg-white text-black px-3 py-1 rounded-full">Personalizar</button>
                                    </div>
                                </div>
                            </div>
                        )}
                        </div>
                    </div>
                    <div className="w-full mb-12">
                        <div className="w-full flex justify-between">
                            <p className="font-bold text-xl mb-4 text-left">Entradas</p>
                            <a className="text-[#C8102E] underline underline-offset-1" href="/entradinhas">Ver todas</a>
                        </div>
                        <div className="w-full mt-1 flex">
                        {entradas.map((entradinha) =>
                            <div className="w-4/12 drop-shadow-md px-2" key={entradinha.cd_entrada}>
                                <div className="w-full pb-3 px-3 bg-white rounded-lg h-[15rem]">
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
                                        <button type="button" onClick={(e) => pegarItem(entradinha.nm_entrada,entradinha.vl_entrada, entradinha.img_entrada)} className="border border-black bg-white text-black px-3 py-1 rounded-full">Personalizar</button>
                                    </div>
                                </div>
                            </div>
                        )}
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="w-full flex justify-between">
                            <p className="font-bold text-xl mb-4 text-left">Bebidas</p>
                            <a className="text-[#C8102E] underline underline-offset-1" href="/bebidas">Ver todas</a>
                        </div>
                        <div className="w-full mt-1 flex">
                            {bebidas.map((bebida) =>
                                <div className="w-4/12 drop-shadow-md px-2" key={bebida.cd_bebida}>
                                    <div className="w-full pb-3 px-3 bg-white rounded-lg h-[15rem]">
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
                                            <button type="button" onClick={(e) => pegarItem(bebida.nm_bebida,bebida.vl_bebida, bebida.img_bebida)} className="border border-black bg-white text-black px-3 py-1 rounded-full">Personalizar</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <button className="border-2 border-black text-black font-bold rounded-full w-full h-[3rem] my-12 hover:outline-none focus:outline outline-">Ver cardápio de sintetizador completo</button> 
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Cardapio