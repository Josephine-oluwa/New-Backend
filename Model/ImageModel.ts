import mongoose from "mongoose"

interface Image {
    image: string;
    imageID: string
}

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