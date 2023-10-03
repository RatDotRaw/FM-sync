const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "../client/src")));

app.get("/", (req, res) => {
    // res.send('Hello World! and leo')
    res.sendFile(path.join(__dirname, "../client/publick/index.html"));
});

// for backend post req
app.post("/music", (req, res) => {
    
    let response = {
        link: "this is a test"
    }

    res.send(response);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
