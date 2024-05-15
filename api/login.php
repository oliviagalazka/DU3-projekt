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
            if ($user['password'] == $requestData['password']) {
                // Ska vi ha dessa två rader under? Vad ska vi ha annars?
                unset($user['password']);
                sendJSON($user, 200);
            } else {
                $error = ['error' => 'Fel användarnamn eller lösenord'];
                sendJSON($error, 400);
            }
        }
    }

    $error = ['error' => 'Fel användarnamn eller lösenord'];
    sendJSON($error, 400);
}

?>
