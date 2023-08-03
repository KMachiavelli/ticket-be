import { Request, Response } from "express";

const getTicketById = (req: Request, res: Response) => {
  res.send();
};

const createTicket = (req: Request, res: Response) => {};

const deleteTicket = (req: Request, res: Response) => {};

const updateTicket = (req: Request, res: Response) => {};

const patchTicket = (req: Request, res: Response) => {};

const exchangeTicket = (req: Request, res: Response) => {};

const getDeliveryCost = (req: Request, res: Response) => {
  res.json({ deliveryCost: 100 });
};

const ticketsController = {
  getTicketById,
  createTicket,
  deleteTicket,
  updateTicket,
  patchTicket,
  exchangeTicket,
  getDeliveryCost,
};

export default ticketsController;
