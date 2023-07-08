import express from 'express';
import bodyParser from 'body-parser';
import router from './routers';
import 'reflect-metadata';

let app = express();
app.use(bodyParser.json());

app.use(router);

export { app };
