import 'dotenv/config';
import express from 'express';
import { router as placeRouter } from './router/placeRouter';
import { logger } from './middleware/loggerMiddleware';
import { errorHandler } from './middleware/erroHandler';
import { connect } from './db/mongo';

const app = express();
const PORT = 3000;

connect();

app.use(express.json());
app.use('*', logger);

app.use('/places', placeRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log('Servidor express iniciado en', PORT);
});
