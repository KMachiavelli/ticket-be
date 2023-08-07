import express from "express";
import ticketsController from "../controllers/tickets";

const router = express.Router();

router.put("/exchange/:id", ticketsController.exchangeTicket);

router.patch("/cart", ticketsController.patchCart);

router.get("/", ticketsController.getTickets);

router.post("/", ticketsController.createTicket);

router
  .route("/:id")
  .get(ticketsController.getTicketById)
  .put(ticketsController.updateTicket)
  .patch(ticketsController.patchTicket)
  .delete(ticketsController.deleteTicket);

export default router;
