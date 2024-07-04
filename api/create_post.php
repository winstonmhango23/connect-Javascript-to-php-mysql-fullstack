<?php
require '../db/database.php';

// Check if the POST data is set
if (isset($_POST['title']) && isset($_POST['body']) && isset($_POST['user_id'])) {
    $title = filter_input(INPUT_POST, 'title', FILTER_SANITIZE_STRING);
    $body = filter_input(INPUT_POST, 'body', FILTER_SANITIZE_STRING);
    $user_id = filter_input(INPUT_POST, 'user_id', FILTER_VALIDATE_INT);

    if ($title && $body && $user_id) {
        $sql = "INSERT INTO posts (user_id, title, body) VALUES (:user_id, :title, :body)";
        $stmt = $pdo->prepare($sql);
        $stmt->execute(['user_id' => $user_id, 'title' => $title, 'body' => $body]);

        echo "Post created successfully";
    } else {
        echo "Invalid input data";
    }
} else {
    echo "Missing required POST data";
}