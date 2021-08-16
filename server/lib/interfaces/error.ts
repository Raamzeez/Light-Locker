import { Response } from "express";

export interface iError {
  name: string;
  message: string;
  status?: number;
}

export function sendErrorResponse(
  res: Response,
  name: string,
  message: string,
  status: number = 400
) {
  return res.status(status).send({
    name,
    message,
  });
}
