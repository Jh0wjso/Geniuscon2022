interface ICreateUserDTO {
  name: string;
  password: string;
  email: string;
  telefone: string;
  id?: string;
  avatar?: string;
}

export { ICreateUserDTO };
