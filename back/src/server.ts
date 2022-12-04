import express from 'express';
// ./env must be first
import './env';
import meetingRouter from './business/meeting/router';
import logger from './technical/logger/logger';

const PORT = 3001;

const app = express();
app.use(express.json());

app.use(meetingRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/meeting', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  logger.log(`Example app listening on port ${PORT}`);
});
