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

    $ind_Recipes = true;

    foreach ($users as $key => $user) {
        if ($user["id"] == $requestData["user"]) {

            foreach ($users[$key]["savedRecipes"] as $key2 => $recipes) {
                if ($recipes == $requestData["id"]) {
                    unset($users[$key]["savedRecipes"][$key2]);
                    $ind_Recipes = false;
                }
            }
        }
    }

    if ($ind_Recipes == true) {
        $users[$key]["savedRecipes"][] = $requestData["id"];
    }
    $data = ["favorite" => "updated"];
    sendJSON($data, 200);
}
