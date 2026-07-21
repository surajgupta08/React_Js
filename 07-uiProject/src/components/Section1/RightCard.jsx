import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = ({ img, id, tag, color }) => {
  return (
    <div className="h-full shrink-0 overflow-hidden relative w-80 rounded-4xl">
      <img className="h-full w-full object-cover" src={img} alt="" />
      <RightCardContent id={id} tag={tag} color={color} />
    </div>
  );
};

export default RightCard;