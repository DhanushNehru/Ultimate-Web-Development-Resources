const originalUrlInput = document.getElementById("originalUrl");
const shortenButton = document.getElementById("shortenButton");
const shortenedUrlParagraph = document.getElementById("shortenedUrl");
shortenButton.addEventListener("click", () => {
    const originalUrl = originalUrlInput.value;
    const shortenedUrl = originalUrl;
    shortenedUrlParagraph.textContent = shortenedUrl;
});
