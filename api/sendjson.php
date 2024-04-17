<?php
ini_set("display_errors", 1);

function sendJSON($data, $statuscode = 200)
{
    header("Content-Type: application/json");
    http_response_code($statuscode);
    $json = json_encode($data);
    echo $json;
    exit();
}
