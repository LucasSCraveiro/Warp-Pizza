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
    $vindo = $request->getParsedBody();
    $nome = $vindo['body']['body']['Nome'];
    // $nascimento = $vindo['body']['body']['dataNascimento'];
    $nascimento = "2002-02-15";
    $email = $vindo['body']['body']['Email'];
    $senha = $vindo['body']['body']['Senha'];
    $logradouro = $vindo['body']['body']['Logradouro'];
    $numeroLogradouro = $vindo['body']['body']['NumeroLogradouro'];
    $bairro = $vindo['body']['body']['Bairro'];
    $cidade = $vindo['body']['body']['Cidade'];
    $estado = $vindo['body']['body']['Estado'];
    $cep = $vindo['body']['body']['CEP'];
    $sql = "INSERT INTO tb_usuario (nm_usuario, dt_nascimento_usuario, nm_email_usuario, nm_senha_usuario) VALUES ('$nome','$nascimento','$email','$senha');";
    $stmt = getConn()->query($sql);
    // $stmt->execute(); <--- Faz com que a inserção ocorra duas vezes
    // $arreio['teste'] = var_dump($vindo);
    // return $response->withStatus(201)->withJson($veio);
}

$app->run();