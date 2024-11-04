import React from 'react'
import Banner from "../assets/banner.jpg";
const BannerImagePart = () => {
  return (
    <div>
       <div className="mt-[-84px] xl:mt-[-190px] lg:mt-[-190px] md:mt-[-190px] bg-customWhite backdrop-blur-[-6px] w-[340px] xl:w-[920px] lg:w-[683px] md:w-[530px] mx-auto p-3 rounded-2xl border-2 border-white">
          <div>
            <img
              className="w-full h-[210px] xl:h-[486px] lg:h-[405px] md:h-[333px] mx-auto rounded-2xl"
              src={Banner}
            />
          </div>
        </div>
    </div>
  )
}

export default BannerImagePart
