import { User } from "@modules/accounts/infra/typeorm/entities/User";
import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";

import { OfferImage } from "./OfferImages";

@Entity("offers")
class Offer {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @OneToMany(() => OfferImage, (image) => image.offer, {
    cascade: ["insert", "update"],
  })
  @JoinColumn({ name: "offer_id" })
  offerImages: OfferImage[];

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column()
  user_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Offer };
