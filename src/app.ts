import 'dotenv/config';
import express from 'express';
import { router as pokemonsRouter } from './router/pokemonsRouter';
import { router as digimonsRouter } from './router/digimonsRouter';
import { logger } from './middleware/loggerMiddleware';
import { errorHandler } from './middleware/erroHandler';
import { router as nasaRouter } from './router/nasaRouter';
import { connect } from './db/mongo';

const app = express();
const PORT = 3000;

connect();

app.use(express.json());
app.use('*', logger);

app.use('/pokemons', pokemonsRouter);
app.use('/digimons', digimonsRouter);
app.use('/nasa', nasaRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log('Servidor express iniciado en', PORT);
});
