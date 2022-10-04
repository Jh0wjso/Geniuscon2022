import { Offer } from "@modules/offers/infra/typeorm/entities/Offer";
import { IOffersRepository } from "@modules/offers/repositories/IOffersRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListAllOffersUseCase {
  constructor(
    @inject("OffersRepository")
    private offersRepositories: IOffersRepository
  ) {}

  async execute(): Promise<Offer[]> {
    return this.offersRepositories.listAll();
  }
}

export { ListAllOffersUseCase };
