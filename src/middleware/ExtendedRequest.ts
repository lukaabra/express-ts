import { Request, Response, NextFunction } from 'express';

export interface ExtendedRequest extends Request {
  extractBody: <T>(req: Request) => T;
}

const extractBody = <T>(req: Request): T => {
  return req.body as T;
};

export const extendRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const extendedReq = req as ExtendedRequest;
  extendedReq.extractBody = extractBody;

  next();
};

export default extendRequest;
