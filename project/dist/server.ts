import express from 'express';
import { Request, Response } from 'express';
import * as path from 'path';


const app = express();
app.use(express.static(path.join(__dirname, './build')));

app.get('/', (req: Request, res: Response) => {
    res.send(express.static(path.join(__dirname, './build/index.html')));
});

app.listen('2080', () => {
    console.log(`server 2080`);
});