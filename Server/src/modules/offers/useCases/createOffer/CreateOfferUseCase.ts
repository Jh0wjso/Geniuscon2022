import { ICreateOfferDTO } from "@modules/offers/dtos/ICreateOfferDTO";
import { Offer } from "@modules/offers/infra/typeorm/entities/Offer";
import { IOffersRepository } from "@modules/offers/repositories/IOffersRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateOfferUseCase {
  constructor(
    @inject("OffersRepository")
    private offersRepositories: IOffersRepository
  ) {}

  async execute({
    title,
    description,
    price,
    user_id,
  }: ICreateOfferDTO): Promise<Offer> {
    const offer = await this.offersRepositories.create({
      title,
      description,
      price,
      user_id,
    });

    return offer;
  }
}

export { CreateOfferUseCase };
