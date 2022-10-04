import { ICreateOfferDTO } from "@modules/offers/dtos/ICreateOfferDTO";
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
    latitude,
    longitude,
    offerImages,
    user_id,
  }: ICreateOfferDTO): Promise<void> {
    const offer = await this.offersRepositories.create({
      title,
      description,
      price,
      latitude,
      longitude,
      offerImages,
      user_id,
    });
  }
}

export { CreateOfferUseCase };
