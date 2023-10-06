console.log("javscript loaded!");

let audio
let currentSong

let playEl = document.getElementById("play")
let pauseEl = document.getElementById("pause")
let volumeEl = document.getElementById("volume")

let progressBar = document.getElementById("progress")
let timestampEl = document.getElementById("timestamp")

window.addEventListener("load", () => {
    console.log('loaded audio')
    audio = document.createElement("audio");
    audio.setAttribute("src", "http://localhost:3000/music/The%20Black%20Keys%20-%20Lonely%20Boy.mp3");
    document.body.appendChild(audio);
    // audio.play() // does not work most of the time
    
    // update the progress bar
    audio.addEventListener("timeupdate", () => {
        let currentTime = audio.currentTime;
        let duration = audio.duration;
        // console.log("time%:", (currentTime / duration)*100)
        progressBar.value = ((currentTime/ duration) *100)
    })
});


playEl.addEventListener("click", () => { // play button pressed
    console.log("play pressed")
    audio.currentTime = 60
    audio.play()
    console.log(audio.duration)
    timestampEl.innerHTML = "lengt "+ audio.duration
})
pauseEl.addEventListener("click", () => { // pause button pressed
    console.log("pause pressed")
    audio.pause()
})
volumeEl.addEventListener("change", () => { // volume slider changed
    console.log("volume changed:", volumeEl.value)
    audio.volume = (volumeEl.value / 100)
})


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

    console.log(content);
    return content;
}

syncMusic();
setInterval(syncMusic, 10000);
