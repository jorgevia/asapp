import express from 'express';
import { cities } from '../controllers';

const router = express.Router();

router.get('/cities', cities);

export default router;
