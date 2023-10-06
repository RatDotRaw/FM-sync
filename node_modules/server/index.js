const express = require("express");
const path = require("path");
const fs = require('fs')

const { getAudioDurationInSeconds } = require('get-audio-duration')

const app = express();
const port = 3000;

const audioPath = path.join(__dirname, '../client/src/music');

app.use(express.static(path.join(__dirname, "../client/src")));

app.get("/", (req, res) => {
    // res.send('Hello World! and leo')
    res.sendFile(path.join(__dirname, "../client/publick/index.html"));
});


let playlist = []

// for backend post req
app.post("/music", async (req, res) => {
    if (playlist.length == 0) {

    }

    const currentTime = new Date();
    // const songTime = await getAudioDurationInSeconds('')
    let newTime = new Date(currentTime.getTime() + 10000);

    let startTime = newTime

    let response = {
        link: "http://localhost:3000/music/The%20Black%20Keys%20-%20Lonely%20Boy.mp3",
        startTime: startTime
    }

    res.send(response);
});

getAudioList()

async function getAudioList () {
    let fileList = []

         fs.readdir(audioPath, (err, files) => {
        if (err) {
            console.log("error in getAudioList():", err) 
        }

        files.forEach(element => {
            if (element != ".gitkeep") {
                console.log(element)
                fileList.push(element)
            }
        });
    })

    fileList.forEach(element => {
        console.log(element)
    });
}












app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
