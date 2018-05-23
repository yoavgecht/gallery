import React from 'react';
export default function GalleryImage({image}) {
  return (
    <div className="gallery-image">
      <div>
        {image ? <img id="mainImage" src={image} /> : null}
      </div>
    </div>
  )
}
