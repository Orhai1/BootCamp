import React, { useState } from "react";

const Ex1= () => {
  const [gallery, setGallery] = useState({
    images: [
    "https://hips.hearstapps.com/hmg-prod/images/lychee-fruit-sugar-1530136136.jpg?crop=1xw:1xh;center,top&resize=640:*",
    "https://hips.hearstapps.com/hmg-prod/images/mango-fruit-sugar-1530136260.jpg?crop=1xw:1xh;center,top&resize=640:*",
    "https://hips.hearstapps.com/hmg-prod/images/cherries-sugar-fruit-1530136329.jpg?crop=1xw:1xh;center,top&resize=640:*",
  ],
      currentImg: 0
  });

 
  const shiftImageBack = () => {
    setGallery((prev) => ({
      ...prev,
      currentImg:
        prev.currentImg === 0 ? prev.images.length - 1 : prev.currentImg - 1
    }));
  };


  const shiftImageForward = () => {
    setGallery((prev) => ({
      ...prev,
      currentImg:
        prev.currentImg === prev.images.length - 1 ? 0 : prev.currentImg + 1
    }));
  };

  return (
    <div>
      <button className="back" onClick={shiftImageBack}>
        Previous
      </button>

      <img
        src={gallery.images[gallery.currentImg]} />

      <button className="forward" onClick={shiftImageForward}>
        Next
      </button>
    </div>
  );
}
export default Ex1;
