import { Ticket } from "./tickets";

export declare global {
  namespace Express {
    interface Request {
      user?: User;
      ticket?: Ticket;
    }
  }
}
