// import React from "react";
function ImageShow(prop) {
  const { image } = prop;
  return (
    <div className="image_block">
      <img src={image?.urls?.small} alt={image?.alt_description} />
    </div>
  );
}
export default ImageShow;
