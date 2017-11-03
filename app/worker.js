this.addEventListener("fetch", function (event) { 
    if (event.request.url.includes("file://")) {
        event.respondWith(
            fetch("https://www.microsoft.com", { redirect: "manual" })
                .catch(e => {
                    return fetch(event.request);
                })); 
    } else {
        event.respondWith(fetch(event.request));
    }
});