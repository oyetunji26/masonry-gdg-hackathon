import React from "react";

const Card = ({image}) => {
    console.log(image)
  return (
    <div className="border relative rounded-2xl flex-1 break-inside-avoid border-gray-200 cursor-pointer md:w-full w-full hover:shadow-lg dark:border-none dark:bg-[#1E1E1E] rounded-lg;">
      <img className="size-full rounded-lg" src={`/${image}`} />
      <div className=" absolute bottom-2.5 left-2.5">
        <h3 className="text-white font-bold -mb-1 text-left">Add card title</h3>
        <p className="text-white/85 text-sm">Description goes here</p>
      </div>
    </div>
  );
};

export default Card;
