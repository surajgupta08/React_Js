import React from "react";

const RightCardContent = (props) => {
  return (
    <div className="absolute h-full w-full top-0 left-0 p-10 flex flex-col justify-between">
      <h2 className="bg-white rounded-full h-12 w-12 flex justify-center items-center text-2xl font-semibold">
        {props.id + 1}
      </h2>

      <div>
        <p className="text-xl text-shadow-blue-300 leading-relaxed mb-14 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
          recusandae deleniti ab, aspernatur neque voluptatum!
        </p>

        <div className="flex justify-between">
          <button style={{backgroundColor:props.color}} className=" text-white font-medium px-8 py-3 rounded-full">
            {props.tag}
          </button>

          <button style={{backgroundColor:props.color}} className=" text-white font-medium px-4 py-3 rounded-full">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
