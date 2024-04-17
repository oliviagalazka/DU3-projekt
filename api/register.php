<?php
    require_once('central.php');

    // För att komma åt users.json filen
    $filename = "users.json";

    // Skapar users array för att sedan kunna fylla den med våra users
    $users = [];

    // Hämtar users.json innehåll i JSON format
    $json = file_get_contents($filename);

    // Fyller users array med innehållet från users.json i php format
    $users = json_decode($json, true);

    // Hämtar allt innehåll från body i förfrågan som är i JSON format
    $requestJSON = file_get_contents("php://input");

    // Kodar om innehållet från body i förfrågan till en php array
    $requestData = json_decode($requestJSON, true);

    if($requestMethod == "POST") {
        if (!isset($requestData["username"], $requestData["password"], $requestData["passwordConfirm"])) {
            $error = ["error" => "One of the fields is either missing or incomplete"];
            sendJSON($error, 400);
        }

        if ($requestData["password"] != $requestData["passwordConfirm"]) {
            $error = ["error" => "Password don't match"];
            sendJSON($error, 400);
        }

        foreach($users as $user) {
            if ($user["username"] == $requestData["username"]) {
                $error = ["error" => "User already exist"];
                sendJSON($error, 425);
            }
        }

        $username = $requestData["username"];
        $password = $requestData["password"];

        $highestId = 0;

        foreach($users as $user) {
            if ($user["id"] > $highestId) {
                $highestId = $user["id"];
            }
        }

        $nextId = $highestId + 1;
        $newUser = [
            "id" => $nextId,
            "username" => $username,
            "password" => $password
        ];

        $users[] = $newUser;
        $json = json_encode($users, "JSON_PRETTY_PRINT");
        file_put_contents($filename, $json);
        sendJSON($newUser, 201);

    }
?>