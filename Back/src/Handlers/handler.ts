import { Request, Response, NextFunction } from "express";
import { findUser } from "../controllers/controller";

export const verifyUserHandler = async (req: Request, res: Response, next: NextFunction) => {
  const { user, contraseña } = req.body;

  try {
    const foundUser = await findUser(user, contraseña);

    if (foundUser) {
      res.status(200).json({ 
        message: 'Access granted', 
        redirectTo: '/fill-data', 
        Nombre: foundUser.Nombre,
        Numero_U: foundUser.Numero_U
      });
    } else {
      res.status(401).json({ 
        message: 'Access denied' 
      });
    }
  } catch (error) {
    next(error); 
  }
};
