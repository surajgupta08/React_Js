import React from "react";
import RightCard from "./RightCard";

const RightContent = ({ users }) => {
  console.log(users);

  return (
    <div id="right" className="h-full flex rounded-4xl flex-nowrap overflow-x-auto gap-10 p-6 w-2/3">
      {users.map((elem, idx) => (
        <RightCard
          key={idx}
          id={idx}
          img={elem.img}
          tag={elem.tag}
          color={elem.color}
        />
      ))}
    </div>
  );
};

export default RightContent;