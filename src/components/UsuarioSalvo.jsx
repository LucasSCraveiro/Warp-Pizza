import { useState } from "react"

var UsuarioSalvo = (function()
{

    var salvarUsuario = function(usuario)
    {
        localStorage.setItem("NomeUsuario",usuario.Nome);
        localStorage.setItem("TipoUsuario",usuario.Tipo);
    }

    var buscarUsuario = function()
    {
        return {"Nome": localStorage.getItem("NomeUsuario"), "Tipo": localStorage.getItem("TipoUsuario")};
    }

    var deslogarUsuario = function()
    {
        localStorage.removeItem("NomeUsuario");
        localStorage.removeItem("TipoUsuario");
        location.href= "http://localhost:5173/";
    }

    return {salvarUsuario: salvarUsuario, buscarUsuario: buscarUsuario, deslogarUsuario: deslogarUsuario};
})();


export default UsuarioSalvo