function validateURL(url) {
    const regex = /^(https?:\/\/)[\w\-]+(\.[\w\-]+)+$/;
    if (regex.test(url)) {
        console.log("Valid URL");
    } else {
        console.log("Invalid URL");
    }
}

validateURL("https://example.com");
validateURL("http://example");
