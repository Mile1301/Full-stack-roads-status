import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  visitsCounter = 0;
  use(req: Request, res: Response, next: NextFunction) {
    if (req.url.includes('/roads') && req.method === 'GET') {
      this.visitsCounter++;
    }
    console.log('Total visits on page /roads is', this.visitsCounter);

    return next();
  }
}
export const loggedMiddlewareFunc = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log('From the function logger middleware');

  return next();
};
