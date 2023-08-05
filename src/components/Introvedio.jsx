import React from 'react'
import Vedio from "../assests/MBA Chai Wala.mp4"

const Introvedio = () => {
  return  (
   <div className="style">

   <video src={Vedio} muted autoPlay loop controlsList='nodownloads'></video>
   <div> </div>
    </div>
  );
}

export default Introvedio