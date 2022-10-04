import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

import { Offer } from "./Offer";

@Entity("offerImages")
class OfferImage {
  @PrimaryGeneratedColumn("increment")
  id: string;

  @Column()
  path: string;

  @ManyToOne(() => Offer, (offer) => offer.offerImages)
  @JoinColumn({ name: "offer_id" })
  offer: Offer;
}

export { OfferImage };
