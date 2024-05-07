<?php

require_once('central.php');

$filename = 'shoppinglist.json';

$shoppinglists = [];
$json = file_get_contents($filename);
$shoppinglists = json_decode($json, true);

$requestJSON = file_get_contents('php://input');
$requestData = json_decode($requestJSON, true);

// GET FÖRFRÅGAN
if ($requestMethod == 'GET') {
    sendJSON($shoppinglists, 200);
}

$contentType = $_SERVER['CONTENT_TYPE'];

if ($contentType != 'application/json') {
    $error = ['error' => 'Invalid Content Type'];
    sendJSON($error, 415);
}

// POST FÖRFRÅGAN
if ($requestMethod == 'POST') {
    if (empty($requestData['userId']) or empty($requestData['items'])) {
        $error = ['error' => 'One of the fields is either missing or incomplete'];
        sendJSON($error, 400);
    }

    $ruserId = $requestData['userId'];
    $items = $requestData['items'];

    $highestId = 0;

    foreach ($shoppinglists as $shoppinglist) {
        if ($shoppinglist['id'] > $highestId) {
            $highestId = $shoppinglist['id'];
        }
    }

    $nextId = $highestId + 1;
    $newShoppinglist = [
        'id' => $nextId,
        'userId' => $userId,
        'items' => $items,
    ];

    $shoppinglists[] = $newShoppinglist;
    $json = json_encode($shoppinglists, JSON_PRETTY_PRINT);
    file_put_contents($filename, $json);
    sendJSON($newShoppinglist, 201);
}

?>