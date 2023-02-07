import { Prisma } from '@prisma/client';
import { Router, Request, Response } from 'express';

import registerValidator from './validators/register';
import validate from '../../middleware/validation';

import type { ExtendedRequest } from '../../middleware/ExtendedRequest';

const apiRouter = Router();

apiRouter.post(
  '/register',
  registerValidator,
  validate,
  (req: Request, res: Response) => {
    const extendedReq = req as ExtendedRequest;
    const data = extendedReq.extractBody<Prisma.UserCreateInput>(req);

    return res.status(201).send('User created');
  }
);

apiRouter.post('/login', (req: Request, res: Response) => {
  res.send('Login route');
});

apiRouter.post('/reset-password', (req: Request, res: Response) => {
  res.send('Reset password route');
});

export default apiRouter;
