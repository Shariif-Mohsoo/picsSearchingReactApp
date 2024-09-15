// import React from "react";
import ImageShow from "./ImageShow";
import "./ImageList.css";
function ImageList(prop) {
  const { images } = prop;
  const renderImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });
  return <div className="image_list">{renderImages}</div>;
}
export default ImageList;
