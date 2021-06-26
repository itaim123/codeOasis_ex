import express from 'express';
import bodyParser = require('body-parser');
import { Ticket } from '../client/src/api';
import { tempData } from './temp-data';
import { serverAPIPort, APIPath } from '@fed-exam/config';
import { PAGE_SIZE } from '../configuration/index';
import { checkQueryCreateTimeStamp } from '../client/src/utils/utis';

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
  let dAfterTS: number;
  let dBeforeTS: number;
  // const dBeforeTS = checkQueryCreateTimeStamp(req.query.dBefore);
  if (req.query.dBefore) {
    //@ts-ignore
    const dBef = req.query.dBefore.replace('before:', '')
      .split('/')
      .reverse()
      .join('-');
    const newDate = new Date(dBef);
    dBeforeTS = newDate.getTime();
  }
  if (req.query.dAfter) {
    //@ts-ignore
    const dAft = req.query.dAfter.replace('after:', '')
      .split('/')
      .reverse()
      .join('-');
    const newDate = new Date(dAft);
    dAfterTS = newDate.getTime();
  }
  // const dAfterTS = checkQueryCreateTimeStamp(req.query.dAfter);
  let updatedDate: Ticket[] = searchTerm
    ? tempData.filter((ticket) =>
        (ticket.content + ticket.title).toLowerCase().includes(searchTerm)
      )
    : tempData;
  //@ts-ignore
  if (dBeforeTS) {
    updatedDate.filter((ticket) => ticket.creationTime < dBeforeTS);
  }
  //@ts-ignore
  if (dAfterTS) {
    updatedDate.filter((ticket) => ticket.creationTime > dAfterTS);
  }

  const totalLength = updatedDate.length;
  updatedDate = updatedDate.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  res.send({ tickets: updatedDate, totalLength });
});

app.listen(serverAPIPort);
console.log('server running', serverAPIPort);
