import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateOfferUseCase } from "./CreateOfferUseCase";

class CreateOfferController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const { title, description, price, latitude, longitude } = request.body;
    const requestImages = request.files as Express.Multer.File[];

    const offerImages = requestImages.map((image) => {
      return { id: image.filename.length, path: image.filename };
    });

    const createOfferUseCase = container.resolve(CreateOfferUseCase);

    const offer = await createOfferUseCase.execute({
      title,
      description,
      price,
      latitude,
      longitude,
      offerImages,
      user_id: id,
    });

    return response.status(201).json(offer);
  }
}

export { CreateOfferController };
