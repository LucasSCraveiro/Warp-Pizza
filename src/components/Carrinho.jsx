var Carrinho = (function()
{
    
    var adicionarAoCarrinho = function(item)
    {
        if (localStorage.getItem("ItemsCarrinho") == null)
        {
            localStorage.setItem("ItemsCarrinho", null);
            localStorage.setItem("ValorCarrinho", 0);
            localStorage.setItem("ItemAtual", 0);
        }
        console.log(item);
        var itemAtual = localStorage.getItem("ItemAtual");
        var pedido = {"Numero": parseFloat(itemAtual)+1, "Nome": item.nome, "Valor" : item.valor, "Imagem": item.imagem};
        console.log(pedido);
        if (localStorage.getItem("ItemsCarrinho") == null)
        {
            // localStorage.setItem("ItemsCarrinho");
        }
        var carrinho = JSON.parse(localStorage.getItem("ItemsCarrinho"));
        console.log(carrinho);
        console.log(itemAtual);
        if (itemAtual != 0)
        {
            console.log(itemAtual);
            carrinho[itemAtual] = pedido;
            console.log(carrinho);
            // carrinho.push(pedido);
            console.log("entrando diferente de 1");
        }
        else
        {
            console.log(pedido);
            carrinho = {0: {"Numero": parseFloat(itemAtual)+1, "Nome": item.nome, "Valor" : item.valor, "Imagem": item.imagem}};
            console.log(carrinho);
        }
        localStorage.setItem("ItemsCarrinho", JSON.stringify(carrinho));
        var valorCarrinho = parseFloat(localStorage.getItem("ValorCarrinho"));
        console.log(valorCarrinho)
        valorCarrinho = Math.fround(valorCarrinho + parseFloat(item.valor)).toFixed(2);
        localStorage.setItem("ValorCarrinho", valorCarrinho);
        itemAtual = parseFloat(itemAtual) + 1;
        localStorage.setItem("ItemAtual", itemAtual);
    }

    var pegarCarrinho = function()
    {
        return {
                    "ItemsCarrinho": localStorage.getItem("ItemAtual"),
                    "ValorCarrinho": localStorage.getItem("ValorCarrinho"),
                }
    }

    var resetarCarrinho = function()
    {
        localStorage.setItem("ItemsCarrinho", null);
        localStorage.setItem("ValorCarrinho", 0);
        localStorage.setItem("ItemAtual", 0);
    }

    return {adicionarAoCarrinho: adicionarAoCarrinho, pegarCarrinho: pegarCarrinho, resetarCarrinho: resetarCarrinho}

})();

export default Carrinho;