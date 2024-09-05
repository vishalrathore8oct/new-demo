async function fetchWithErrorHandling() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/123456789');
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("There was an error:", error);
    }
}

// Example usage:
fetchWithErrorHandling(); // Logs an error message
