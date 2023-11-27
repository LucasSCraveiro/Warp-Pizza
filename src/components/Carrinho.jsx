var Carrinho = (function()
{
    var resetar = false;
    if (resetar)
    {
        localStorage.setItem("ItemsCarrinho", null);
        localStorage.setItem("ValorCarrinho", 0);
        localStorage.setItem("ItemAtual", 0);
    }
    var adicionarAoCarrinho = function(item)
    {
        console.log(item);
        var pedido = {"Nome": item.nome, "Valor" : item.valor};
        console.log(pedido);
        if (localStorage.getItem("ItemsCarrinho") == null)
        {
            localStorage.setItem("ItemsCarrinho");
        }
        var carrinho = JSON.parse(localStorage.getItem("ItemsCarrinho"));
        console.log(carrinho);
        var itemAtual = parseFloat(localStorage.getItem("ItemAtual"));
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
            carrinho = {1: pedido};
            console.log(carrinho);
        }
        localStorage.setItem("ItemsCarrinho", JSON.stringify(carrinho));
        var valorCarrinho = parseFloat(localStorage.getItem("ValorCarrinho"));
        console.log(valorCarrinho)
        valorCarrinho = Math.fround(valorCarrinho + parseFloat(item.valor)).toFixed(2);
        localStorage.setItem("ValorCarrinho", valorCarrinho);
        var itemAtual = parseFloat(itemAtual + 1);
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