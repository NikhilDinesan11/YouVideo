import express from "express";
const router = express.Router();
import {verifyToken} from "../verifyToken.js"
import {addComment,getComment,deleteComment} from "../controllers/comment.js"

router.post("/",verifyToken,addComment);
router.get("/:videoId", getComment);
router.delete("/:id", verifyToken, deleteComment);



export default router;
