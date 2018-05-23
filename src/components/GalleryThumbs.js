import React from 'react';
import AddImage from './AddImage'
export default function GalleryThumbs({images, selectImage}) {
  return (
    <div className="image-scroller">
      {images.map((image, index) => (
        <div key={index} onClick={selectImage.bind(this, image)}>
          <img src={image} id={index} width='54' height='54'/>
        </div>
      ))}
      <AddImage/>
    </div>
  )
}