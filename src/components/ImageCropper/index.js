// ImageCropper.js

import React, { useState } from 'react'
import Cropper from 'react-easy-crop'
import { getCroppedImg } from './cropImage'

const ImageCropper = ({ getBlob, inputImg }) => {
    const [crop, setCrop] = useState({ x: 305, y: 172 })
    const [zoom, setZoom] = useState(1)

    const initialCroppedAreaPixels = { width: 305, height: 172, x: 305, y: 172}

    /* onCropComplete() will occur each time the user modifies the cropped area, 
    which isn't ideal. A better implementation would be getting the blob 
    only when the user hits the submit button, but this works for now  */
    const onCropComplete = async (_, croppedAreaPixels) => {
        console.log("AQui essa porra", croppedAreaPixels)
        const croppedImage = await getCroppedImg(
            inputImg,
            croppedAreaPixels
        )
        getBlob(croppedImage)
    }

    const cropSize = { width: 305, height: 172 }


    return (
        /* need to have a parent with `position: relative` 
    to prevent cropper taking up whole page */
        <div className='cropper'>
            <Cropper
                image={inputImg}
                cropSize={cropSize}
                crop={crop}
                zoom={zoom}
                aspect={4/3}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
                initialCroppedAreaPixels={initialCroppedAreaPixels}
            />
        </div>
    )
}

export default ImageCropper