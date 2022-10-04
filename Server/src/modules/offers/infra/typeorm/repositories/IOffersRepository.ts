import { ICreateOfferDTO } from "@modules/offers/dtos/ICreateOfferDTO";
import { getRepository, Repository } from "typeorm";

import { Offer } from "../entities/Offer";

class OffersRepository implements OffersRepository {
  private repository: Repository<Offer>;

  constructor() {
    this.repository = getRepository(Offer);
  }

  async create({
    id,
    title,
    description,
    price,
    latitude,
    longitude,
    user_id,
  }: ICreateOfferDTO): Promise<void> {
    const offer = this.repository.create({
      id,
      title,
      description,
      price,
      latitude,
      longitude,
      user_id,
    });

    await this.repository.save(offer);
  }

  async findByUserId(user_id: string): Promise<Offer> {
    const offer = await this.repository.findOne({ user_id });

    return offer;
  }

  async findById(id: string): Promise<Offer> {
    const offer = await this.repository.findOne(id);

    return offer;
  }

  async list(): Promise<Offer[]> {
    const offers = await this.repository.find();

    return offers;
  }
}

export { OffersRepository };
