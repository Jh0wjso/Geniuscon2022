import { CreateOfferController } from "@modules/offers/useCases/createOffer/CreateOfferController";
import { ListAllOffersController } from "@modules/offers/useCases/listAllOffers/ListAllOffersController";
import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const offersRoutes = Router();

const createOfferController = new CreateOfferController();
const listAllOffersController = new ListAllOffersController();

offersRoutes.post("/", ensureAuthenticated, createOfferController.handle);
offersRoutes.get("/list", listAllOffersController.handle);

export { offersRoutes };
