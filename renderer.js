// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
document.addEventListener("DOMContentLoaded", () => {
    navigator.serviceWorker.register("./app/worker.js");

    setTimeout(
        () => {
        window.location = "./app/index.html";
        }, 
        0);
});

const {webFrame} = require("electron");
webFrame.registerURLSchemeAsPrivileged("file");