import express from "express";
import { dislike, getUser, like, remove, subscribe, unsubscribe, update } from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";
const router= express.Router()

router.put("/:id",verifyToken,update)
router.get('/find/:id',getUser)
router.put('/sub/:id',verifyToken,subscribe)
router.put("/unsub/:id", verifyToken,unsubscribe);
router.delete('/:id',verifyToken,remove)
router.put("/like/:id", verifyToken, like);
router.put("/dislike/:id", verifyToken, dislike);

export default router