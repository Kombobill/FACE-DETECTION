import React from "react";
// Pass imageUrl to FaceDetect component
const FaceDetect = ({ imageUrl }) => {
  return (
  //This div is the container that is holding our fetch image and the face detect box
    <div className="center ma">
      <div className="absolute mt2">
                        # we set our image SRC to the url of the fetch image 
        <img alt="" src={imageUrl} width="500px" heigh="auto" />
      </div>
    </div>
  );
};
export default FaceDetect;