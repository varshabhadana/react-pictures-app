import './ImageList.css';
import React from 'react';
import ImageShow from './ImageShow';

function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });

  return <div className="image-List">{renderedImages}</div>;
}

export default ImageList;
