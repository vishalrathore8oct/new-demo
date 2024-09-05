async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        console.log(posts);
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}

// Example usage:
fetchPosts(); // Logs the list of posts from the API
