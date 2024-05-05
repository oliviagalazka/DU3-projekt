<?php

require_once('central.php');

$filename = 'reviews.json';

$reviews = [];
$json = file_get_contents($filename);
$reviews = json_decode($json, true);

$requestJSON = file_get_contents('php://input');
$requestData = json_decode($requestJSON, true);

// GET FÖRFRÅGAN
if ($requestMethod == 'GET') {
    sendJSON($reviews, 200);
}

$contentType = $_SERVER['CONTENT_TYPE'];

if ($contentType != 'application/json') {
    $error = ['error' => 'Invalid Content Type'];
    sendJSON($error, 415);
}

// POST FÖRFRÅGAN
if ($requestMethod == 'POST') {
    if (empty($requestData['recipeId']) or empty($requestData['comment']) or empty($requestData['rank'])) {
        $error = ['error' => 'One of the fields is either missing or incomplete'];
        sendJSON($error, 400);
    }

    $recipeId = $requestData['recipeId'];
    $comment = $requestData['comment'];
    $rank = $requestData['rank'];

    $highestId = 0;

    foreach ($reviews as $review) {
        if ($review['id'] > $highestId) {
            $highestId = $review['id'];
        }
    }

    $nextId = $highestId + 1;
    $newReview = [
        'id' => $nextId,
        'recipeId' => $recipeId,
        'comment' => $comment,
        'rank' => $rank
    ];

    $reviews[] = $newReview;
    $json = json_encode($reviews, JSON_PRETTY_PRINT);
    file_put_contents($filename, $json);
    sendJSON($newReview, 201);
}

?>