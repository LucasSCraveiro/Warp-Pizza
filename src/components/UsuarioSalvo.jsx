import { useState } from "react"

var UsuarioSalvo = (function()
{

    var salvarUsuario = function(usuario)
    {
        localStorage.setItem("NomeUsuario",usuario.Usuario.Nome);
        localStorage.setItem("TipoUsuario",usuario.Usuario.Tipo);
        localStorage.setItem("LogradouroUsuario",usuario.Endereco.Logradouro);
        localStorage.setItem("NumeroLogradouroUsuario",usuario.Endereco.NumeroLogradouro);
        localStorage.setItem("BairroUsuario",usuario.Endereco.Bairro);
        localStorage.setItem("CidadeUsuario",usuario.Endereco.Cidade);
        localStorage.setItem("EstadoUsuario",usuario.Endereco.Estado);
        localStorage.setItem("CEPUsuario",usuario.Endereco.CEP);
    }

    var buscarUsuario = function()
    {
        return {
                    "Usuario": 
                    {
                        "Nome": localStorage.getItem("NomeUsuario"), 
                        "Tipo": localStorage.getItem("TipoUsuario")
                    }, 
                    "Endereco": 
                    {
                        "LogradouroUsuario": localStorage.getItem("LogradouroUsuario"), 
                        "NumeroLogradouroUsuario": localStorage.getItem("NumeroLogradouroUsuario"), 
                        "BairroUsuario": localStorage.getItem("BairroUsuario"), 
                        "CidadeUsuario": localStorage.getItem("CidadeUsuario"), 
                        "EstadoUsuario": localStorage.getItem("EstadoUsuario")
                    }
                };
    }

    var deslogarUsuario = function()
    {
        localStorage.removeItem("NomeUsuario");
        localStorage.removeItem("TipoUsuario");
        localStorage.removeItem("LogradouroUsuario");
        localStorage.removeItem("NumeroLogradouroUsuario");
        localStorage.removeItem("BairroUsuario");
        localStorage.removeItem("CidadeUsuario");
        localStorage.removeItem("EstadoUsuario");
        localStorage.removeItem("CEPUsuario");
        location.href= "http://localhost:5173/";
    }

    return {salvarUsuario: salvarUsuario, buscarUsuario: buscarUsuario, deslogarUsuario: deslogarUsuario};
})();


export default UsuarioSalvo