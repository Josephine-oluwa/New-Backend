import express from "express"
import { postImage, getAllImage, getOneImage } from "../controller/imageController"
import { image } from "../Utils/multer"


const router = express.Router()


router.route("/post-image").post(image, postImage)
router.route("/get-images").get(getAllImage)
router.route("/get-image").get(getOneImage)

export default router;