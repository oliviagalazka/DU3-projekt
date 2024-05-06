<?php

require_once('central.php');

$filename = 'recipes.json';

$recipes = [];
$json = file_get_contents($filename);
$recipes = json_decode($json, true);

// GET FÖRFRÅGAN
if ($requestMethod == 'GET') {
    sendJSON($recipes, 200);
}

?>