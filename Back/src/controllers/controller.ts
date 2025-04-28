import { usuario } from '../DB/type/data';
import { usuarios_registrados } from '../DB/userdata';


export const findUser = async (user: string, contraseña: string): Promise<usuario | null> => {
  const foundUser = usuarios_registrados.find((u) => u.user === user && u.contraseña === contraseña);
  return foundUser || null;
};
