<?php

require_once('central.php');

$filename = 'users.json';

$users = [];
$json = file_get_contents($filename);
$users = json_decode($json, true);

if ($requestMethod == 'GET') {
    if (isset($_GET['user'])) {
        foreach ($users as $user) {
            if ($user['username'] == $_GET['user']) {
                sendJSON($user, 200);
            }
        }
    }
}

$requestJSON = file_get_contents('php://input');
$requestData = json_decode($requestJSON, true);

$contentType = $_SERVER['CONTENT_TYPE'];

if ($contentType != 'application/json') {
    $error = ['error' => 'Invalid Content Type'];
    sendJSON($error, 415);
}

// PATCH FÖRFRÅGAN
if ($requestMethod == 'PATCH') {
    if (!isset($requestData['id'], $requestData['user'])) {
        $error = ['error' => 'One of the fields is either missing or incomplete'];
        sendJSON($error, 400);
    }

    foreach ($users as $index => &$user) {
        if ($user['username'] == $requestData['user']) {
            $recipeFound = false;

            foreach ($user['savedRecipes'] as $recipeIndex => $recipeId) {
                if ($recipeId == $requestData['id']) {
                    array_splice($user['savedRecipes'], $recipeIndex, 1);
                    $recipeFound = true;
                    break;
                }
            }

            if (!$recipeFound) {
                $user['savedRecipes'][] = $requestData['id'];
            }

            $json = json_encode($users, JSON_PRETTY_PRINT);
            file_put_contents($filename, $json);
            $data = ['id' => $requestData['id'], 'user' => $user['username'], 'savedRecipes' => $user['savedRecipes']];
            sendJSON($data, 200);
            break;
        }
    }

    $error = ['error' => 'User not found'];
    sendJSON($error, 404);
}
