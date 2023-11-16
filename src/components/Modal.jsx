function Modal(valor)
{
    const ativarModal = (e) =>
    {
        e.preventDefault();
        document.getElementById("modal").style.display = "flex";
    }
    const desativarModal = (e) =>
    {
        e.preventDefault();
        document.getElementById("modal").style.display = "none";
    }
    
    return(
        <div id="modal" className="z-10 hidden fixed left-0 top-0 telaPadrao bg-black opacity-5 justify-center items-center">
            <div className="bg-white rounded-lg w-3/12 h-2/6">
                <p className="font-normal text-xl">{{valor}}</p>
                <button onClick={desativarModal()} className="w-3/12 h-1/6 bg-blue-950 text-white font-semibold">Fechar</button>
            </div>
        </div>
    )
}

export default Modal