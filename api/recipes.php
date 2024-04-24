<?php
require_once('central.php');

// För att komma åt users.json filen
$filename = "recipes.json";

// Skapar users array för att sedan kunna fylla den med våra users
$recipes = [];

// Hämtar users.json innehåll i JSON format
$json = file_get_contents($filename);


$recipes = json_decode($json, true);

// Hämtar allt innehåll från body i förfrågan som är i JSON format
if ($requestMethod == "GET") {
    sendJSON($recipes, 200);
} else if ($requestMethod == "PATCH") {
    $filename = "users.json";
    $users = [];
    $json = file_get_contents($filename);
    $users = json_decode($json, true);
}