import express from 'express';
import bodyParser = require('body-parser');
import { Ticket } from '../client/src/api';
import { tempData } from './temp-data';
import { serverAPIPort, APIPath } from '@fed-exam/config';

console.log('starting server', { serverAPIPort, APIPath });

const app = express();

const PAGE_SIZE = 20;

app.use(bodyParser.json());

app.use((_, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

app.get(APIPath, (req, res) => {
  let processedData: Ticket[] = tempData;
  //@ts-ignore
  const page: number = req.query.page || 1;
  //@ts-ignore
  const searchTerm: string = req.query.search;

  if (searchTerm) {
    processedData = tempData.filter((ticket) =>
      (ticket.content + ticket.title).toLowerCase().includes(searchTerm)
    );
  }
  const dataLength = processedData.length;
  processedData = processedData.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  res.send(processedData);
});

app.listen(serverAPIPort);
console.log('server running', serverAPIPort);
