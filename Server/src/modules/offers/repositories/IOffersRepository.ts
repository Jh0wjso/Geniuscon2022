import { ICreateOfferDTO } from "../dtos/ICreateOfferDTO";
import { Offer } from "../infra/typeorm/entities/Offer";

interface IOffersRepository {
  create(data: ICreateOfferDTO): Promise<Offer>;
  findByUserId(user_id: string): Promise<Offer>;
  findById(id: string): Promise<Offer>;
  listAll(): Promise<Offer[]>;
}

export { IOffersRepository };
