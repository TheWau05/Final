import { Request, Response } from "express";
import { findUser } from "../controllers/controller";


export const verifyUserHandler = async (req: Request, res: Response): Promise<Response> => {
  const { user, contraseña } = req.body;

  try {
    const foundUser = await findUser(user, contraseña);

    if (foundUser) {
      return res.status(200).json({ 
        message: 'Access granted', 
        redirectTo: '/fill-data', 
        Nombre: foundUser.Nombre,
        Numero_U: foundUser.Numero_U
      });
    } else {
      return res.status(401).json({ 
        message: 'Access denied' 
      });
    }
  } catch (error) {
    return res.status(500).json({ 
      message: 'Server error', 
      error
    });
  }
};
