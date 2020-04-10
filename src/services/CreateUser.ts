// Definir a tipagem de um conjunto de dados
interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  techs: Array<string | TechObject>; // string[] - Para um array somente de Strings
}

export default function createUser({ name, email, password, techs }: CreateUserData) {
  const user = {
    name,
    email,
    password,
    techs,
  };

  return user;
}