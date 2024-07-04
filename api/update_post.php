<?php
require '../db/database.php';

$id = $_POST['id'];
$title = $_POST['title'];
$body = $_POST['body'];

$sql = "UPDATE posts SET title = :title, body = :body WHERE id = :id";
$stmt = $pdo->prepare($sql);
$stmt->execute(['title' => $title, 'body' => $body, 'id' => $id]);

echo "Post updated successfully";