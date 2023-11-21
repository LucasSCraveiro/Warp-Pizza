import NavbarReal from "../components/NavbarReal";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import React from 'react';
import Footer from "../components/Footer";
import { items } from "../components/CarrosselAlimentos";
// import { pizzasMenu } from "../components/Alimentos";
// import { entradinhasMenu } from "../components/Alimentos";
// import { bebidasMenu } from "../components/Alimentos";
import { useEffect } from "react";
import { useState } from "react";


function Bebidas()
{

    const [bebidasMenu, setBebidasMenu] = useState([]);
    const handleDragStart = (e) => e.preventDefault();

    const responsive = {
        0: { items: 3 },
        568: { items: 4 },
        1024: { items: 5 },
    };

    function trocaBotao()
    {
        if (document.getElementById('pizzas') != null)
        {
            document.getElementById('pizzas').style.backgroundColor='#C8102E';
            document.getElementById('pizzas').style.color='white';
            document.getElementById('pizzas').style.fontWeight='bold';
            document.getElementById('pizzas').style.borderColor='#C8102E';
        }
    }

    function pegarDados()
    {
        fetch("http://localhost/Warp-Pizza/ApiWarpPizza/bebidas")
        .then((response) => response.json())
        .then((json) => setBebidasMenu(json));
    };

    useEffect(() => {
        trocaBotao();
        pegarDados();
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
                        {bebidasMenu.map((bebida) =>
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
                                        <button className="border border-black bg-white text-black px-3 py-1 rounded-full">Personalizar</button>
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

export default Bebidas