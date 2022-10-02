import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { offersRoutes } from "./offers.routes";
import { passwordRoutes } from "./password.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/password", passwordRoutes);
router.use("/offers", offersRoutes);
router.use(authenticateRoutes);

export { router };
