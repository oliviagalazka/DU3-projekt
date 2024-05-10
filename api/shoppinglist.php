<?php

require_once('central.php');

$filename = 'users.json';

$users = [];
$json = file_get_contents($filename);
$users = json_decode($json, true);

// GET FÖRFRÅGAN
if ($requestMethod == 'GET') {
    if(isset($_GET['user'])) {
        foreach ($users as $user) {
            if ($user['username'] == $_GET['user']) {
            sendJSON($user, 200);
            }
        }
    }
}

$requestJSON = file_get_contents('php://input');
$requestData = json_decode($requestJSON, true);

/*
$contentType = $_SERVER['CONTENT_TYPE'];

if ($contentType != 'application/json') {
    $error = ['error' => 'Invalid Content Type'];
    sendJSON($error, 415);
}
*/

// POST FÖRFRÅGAN
if ($requestMethod == 'POST') {
    if (empty($requestData['username']) or empty($requestData['item'])) {
        $error = ['error' => 'One of the fields is either missing or incomplete'];
        sendJSON($error, 400);
    }

    foreach ($users as &$user) {
        if ($user['username'] == $requestData['username']) {

            foreach ($user['shoppingList'] as $item) {
                if ($item == $requestData['item']) {
                    $error = ["error" => "Item already exists"];
                    sendJSON($error, 400);
                }
            }
            
            $user['shoppingList'][] = $requestData['item'];
            $json = json_encode($users, JSON_PRETTY_PRINT);
            file_put_contents($filename, $json);
            sendJSON($requestData['item'], 201);
        }
    }

    $error = ['error' => 'User not found'];
    sendJSON($error, 404);
}

// DELETE FÖRFRÅGAN
if ($requestMethod == 'DELETE') {
    if (empty($requestData['username']) or empty($requestData['item'])) {
        $error = ['error' => 'One of the fields is either missing or incomplete'];
        sendJSON($error, 400);
    }

    foreach ($users as &$user) {
        if ($user['username'] == $requestData['username']) {
            $itemFound = false;

            foreach ($user['shoppingList'] as $itemIndex => $item) {
                if ($item == $requestData['item']) {
                    array_splice($user['shoppingList'], $itemIndex, 1);
                    $itemFound = true;
                }
            }

            $json = json_encode($users, JSON_PRETTY_PRINT);
            file_put_contents($filename, $json);
            sendJSON($requestData['item'], 200);
        }
    }

    $error = ['error' => 'User not found'];
    sendJSON($error, 404);
}

?>