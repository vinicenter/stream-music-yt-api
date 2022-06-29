const ytdl = require('ytdl-core');
const express = require('express');
const app = express();

app.get('/', function (req, res) {
    var videoUrl = req.query.videoUrl;   
    var videoReadableStream = ytdl(videoUrl, { filter: 'audioonly'});

    res.setHeader("content-type", "audio/mpeg");
    videoReadableStream.pipe(res);
});

app.listen(3000);
