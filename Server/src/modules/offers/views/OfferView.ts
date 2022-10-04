import { Offer } from "../infra/typeorm/entities/Offer";
import OfferImagesView from "./OfferImagesView";

export default {
  render(offer: Offer) {
    return {
      id: offer.id,
      name: offer.title,
      description: offer.description,
      price: offer.price,
      offerImages: OfferImagesView.renderMany(offer.offerImages),
    };
  },

  renderMany(offer: Offer[]) {
    return offer.map((offer) => this.render(offer));
  },
};
