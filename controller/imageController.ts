import {Response} from "express"
import ImageModel from "../Model/ImageModel"
import { streamUpload } from "../Utils/stream"
import {HTTP} from "../Error/mainError"



export const postImage = async (req: any, res: Response) => {
    try {
        const {secure_url, public_id} : any = await streamUpload(req)

        const Image = await ImageModel.create({
            image: secure_url,
            imageID: public_id
        })
        return res.status(HTTP.OK).json({
            message: "Image has successfully been uploaded",
            data: Image
        })
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
    message: "unable to post image",
    data: error.message
        })
    }
}

export const getAllImage = async (req: any, res: Response) => {
    try {
       const image = await ImageModel.find()
       
       return res.status(HTTP.OK).json({
        message: "All Images Found",
        data: image
       })
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message: "unable to get images"
                })
    }
}



export const getOneImage = async (req: any, res: Response) => {
    try {
        const {imageID} = req.params;

        const image = await ImageModel.findById(imageID)

        return res.status(HTTP.OK).json({
            message: "one image has been found",
            data: image
        })
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message: "unable to get one image",
            data: error.message
        })
    }
}