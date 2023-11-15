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
    $sql = "INSERT INTO tb_usuario (nm_usuario, dt_nascimento_usuario, nm_email_usuario, nm_senha_usuario) VALUES ('$nome','$nascimento','$email','$senha');";
    $stmt = getConn()->query($sql); // <--- Isso já roda o comando

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
        $response->getBody()->write("true");
    return $response;
    $senhaBanco = $usuario->nm_senha_usuario;
    // var_dump($senhaBanco);
    // echo $usuario->nm_senha_usuario;
    // var_dump($senhaBanco);
}

$app->run();