import { ICreateOfferDTO } from "../dtos/ICreateOfferDTO";
import { Offer } from "../infra/typeorm/entities/Offer";

interface IOffersRepository {
  create(data: ICreateOfferDTO): Promise<void>;
  findByUserId(user_id: string): Promise<Offer>;
  findById(id: string): Promise<Offer>;
  list(): Promise<Offer[]>;
}

export { IOffersRepository };
