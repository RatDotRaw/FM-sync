console.log("javscript loaded!");

window.onload = function() {
    let audiosource = document.getElementById("music");
    console.log(audiosource);
    audiosource.play();
};
  

async function syncMusic() {
    console.log("fechting music");

    let data = {
        ID: "there is no ID",
    };

    let rawResponse = await fetch("music", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        // mode: "cors", // no-cors, *cors, same-origin
        // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: "same-origin", // include, *same-origin, omit
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        redirect: "follow", // manual, *follow, error
        // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    });

    const content = await rawResponse.json();

    // console.log(content);
    return content;
}

syncMusic();
setInterval(syncMusic, 10000);
