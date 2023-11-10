import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Inicio()
{

    return(
            <div className="tela p-0 flex flex-col overflow-hidden justify-center items-center">
                <Navbar/>
                <div className="w-12/12 md:w-6/12 justify-center flex">
                    <div className="bg-white rounded-[1rem] w-11/12 h-[23rem] mt-10 cardEndereco drop-shadow-2xl">
                        <div className="md:p-12 md:px-[5rem] py-5 px-[2rem] flex flex-col items-start justify-between h-full">
                            <p className="font-medium text-2xl text-justify mt-4 md:w-5/12 w-full text-black">Peça sua pizza em casa ou retire na loja mais próxima</p>
                                <p className="text-black my-3">Informe seu endereço para encontrarmos o Pizza Ruth mais próximo de você</p>
                                <input type="text" className="bg-white sombraInputLocalizacao w-full rounded-[2rem] h-12 ps-12 inputLocalizacao md:mb-10 mb-5" placeholder="Informar endereço e número"></input>
                                <div className="flex flex-row mb-2 self-center">
                                    <a href="/cardapio" className="mx-auto text-red-600 text-[14px] underline underline-offset-auto flex flex-row items-center"><img src="src/assets/images/mira.png" className="h-5 w-5 me-2"></img>Usar a minha localização atual</a>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="sintetizador md:w-6/12 w-10/12 flex justify-center mt-5 relative">
                    <img src="src/assets/images/sintetizador.png" className="md:w-6/12 w-12/12 z-0"></img>
                    <img src="src/assets/images/teletransporte.png" className="md:h-4/6 md:w-5/12 h-[11rem] w-[13rem] absolute md:top-[9rem] top-[8rem] z-20 md:left-[18rem] left-[5rem] teletransporte"></img>
                    <img src="src/assets/images/pizzaSintetizador.png" className="md:h-2/6 h-[5rem] absolute md:top-[15rem] top-[12.5rem] pizza z-10"></img>
                </div>
                {/* <img src="src/assets/images/queijoTomateCogumelo.png" className="col-span-11 my-[2rem]"></img> */}
                <div className="flex flex-col items-center w-10/12">
                    <p className="text-4xl font-medium">Temos novidades saindo do sintetizador</p>
                    <div className="flex flex-row">
                        <p>Aproveite! Insira seu endereço acima e receba a pizza na sua casa agora por meio de teletransporte!</p>
                    </div>
                </div>
                <div className="rounded-[12px] md:w-8/12 w-10/12 overflow-hidden mt-[2rem] border-4 border-white drop-shadow-[0_0_5px_rgba(0,0,0,0.25)]">
                    <img src="src/assets/images/bannerFrota.png" className="w-full"></img>
                </div>
                <p className="font-medium col-span-12 my-3">Sintetizadores fornecidos pela Federação Unida de Planetas</p>
                <Footer/>
            </div>
    )
}

export default Inicio