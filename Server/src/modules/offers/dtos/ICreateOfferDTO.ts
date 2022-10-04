interface ICreateOfferDTO {
  id?: string;
  title: string;
  description: string;
  price: number;
  latitude: number;
  longitude: number;
  offerImages?: any;
  user_id: string;
}

export { ICreateOfferDTO };
