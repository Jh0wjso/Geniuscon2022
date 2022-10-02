import { CreateOfferController } from "@modules/offers/useCases/createOffer/CreateOfferController";
import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const offersRoutes = Router();

const createOfferController = new CreateOfferController();

offersRoutes.post("/", ensureAuthenticated, createOfferController.handle);

export { offersRoutes };
