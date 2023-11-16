import { useRef } from "react";

function Modal(valor)
{

    const objetoModal = useRef(null);

    function ativarModal()
    {
        // document.getElementById("modal").style.display = "flex";
        objetoModal.style.color = "blue";
    }
    function desativarModal()
    {
        // document.getElementById("modal").style.display = "none";
        objetoModal.style.color = "red";

    }
    
    return(
        <div id="modal" ref={objetoModal} className="z-10 hidden fixed left-0 top-0 telaPadrao bg-black opacity-5 justify-center items-center">
            <div className="bg-white rounded-lg w-3/12 h-2/6">
                <p className="font-normal text-xl"></p>
                <button onClick={desativarModal()} className="w-3/12 h-1/6 bg-blue-950 text-white font-semibold">Fechar</button>
            </div>
        </div>
    )
}

export default Modal