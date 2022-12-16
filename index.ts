import { Request, Response } from "express";

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', (req: Request, res: Response) => {
    res.sendFile(`${__dirname}/dist/index.html`);
});

app.listen(5003, () => {
    console.log('Application listening on port 5003!');
});