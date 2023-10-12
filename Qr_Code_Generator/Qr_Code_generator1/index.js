document.addEventListener("DOMContentLoaded", function () {
    const inputTypeSelect = document.getElementById("input-type");
    const textInput = document.getElementById("text-input");
    const urlInput = document.getElementById("url-input");
    const contactInput = document.getElementById("contact-input");
    const generateButton = document.getElementById("generate-button");
    const qrCodeDiv = document.getElementById("qr-code");
    const qrCodeImg = document.getElementById("qr-code-img");

    inputTypeSelect.addEventListener("change", function () {
        const selectedInputType = inputTypeSelect.value;
        textInput.style.display = selectedInputType === "text" ? "block" : "none";
        urlInput.style.display = selectedInputType === "url" ? "block" : "none";
        contactInput.style.display = selectedInputType === "contact" ? "block" : "none";
    });

    generateButton.addEventListener("click", function () {
        const selectedInputType = inputTypeSelect.value;
        let qrCodeData = "";

        if (selectedInputType === "text") {
            qrCodeData = document.getElementById("text").value;
        } else if (selectedInputType === "url") {
            qrCodeData = document.getElementById("url").value;
        } else if (selectedInputType === "contact") {
            const name = document.getElementById("name").value;
            const number = document.getElementById("number").value;
            const email = document.getElementById("email").value;
            qrCodeData = `BEGIN:VCARD\nVERSION:3.0\nFN:${name}\nTEL:${number}\nEMAIL:${email}\nEND:VCARD`;
        }

        if (qrCodeData) {
            qrCodeDiv.style.display = "block";
            qrCodeImg.src = generateQRCode(qrCodeData);
        }
    });

    function generateQRCode(data) {
        const qr = qrcode(0, "H");
        qr.addData(data);
        qr.make();
        return qr.createDataURL();
    }
});
