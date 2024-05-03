<?php
require_once('central.php');

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

if ($requestMethod == "PATCH") {

    foreach ($users as &$user) {
        if ($user["username"] == $requestData["user"]) {

            foreach ($user["savedRecipes"] as $index => &$recipeId) {
                if ($recipeId == $requestData["id"]) {
                    array_splice($user["savedRecipes"], $index, 1);
                    $data = ["id" => $requestData["id"], "user" => $user["username"]];
                    sendJSON($data, 200);
                } else {
                    $user["savedRecipes"][] = $requestData["id"];
                    $data = ["id" => $requestData["id"], "user" => $user["username"]];
                    sendJSON($data, 200);
                }
            }
        }
    }
}
