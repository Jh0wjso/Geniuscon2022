import { Response, Request } from "express";
import { container } from "tsyringe";

import { ListAllOffersUseCase } from "./ListAllOffersUseCase";

class ListAllOffersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllOffersUseCase = container.resolve(ListAllOffersUseCase);

    const offers = await listAllOffersUseCase.execute();

    return response.status(201).json(offers);
  }
}

export { ListAllOffersController };
