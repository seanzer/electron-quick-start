// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

let log = message => document.querySelector("#console").innerText = message;

function doThing1() {
    return Promise.resolve().then(() => { throw new Error("rejection"); });
}

function doThing2() {
    return new Promise(resolve => {
        setTimeout(resolve, 0);
    })
        .then(() => { throw new Error("rejection"); });
}

function doThing3() {
    return Promise.reject("rejection");
}

process.on("unhandledRejection", _ => {
    log("unhandled rejection");
});

document.querySelector("#async_btn1").onclick = _ => {
    doThing1();
};

document.querySelector("#async_btn2").onclick = _ => {
    doThing2();
};

document.querySelector("#async_btn3").onclick = _ => {
    doThing3();
};
