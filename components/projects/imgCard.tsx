import React from 'react'
import Image from "next/image";

const ImgCard = ({ Img } : { Img: string}) => {
  return (
    <>
    <div className="bg-[#1A1A1A] rounded-[12px] w-full h-[343px] lg:w-[450px] lg:h-[450px]  xl:w-[520px] xl:h-[520px] hidden sm:block relative">
    <Image
      className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] sm:w-[430px] sm:h-[223px] md:w-[500px] md:h-[260px] lg:w-[430px] lg:h-[223px]  xl:w-[500px] xl:h-[260px] rounded-[12px]"
      src={Img}
      alt="live chat"
      width={500}
      height={260}
    />
  </div>
  <Image
      className="sm:hidden w-full h-[178px] rounded-[12px]"
      src={Img}
      alt="live chat"
      width={500}
      height={260}
    />
    </>
  )
}

export default ImgCard
