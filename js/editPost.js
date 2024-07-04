async function editPost(id) {
    const post = prompt("Enter new post content:", "New content");
    if (post) {
        try {
            const response = await fetch('api/update_post.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id, body: post })
            });
            const result = await response.text();
            console.log(result); // Outputs: Post updated successfully
            fetchPosts();
        } catch (error) {
            console.error('Error updating post:', error);
        }
    }
}
