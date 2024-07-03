import e from "express";
import { createListing,deleteListing } from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = e.Router()

router.post('/create', verifyToken, createListing)
router.delete('/delete/:id', verifyToken, deleteListing)

export default router