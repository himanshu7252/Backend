import {v2 as cloudinary } from 'cloudinary'
import fs from "fs"
import { fileURLToPath } from 'url';

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//cloudinary.uploader.upload("https://share.google/images/oGC0ls60ri17hxmBo", {public_id: 'a_tea_cup'}, function(error, result) {console.log(result);});

const uploadToCloudinary = async(localFilePath) => {
    try{
        if (!localFilePath) return null;
        // Upload file to cloudinary

        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        fs.unlinkSync(localFilePath)
        return response;    
    } catch(error){
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed 
        return null;
    }
}

export {uploadToCloudinary}