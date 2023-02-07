import { Prisma } from '@prisma/client';
import { Router, Request, Response } from 'express';

import prisma from '../../prisma';
import registerValidator from './validators/register';
import validate from '../../middleware/validation';

import type { ExtendedRequest } from '../../middleware/ExtendedRequest';

const apiRouter = Router();

apiRouter.post(
  '/register',
  registerValidator,
  validate,
  async (req: Request, res: Response) => {
    const extendedReq = req as ExtendedRequest;
    const data = extendedReq.extractBody<Prisma.UserCreateInput>(req);

    try {
      await prisma.user.create({ data });
    } catch (error) {
      // TODO: Handle taken email error
      console.error(error);
      return res.status(500).send('Error creating user');
    }

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
