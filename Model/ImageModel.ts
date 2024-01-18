import mongoose from "mongoose"
import { Image } from "./imageInterface"

interface iImage extends Image, mongoose.Document{}

const imageModel = new mongoose.Schema({
   image : {
    type: String
   } ,
   imageID: {
    type: String
   },
},
{timestamps : true}
)

export default mongoose.model<iImage>("images", imageModel)