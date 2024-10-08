import express from 'express'
import  { google, signin, signup, signOut } from '../controllers/auth.controller.js'

const router = express.Router();

router.post("/sign-up", signup);
router.post("/sign-in", signin);
router.post("/google", google)
router.get('/signout', signOut)


export default router;