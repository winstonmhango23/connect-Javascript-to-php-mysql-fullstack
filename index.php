<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog Application</title>
    <link rel="stylesheet" href="css/styles.css">
    <meta http-equiv="Content-Security-Policy" content="script-src 'self' 'unsafe-inline';">
</head>

<body>
    <h1>Blog Posts</h1>

    <h1>Create a New Post</h1>
    <form id="createPostForm">
        <input type="text" id="title" name="title" placeholder="Title" required>
        <textarea id="body" name="body" placeholder="Body" required></textarea>
        <input type="hidden" id="user_id" name="user_id" value="2">
        <button type="submit">Create Post</button>
    </form>

    <div id="loading" style="display: none;">Loading...</div>
    <div id="error" style="display: none; color: red;"></div>
    <div id="posts"></div>
    <script src="js/datafeching.js"></script>
</body>

</html>