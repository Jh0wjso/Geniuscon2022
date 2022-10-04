import { ICreateOfferDTO } from "@modules/offers/dtos/ICreateOfferDTO";
import { IOffersRepository } from "@modules/offers/repositories/IOffersRepository";
import { getRepository, Repository } from "typeorm";

import { Offer } from "../entities/Offer";

class OffersRepository implements IOffersRepository {
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
    offerImages,
    user_id,
  }: ICreateOfferDTO): Promise<Offer> {
    const offer = this.repository.create({
      id,
      title,
      description,
      price,
      latitude,
      longitude,
      offerImages,
      user_id,
    });

    await this.repository.save(offer);

    return offer;
  }

  async findByUserId(user_id: string): Promise<Offer> {
    const offer = await this.repository.findOne({ user_id });

    return offer;
  }

  async findById(id: string): Promise<Offer> {
    const offer = await this.repository.findOne(id);

    return offer;
  }

  async listAll(): Promise<Offer[]> {
    const offers = await this.repository.find({
      relations: ["offerImages"],
    });

    return offers;
  }
}

export { OffersRepository };
