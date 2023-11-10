function NavbarReal(){
    return(
        <>
            <div className="navbarReal flex flex-row h-[5rem] md:px-[26rem] bg-white px-[0rem] w-full justify-between sticky">
                <div className="w-6/12 flex ">
                    <div className="w-4/12 flex items-center slide-in-blurred-left">
                        <a href="/">
                        <img src="src/assets/images/warpSlicePizzaria3.png" className=""></img>
                        </a>
                    </div>
                    <div className="flex w-8/12 items-center">
                        <a className="w-4/12 font-normal text-sm" href="/">Início</a>
                        <a className="w-4/12 font-normal text-sm" href="/cardapio">Cardápio</a>
                        <a className="w-4/12 font-normal text-sm">Meio a meio</a>
                    </div>
                </div>
                <div className="w-4/12 flex items-center justify-end">
                    <label className="w-6/12 flex items-center"><img src="src/assets/images/localizacaoIcone.png" className="w-[1rem] h-[1rem]"></img>Sua Casa</label>
                    <a className="w-4/12">Meu Perfil</a>
                </div>
            </div>
            <hr className="w-full"></hr>
            <div className="flex flex-row w-full bg-white justify-center py-4">
                <div className="w-7/12 flex flex-row justify-between">
                    <div className="flex flex-row items-center">
                        <p className="text-[#CC223E] font-medium">Loja:&nbsp;</p>
                        <p className="font-medium">SINTETIZADOR DE SÃO VICENTE - SP</p>
                    </div>
                    <div className="w-5/12 flex justify-between">
                        <div className="w-6/12 flex border border-gray-400 rounded-full h-[3rem] self-center justify-evenly items-center">
                            <div className="flex items-center bg-[#CC223E] text-white px-6 rounded-full py-[0.2rem]">
                                <p className="flex items-center">Delivery</p> 
                            </div>
                            <div className="flex items-center px-6 py-[0.2rem]">
                                <p>Retirada</p>
                            </div>
                        </div>
                        <div className="w-[1px] border-l border-gray-300"></div>
                        <div className="flex w-5/12 items-center">
                            <div className="w-4/12 flex items-center">
                                <img src="src/assets/images/brasaoFederacaoPizza.png" className="w-full"></img>
                            </div>
                            <div className="flex flex-col w-8/12 ps-3">
                                <p className="w-full text-left font-medium">500 Créditos</p>
                                <p className="text-left">0 itens</p>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </>
            
    )

}

export default NavbarReal