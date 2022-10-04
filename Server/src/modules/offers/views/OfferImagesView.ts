import { OfferImage } from "../infra/typeorm/entities/OfferImages";

export default {
  render(image: OfferImage) {
    return {
      id: image.id,
      url: `localhost:3333/offer/images/${image.path}`,
    };
  },

  renderMany(image: OfferImage[]) {
    return image.map((image) => this.render(image));
  },
};
