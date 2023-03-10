import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

const validate = (
  req: Request,
  res: Response,
  next: NextFunction
): Response<unknown, Record<string, unknown>> | void => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};

export default validate;
