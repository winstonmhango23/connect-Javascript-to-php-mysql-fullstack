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
    }
}

async function fetchPosts() {
    try {
        const response = await fetch('api/read_posts.php');
        const posts = await response.json();
        displayPosts(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
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
