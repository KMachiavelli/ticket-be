import { Request, Response } from "express";
import {
  CartVerificationRequestTO,
  CartVerificationResponseTO,
  FilteredTicketsRequestTO,
  FilteredTicketsResponseTO,
  Ticket,
} from "../types/tickets";
import { pool } from "../db/pg/db";
import { ticketsQueries } from "../queries/tickets";
import { tryCatchController } from "../utils/tryCatchController";
import { HttpError } from "../utils/HttpError";

const getTicketById = (req: Request, res: Response) => {
  res.send();
};

const createTicket = (req: Request, res: Response) => {};

const deleteTicket = (req: Request, res: Response) => {};

const updateTicket = (req: Request, res: Response) => {};

const patchTicket = (req: Request, res: Response) => {};

const exchangeTicket = (req: Request, res: Response) => {};

const getTickets = (
  req: Request<{}, {}, {}, FilteredTicketsRequestTO>,
  res: Response<FilteredTicketsResponseTO>
) => {
  const { title, date, distributor, maxPrice, minPrice, sortOrder } = req.query;
  pool.query<Ticket>(
    ticketsQueries(sortOrder).GET,
    [title, date || null, distributor, minPrice, maxPrice],
    (err, result) => {
      if (err) throw err;
      res.json(result.rows);
    }
  );
};

// TODO: rewriting loop into one single complex SQL check might be good option
// also maybe creating controller utils
const patchCart = async (
  req: Request<{}, {}, CartVerificationRequestTO>,
  res: Response<CartVerificationResponseTO>
) => {
  const {
    addedItemId,
    content: { items },
  } = req.body;
  items;
  const client = await pool.connect();
  const row = (await client.query(ticketsQueries().GET_BY_ID, [addedItemId]))
    .rows[0];

  let exceededOrderQuantity = false;
  for (let { id, stackCount } of items) {
    exceededOrderQuantity = !!(
      await client.query(ticketsQueries().CHECK_AVAILABILITY, [
        id,
        id === addedItemId ? stackCount + 1 : stackCount,
      ])
    ).rows.length;
    if (exceededOrderQuantity) {
      throw new HttpError("Exceeded order", 409);
    }
  }

  client.release();

  res.json({
    deliveryCost: 100,
    total: 2999,
    addedItemId: row.id,
    addedItemTitle: row.title,
  });
};

const ticketsController = tryCatchController({
  getTicketById,
  createTicket,
  deleteTicket,
  updateTicket,
  patchTicket,
  exchangeTicket,
  getTickets,
  patchCart,
});

export default ticketsController;
