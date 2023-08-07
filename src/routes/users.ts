import express, { Request, Response } from "express";
import { usersController } from "../controllers/users";
import { getUserById } from "../middleware/users";
import { verifyToken } from "../middleware/auth";

const router = express.Router();

router.post("/", usersController.addUser);

router.post("/authenticate", usersController.authenticateUser);

router.get("/test", verifyToken, (req: any, res: any) => {
  // check this error handling btw
  console.log(req.user);
  res.send();
});

router
  .route("/:id")
  .get(getUserById, usersController.getUser)
  .patch(getUserById, usersController.patchUser)
  .put(getUserById, usersController.updateUser)
  .delete(getUserById, usersController.deleteUser);

export default router;
