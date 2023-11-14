function Navbar(){
    return(
            <div className="navbarInicio drop-shadow-lg flex flex-row h-[5rem] md:px-[26rem] px-[0rem] w-full justify-between sticky">
                <div className="w-3/12 flex items-center overflow-hidden ms-4 justify-center slide-in-blurred-left">
                    <a href="/">
                        <img src="src/assets/images/warpSlicePizzaria3.png" className="w-10/12"></img>
                    </a>
                </div>
                <div className="flex justify-center items-center w-7/12 md:w-3/12">
                    <a href="/login" className="linkAltura w-5/12">
                        <button className="columns-[5rem] font-bold">Entrar</button>
                    </a>
                    <a href="/cadastro" className="linkAltura w-7/12">
                        <button className="bg-black py-[0.30rem] px-3 rounded-[5rem] text-white font-bold">Criar Conta</button>
                    </a>
                </div>
            </div>
    )

}

export default Navbar