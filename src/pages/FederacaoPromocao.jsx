import NavbarReal from "../components/NavbarReal";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import React from 'react';
import Footer from "../components/Footer";
import { items } from "../components/CarrosselAlimentos";
import { federacaoWarp } from "../components/Alimentos";
import { useEffect } from "react";
import Carrinho from "../components/Carrinho";

function FederacaoPromocao()
{

    const handleDragStart = (e) => e.preventDefault();

    const responsive = {
        0: { items: 3 },
        568: { items: 4 },
        1024: { items: 5 },
    };

    function trocaBotao()
    {
        if (document.getElementById('federacao') != null)
        {
            document.getElementById('federacao').style.backgroundColor='#C8102E';
            document.getElementById('federacao').style.color='white';
            document.getElementById('federacao').style.fontWeight='bold';
            document.getElementById('federacao').style.borderColor='#C8102E';
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
        trocaBotao();
    });

    return(
        <div className="telaPadrao fundoPizzaHut p-0 flex flex-col overflow-hidden items-center w-full">
            <NavbarReal></NavbarReal>
            <div className="flex flex-col items-center w-7/12 mt-6 mb-12">
                <div className="w-full flex flex-col items-center">
                    <div className="w-full">
                        <AliceCarousel
                            mouseTracking 
                            items={items} 
                            controlsStrategy="alternate"
                            disableButtonsControls
                            disableDotsControls
                            responsive={responsive}
                            autoWidth
                            className=""
                        />
                    </div>
                    <div className="w-full mt-6 flex flex-wrap gap-y-5">
                        {federacaoWarp.map((combo) =>
                            <div className="w-4/12 drop-shadow-md px-2" key={combo.id}>
                                <div className="w-full pb-3 px-3 bg-white rounded-lg">
                                    <div className="flex py-2 justify-start">
                                        <div className="w-7/12 text-left pe-5">
                                            <p className="font-medium text-lg reticencias whitespace-nowrap">{combo.nome}</p>
                                            <p className="font-base text-sm mb-5 reticencias h-[4.9rem]">{combo.descricao}</p>
                                            <p className="text-sm">A partir de</p>
                                            <p className="font-medium">{combo.valor} Créditos</p>
                                        </div>
                                        <div className="w-6/12 flex items-center justify-center">
                                            <div className="border w-full border-gray-400 flex justify-center items-center imagemCardPizza rounded-full overflow-hidden">
                                                <img src={combo.imagem} className="w-[15rem]"></img>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="w-full"></hr>
                                    <div className="flex justify-end pt-3">
                                        <button type="button" onClick={(e) => pegarItem(combo.nome,combo.valor,combo.imagem)} className="border border-black bg-white text-black px-3 py-1 rounded-full">Adicionar ao carrinho</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default FederacaoPromocao