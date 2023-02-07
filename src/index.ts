import { config } from 'dotenv';
import * as express from 'express';
import { Application } from 'express';

import apiRouter from './api/auth';
import extendRequest from './middleware/ExtendedRequest';

config();

const app: Application = express();

// Middleware
app.use(express.json());
app.use(extendRequest);

// Routes
app.use('/auth', apiRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
