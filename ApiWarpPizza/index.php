<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require './vendor/autoload.php';

$app = new \Slim\App;


function padrao(Request $request, Response $response, array $args)
{
    $padrao = "Essa é a API do Pizza Warp";
    return $padrao;
}

$app->get('/','padrao');
$app->get('/pizzas','getPizzas');
$app->get('/pizzasMenu','getPizzasMenu');
$app->get('/entradas','getEntradas');
$app->get('/entradasMenu','getEntradasMenu');
$app->get('/bebidas','getBebidas');
$app->get('/bebidasMenu','getBebidasMenu');

$app->post('/cadastrarPizza','cadastrarPizza');
$app->post('/cadastrarBebida','cadastrarBebida');
$app->post('/cadastrarEntrada','cadastrarEntrada');
$app->post('/cadastrarPedido', 'cadastrarPedido');

$app->post('/cadastrarUsuario','cadastrarUsuario');
$app->post('/logarUsuario','logarUsuario');

function getConn()
{
    return new PDO('mysql:host=localhost:3306;dbname=db_warppizza',
    'root',
    '',
    array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
}

function getPizzas(Request $request, Response $response, array $args)
{
    $sql = "SELECT * FROM tb_pizza";
    $stmt = getConn()->query($sql);
    $pizzas = $stmt->fetchAll(PDO::FETCH_OBJ);
    $response->getBody()->write(json_encode($pizzas));
    return $response;
}

function getPizzasMenu(Request $request, Response $response, array $args)
{
    $sql = "SELECT * FROM tb_pizza_menu";
    $stmt = getConn()->query($sql);
    $pizzas = $stmt->fetchAll(PDO::FETCH_OBJ);
    $response->getBody()->write(json_encode($pizzas));
    return $response;
}

function getEntradas(Request $request, Response $response, array $args)
{
    $sql = "SELECT * FROM tb_entrada";
    $stmt = getConn()->query($sql);
    $entradas = $stmt->fetchAll(PDO::FETCH_OBJ);
    $response->getBody()->write(json_encode($entradas));
    return $response;
}

function getEntradasMenu(Request $request, Response $response, array $args)
{
    $sql = "SELECT * FROM tb_entrada_menu";
    $stmt = getConn()->query($sql);
    $entradas = $stmt->fetchAll(PDO::FETCH_OBJ);
    $response->getBody()->write(json_encode($entradas));
    return $response;
}

function getBebidas(Request $request, Response $response, array $args)
{
    $sql = "SELECT * FROM tb_bebida";
    $stmt = getConn()->query($sql);
    $bebidas = $stmt->fetchAll(PDO::FETCH_OBJ);
    $response->getBody()->write(json_encode($bebidas));
    return $response;
}

function getBebidasMenu(Request $request, Response $response, array $args)
{
    $sql = "SELECT * FROM tb_bebida_menu";
    $stmt = getConn()->query($sql);
    $bebidas = $stmt->fetchAll(PDO::FETCH_OBJ);
    $response->getBody()->write(json_encode($bebidas));
    return $response;
}

function cadastrarPizza(Request $request, Response $response, array $args)
{
    $formulario = $request->getParsedBody();
    $nomePizza = $formulario['body']['NomePizza'];
    $descricaoPizza = $formulario['body']['DescricaoPizza'];
    $valorPizza = $formulario['body']['ValorPizza'];
    $imagemPizza = $formulario['body']['ImagemPizza'];
    if ($nomePizza && $descricaoPizza && $valorPizza && $imagemPizza)
    {
        $sql = "INSERT INTO tb_pizza (nm_pizza, ds_pizza, vl_pizza, img_pizza) VALUES ('$nomePizza','$descricaoPizza','$valorPizza','$imagemPizza');";
        $stmt = getConn()->query($sql);
        $response->getBody()->write("Pizza cadastrada.");
    }
    else
    {
        $response->getBody()->write("Dados insuficientes!");
    }
    return $response;
}

function cadastrarBebida(Request $request, Response $response, array $args)
{
    $formulario = $request->getParsedBody();
    $nomeBebida = $formulario['body']['NomeBebida'];
    $descricaoBebida = $formulario['body']['DescricaoBebida'];
    $valorBebida = $formulario['body']['ValorBebida'];
    $imagemBebida = $formulario['body']['ImagemBebida'];
    if ($nomeBebida && $descricaoBebida && $valorBebida && $imagemBebida)
    {
        $sql = "INSERT INTO tb_bebida (nm_bebida, ds_bebida, vl_bebida, img_bebida) VALUES ('$nomeBebida','$descricaoBebida','$valorBebida','$imagemBebida');";
        $stmt = getConn()->query($sql);
        $response->getBody()->write("Bebida cadastrada.");
    }
    else
    {
        $response->getBody()->write("Dados insuficientes!");
    }
    return $response;
}

function cadastrarEntrada(Request $request, Response $response, array $args)
{
    $formulario = $request->getParsedBody();
    $nomeEntrada = $formulario['body']['NomeEntrada'];
    $descricaoEntrada = $formulario['body']['DescricaoEntrada'];
    $valorEntrada = $formulario['body']['ValorEntrada'];
    $imagemEntrada = $formulario['body']['ImagemEntrada'];
    if ($nomeEntrada && $descricaoEntrada && $valorEntrada && $imagemEntrada)
    {
        $sql = "INSERT INTO tb_entrada (nm_entrada, ds_entrada, vl_entrada, img_entrada) VALUES ('$nomeEntrada','$descricaoEntrada','$valorEntrada','$imagemEntrada');";
        $stmt = getConn()->query($sql);
        $response->getBody()->write("Entrada cadastrada.");
    }
    else
    {
        $response->getBody()->write("Dados insuficientes!");
    }
    return $response;
}

function cadastrarUsuario(Request $request, Response $response, array $args)
{
    // var_dump($request);
    // $sql = "INSERT INTO tb_usuario VALUES ()";

    $formulario = $request->getParsedBody();
    // var_dump($formulario);
    $nome = $formulario['body']['Nome'];
    $nascimento = $formulario['body']['Nascimento'];
    $email = $formulario['body']['Email'];
    $senha = $formulario['body']['Senha'];
    $logradouro = $formulario['body']['Logradouro'];
    $numeroLogradouro = $formulario['body']['NumeroLogradouro'];
    $bairro = $formulario['body']['Bairro'];
    $cidade = $formulario['body']['Cidade'];
    $estado = $formulario['body']['Estado'];
    $cep = $formulario['body']['CEP'];
    $tipoUsuario = $formulario['body']['TipoUsuario'];
    //Pesquisando se o usuário cadastrado já existe
    if ($nome && $nascimento && $email && $senha && $logradouro && $numeroLogradouro && $bairro && $cidade && $estado && $cep && $tipoUsuario)
    {
        $sql = "SELECT * FROM tb_usuario WHERE nm_email_usuario = '$email';";
        $stmt = getConn()->prepare($sql);
        $stmt->execute();
        $usuario = $stmt->fetchObject();
        if (!$usuario)
        {
            //Cadastrando usuário
            $sql = "INSERT INTO tb_usuario (nm_usuario, dt_nascimento_usuario, nm_email_usuario, nm_senha_usuario, ds_tipo_usuario) VALUES ('$nome','$nascimento','$email','$senha', '$tipoUsuario');";
            $stmt = getConn()->query($sql); // <--- Isso já roda o comando
            //Peganco id do usuário
            $sql = "SELECT cd_usuario FROM tb_usuario WHERE nm_email_usuario = '$email'";
            $stmt = getConn()->prepare($sql);
            $stmt->execute();
            $usuario = $stmt->fetchObject();
            $cd_usuario = $usuario->cd_usuario;
            //Cadastrando endereço do usuário
            $sql = "INSERT INTO tb_endereco_usuario (nm_logradouro, nm_numero_logradouro, nm_bairro, nm_cidade, sg_UF, cd_CEP, cd_usuario) VALUES ('$logradouro','$numeroLogradouro','$bairro','$cidade','$estado','$cep', '$cd_usuario');";
            $stmt = getConn()->query($sql);
            $veio = "usuarioCadastrado";
        }
        else
        {
            $veio = "usuarioNaoCadastrado";
        }
    }
    else
    {
        $veio = "erro";
    }
    return $response->withStatus(201)->withJson($veio);


    // $stmt->execute(); <--- Faz com que a inserção ocorra duas vezes
    // $arreio['teste'] = var_dump($vindo);
    // return $response->withStatus(201)->withJson($veio);
}

function logarUsuario(Request $request, Response $response, array $args)
{
    $formulario = $request->getParsedBody();
    $email = $formulario['body']['Email'];
    $senha = $formulario['body']['Senha'];
    $sql = "SELECT * FROM tb_usuario WHERE nm_email_usuario =:email AND nm_senha_usuario =:senha";
    $stmt = getConn()->prepare($sql);
    $stmt->bindParam("email",$email);
    $stmt->bindParam("senha",$senha);
    $stmt->execute();
    $usuario = $stmt->fetchObject();
    // var_dump($usuario);
    if ($usuario)
    {
        $codigoUsuario = $usuario->cd_usuario;
        $sql = "SELECT * FROM tb_endereco_usuario WHERE cd_usuario = '$codigoUsuario'";
        $stmt = getConn()->prepare($sql);
        $stmt->execute();
        $enderecoUsuario = $stmt->fetchObject();
        $idUsuario = $usuario->cd_usuario;
        $nomeUsuario = $usuario->nm_usuario;
        $tipoUsuario = $usuario->ds_tipo_usuario;
        $logradouroUsuario = $enderecoUsuario->nm_logradouro;
        $numeroLogradouroUsuario = $enderecoUsuario->nm_numero_logradouro;
        $bairroUsuario = $enderecoUsuario->nm_bairro;
        $cidadeUsuario = $enderecoUsuario->nm_cidade;
        $estadoUsuario = $enderecoUsuario->sg_UF;
        $cepUsuario = $enderecoUsuario->cd_CEP;
        $resultado = "true";
        return $response->withStatus(201)->withJson(["Usuario" => ["Existe" => $resultado, "Nome" => $nomeUsuario, "Tipo" => $tipoUsuario, "ID" => $idUsuario], "Endereco" => ["Logradouro" => $logradouroUsuario, "NumeroLogradouro" => $numeroLogradouroUsuario, "Bairro" => $bairroUsuario, "Cidade" => $cidadeUsuario, "Estado" => $estadoUsuario, "CEP" => $cepUsuario]]);
    }
    else
    {
        $resultado = "false";
        return $response->withStatus(201)->withJson(["Usuario" => ["Existe" => $resultado, "Nome" => $nomeUsuario, "Tipo" => $tipoUsuario, "ID" => $idUsuario], "Endereco" => ["Logradouro" => $logradouroUsuario, "NumeroLogradouro" => $numeroLogradouroUsuario, "Bairro" => $bairroUsuario, "Cidade" => $cidadeUsuario, "Estado" => $estadoUsuario, "CEP" => $cepUsuario]]);
    }
    // $senhaBanco = $usuario->nm_senha_usuario;
    // var_dump($senhaBanco);
    // echo $usuario->nm_senha_usuario;
    // var_dump($senhaBanco);
}

function cadastrarPedido(Request $request, Response $response, array $args)
{
    $formulario = $request->getParsedBody();
    $idUsuario = $formulario['body']['Usuario'];
    $pedido = json_encode($formulario['body']['Pedido']);
    $valor = $formulario['body']['Valor'];
    $endereco = $formulario['body']['Endereco'];
    $sql = "INSERT INTO tb_pedido (nm_items_pedido,vl_pedido,nm_endereco_pedido,cd_usuario) VALUES ('$pedido','$valor','$endereco','$idUsuario')";
    $stmt = getConn()->query($sql);
}

$app->run();