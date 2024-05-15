<?php

require_once('central.php');

$filename = 'users.json';

$users = [];
$json = file_get_contents($filename);
$users = json_decode($json, true);

$requestJSON = file_get_contents('php://input');
$requestData = json_decode($requestJSON, true);

$contentType = $_SERVER['CONTENT_TYPE'];

if ($contentType != 'application/json') {
    $error = ['error' => 'Invalid Content Type'];
    sendJSON($error, 415);
}

// POST FÖRFRÅGAN
if ($requestMethod == 'POST') {

    foreach ($users as $user) {
        if ($user['username'] == $requestData['username']) {
            $error = ['error' => 'User already exists'];
            sendJSON($error, 400);
        }
    }

    $username = $requestData['username'];
    $password = $requestData['password'];

    $highestId = 0;

    foreach ($users as $user) {
        if ($user['id'] > $highestId) {
            $highestId = $user['id'];
        }
    }

    $nextId = $highestId + 1;
    $newUser = [
        'id' => $nextId,
        'username' => $username,
        'password' => $password,
        'savedRecipes' => [],
        'shoppingList' => []
    ];

    $users[] = $newUser;
    $json = json_encode($users, JSON_PRETTY_PRINT);
    file_put_contents($filename, $json);
    sendJSON($newUser, 201);
}

?>