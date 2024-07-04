<?php
require '../db/database.php';

$id = $_POST['id'];

$sql = "DELETE FROM posts WHERE id = :id";
$stmt = $pdo->prepare($sql);
$stmt->execute(['id' => $id]);

echo "Post deleted successfully";