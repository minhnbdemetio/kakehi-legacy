import Image from "next/image";
import React, { FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  image: string;
  textImage: string;
  alt: string;
}

export const TopSectionWorkCard: FC<Props> = ({
  image,
  textImage,
  alt,
  children,
}) => {
  return (
    <div className="flex flex-row">
      <div className="relative flex min-w-[150px] items-center justify-center bg-pink-custom-2 px-[15px] py-[57px] font-noto-sans-jp text-1.5xl font-bold text-white">
        <Image src={image} alt={alt} layout="fill" objectFit="cover" />
        <span className="z-10 whitespace-pre-wrap">{textImage}</span>
      </div>
      <div className="flex w-full flex-col justify-center bg-white px-[25px] py-[21px] font-noto-sans-jp text-1.5xl leading-lg">
        {children}
      </div>
    </div>
  );
};
