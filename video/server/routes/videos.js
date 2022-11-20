import express from "express";
import { signup } from "../controllers/auth.js";
import { addVideo,updateVideo,deleteVideo,getVideo, addView, trend, random, sub,tag,search } from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";
const router = express.Router();

router.post("/", verifyToken,addVideo);
router.put("/:id", verifyToken, updateVideo);
router.delete('/:id',verifyToken,deleteVideo)
router.get("/find/:id",getVideo);
router.put("/view/:id", addView);
router.get("/trend", trend);
router.get("/random", random);
router.get("/sub",verifyToken, sub);
router.get("/tags", tag);
router.get("/search", search);
export default router; 
