document.addEventListener('DOMContentLoaded', () => {
    fetchPosts();
    document.getElementById('createPostForm').addEventListener('submit', createPost);
});

async function createPost(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
        const response = await fetch('api/create_post.php', {
            method: 'POST',
            body: formData
        });
        const result = await response.text();
        console.log(result); // Outputs: Post created successfully
        fetchPosts(); // Refreshes the list of posts
    } catch (error) {
        console.error('Error creating post:', error);
        document.getElementById('error').innerText = 'Error creating post: ' + error.message;
        document.getElementById('error').style.display = 'block';
    }
}

async function fetchPosts() {
    document.getElementById('loading').style.display = 'block';
    try {
        const response = await fetch('api/read_posts.php');
        const responseBody = await response.text();
        console.log('Response body:', responseBody); // Debug full response body
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const posts = JSON.parse(responseBody); // Manually parse the JSON
        console.log(posts); // Debug JSON response
        displayPosts(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        document.getElementById('error').innerText = 'Failed to load posts: ' + error.message;
        document.getElementById('error').style.display = 'block';
    } finally {
        document.getElementById('loading').style.display = 'none';
    }
}

function displayPosts(posts) {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = '';
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            <p><em>by ${post.username}</em></p>
            <button onclick="editPost(${post.id})">Edit</button>
            <button onclick="deletePost(${post.id})">Delete</button>
        `;
        postsContainer.appendChild(postElement);
    });
}

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
