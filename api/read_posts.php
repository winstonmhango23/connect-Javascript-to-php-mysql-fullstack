<?php
require '../db/database.php';

// Set header to indicate JSON response
header('Content-Type: application/json');

// Execute the query and fetch posts
$sql = "SELECT posts.id, posts.title, posts.body, users.username 
        FROM posts 
        JOIN users ON posts.user_id = users.id";
$stmt = $pdo->query($sql);
$posts = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Output the JSON encoded posts
echo json_encode($posts);