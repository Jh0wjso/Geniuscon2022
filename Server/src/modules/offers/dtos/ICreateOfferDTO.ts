interface ICreateOfferDTO {
  id?: string;
  title: string;
  description: string;
  price: number;
  latitude: number;
  longitude: number;
  user_id: string;
}

export { ICreateOfferDTO };
