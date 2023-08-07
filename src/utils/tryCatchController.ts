import { NextFunction, Request, Response } from "express";

export const tryCatchController = (controller: object) => {
  return Object.fromEntries(
    Object.entries(controller).map(([key, controllerMethod]) => {
      return [
        key,
        function (req: Request, res: Response, next: NextFunction) {
          // This is on purpose to handle both async and sync controller methods
          Promise.resolve(controllerMethod(req, res)).catch((error) =>
            next(error)
          );
        },
      ];
    })
  );
};
