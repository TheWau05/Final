import { Router } from 'express';
import { verifyUserHandler } from "../Handlers/handler";

const router = Router();

router.post('/verify', verifyUserHandler);

export default router;
