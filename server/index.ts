import express from 'express';
import bodyParser = require('body-parser');
import { Ticket } from '../client/src/api';
import { tempData } from './temp-data';
import { serverAPIPort, APIPath } from '@fed-exam/config';
import { PAGE_SIZE } from '../configuration/index';

console.log('starting server', { serverAPIPort, APIPath });

const app = express();

app.use(bodyParser.json());

app.use((_, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

app.get(APIPath, (req, res) => {
  //@ts-ignore
  const page: number = req.query.page || 1;
  //@ts-ignore
  const searchTerm: string = req.query.search;  

  let processedData: Ticket[] = searchTerm
    ? tempData.filter((ticket) =>
        (ticket.content + ticket.title).toLowerCase().includes(searchTerm)
      )
    : tempData;
  const totalLength = processedData.length;
  processedData = processedData.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  res.send({tickets: processedData, totalLength});
});

app.listen(serverAPIPort);
console.log('server running', serverAPIPort);
