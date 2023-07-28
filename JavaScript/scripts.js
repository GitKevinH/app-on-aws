// Sample data to simulate posts and comments (will be cleared on refresh)
let posts = [];

// Function to display posts and comments
function renderPosts() {
    const postList = document.getElementById('postList');
    postList.innerHTML = '';

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `
            <p>${post.content}</p>
            <button onclick="addComment(${post.id})">Comment</button>
        `;

        post.comments.forEach(comment => {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            commentDiv.innerHTML = comment;
            postDiv.appendChild(commentDiv);
        });

        postList.appendChild(postDiv);
    });
}

// Function to add a new post
function addPost(content) {
    const newPost = {
        id: Date.now(),
        content: content,
        comments: []
    };
    posts.push(newPost);
    renderPosts();
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
    const postInput = document.getElementById('postInput');
    const content = postInput.value.trim();

    if (content !== '') {
        addPost(content);
        postInput.value = '';
    }
}

// Function to add a new comment to a post
function addComment(postId) {
    const comment = prompt('Enter your comment:');
    if (comment !== null && comment.trim() !== '') {
        const post = posts.find(post => post.id === postId);
        post.comments.push(comment);
        renderPosts();
    }
}

// Event listeners
const postForm = document.getElementById('postForm');
postForm.addEventListener('submit', handleSubmit);

// Initial render
renderPosts();
