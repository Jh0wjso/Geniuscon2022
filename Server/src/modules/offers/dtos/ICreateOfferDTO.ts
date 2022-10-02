interface ICreateOfferDTO {
  id?: string;
  title: string;
  description: string;
  price: number;
  user_id: string;
}

export { ICreateOfferDTO };
