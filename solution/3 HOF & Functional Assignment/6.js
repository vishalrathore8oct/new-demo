function validateLinkedInProfileURL(url) {
    const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}$/;
    if (regex.test(url)) {
        console.log("Valid LinkedIn Profile URL");
    } else {
        console.log("Invalid LinkedIn Profile URL");
    }
}

validateLinkedInProfileURL("https://www.linkedin.com/in/johndoe_123");
validateLinkedInProfileURL("https://www.linkedin.com/in/short");
