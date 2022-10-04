import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateOfferUseCase } from "./CreateOfferUseCase";

class CreateOfferController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const { title, description, price, latitude, longitude } = request.body;

    const createOfferUseCase = container.resolve(CreateOfferUseCase);

    const offer = await createOfferUseCase.execute({
      title,
      description,
      price,
      latitude,
      longitude,
      user_id: id,
    });

    return response.status(201).json(offer);
  }
}

export { CreateOfferController };
