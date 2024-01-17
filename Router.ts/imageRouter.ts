import express from "express"
import { postImage, getAllImage, getOneImage } from "../controller/imageController"
import multer from "multer"

const upload = multer().single("image")

const router = express.Router()

router.route("/post-image").post(upload, postImage)
router.route("/get-images").get(getAllImage)
router.route("/get-image").get(getOneImage)

export default router;