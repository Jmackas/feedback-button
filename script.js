// Insert HTML script
let html2canvasscript = document.createElement('script');
html2canvasscript.src = 'https://html2canvas.hertzen.com/dist/html2canvas.js';
html2canvasscript.type = 'text/javascript';
document.getElementsByTagName('body')[0].appendChild(html2canvasscript);


// Insert help icon
document.querySelector("body").insertAdjacentHTML('afterend', '<button onclick="screenshotProcess()" style="z-index: 99999;background: #df691a;color: white;font-size: 150%;border: none;width: 70px;border-radius: 100%;height: 70px;text-align: center;position: fixed;bottom: 30px;box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.35);right: 40px;display: inline;">Help</button>');






function screenshotProcess() {
    // Clear all screenshot code if it exists
    localStorage.removeItem('Screenshot Code');

    // Take the screenshot
    html2canvas(document.body).then(function (canvas) {
        // Convert the screenshot to Base64
        var screenshotData = canvas.toDataURL();
        // Save the data to local storage
        localStorage.setItem('Screenshot Code', screenshotData);
    });

    // window.location.replace("https://lab.electromeet.com/support");
}
