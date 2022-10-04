import uploadConfig from "@config/upload";
import { CreateOfferController } from "@modules/offers/useCases/createOffer/CreateOfferController";
import { ListAllOffersController } from "@modules/offers/useCases/listAllOffers/ListAllOffersController";
import { Router } from "express";
import multer from "multer";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const offersRoutes = Router();

const uploadOfferImages = multer(uploadConfig.upload("./tmp/offerImages"));

const createOfferController = new CreateOfferController();
const listAllOffersController = new ListAllOffersController();

offersRoutes.post(
  "/",
  ensureAuthenticated,
  uploadOfferImages.array("offerImages"),
  createOfferController.handle
);
offersRoutes.get("/list", listAllOffersController.handle);

export { offersRoutes };
