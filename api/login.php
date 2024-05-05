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
    if (empty($requestData['username']) or empty($requestData['password'])) {
        $error = ['error' => 'One of the fields is either missing or incomplete'];
        sendJSON($error, 400);
    }

    foreach ($users as $user) {
        if ($user['username'] == $requestData['username'] and $user['password'] == $requestData['password']) {
            $data = ['message' => 'Welcome'];
            sendJSON($data, 200);
        }
    }
}

?>