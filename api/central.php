<?php

require_once('helpers.php');

$requestMethod = $_SERVER['REQUEST_METHOD'];
$allowedMethods = ['GET', 'POST', 'PATCH', 'DELETE'];

if (!in_array($requestMethod, $allowedMethods)) {
    $error = ['error' => 'Invalid HTTP Method'];
    sendJSON($error, 405);
}

?>