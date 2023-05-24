import React, { useState } from "react";

const Card = ({
  title,
  description,
  handleDelete,
  handleComplete,
  complete,
}) => {
  const [isComplete, setIsComplete] = useState(complete);

  const toggleComplete = () => {
    setIsComplete(!isComplete);
    handleComplete();
  };

  return (
    <div
      className={`border-2 border-[#c89666] w-full h-[150px] px-[10px] overflow-y-auto rounded-md flex flex-col justify-center ${
        isComplete ? "" : ""
      }`}
    >
      <p className="text-[20px] font-medium text-[#fff]">{title}</p>
      <p className="text-[20px] font-medium text-[#fff]">{description}</p>
      <div className="flex flex-row gap-2 mt-5">
        <button
          className={`py-[10px] px-[20px] text-[16px] font-medium rounded-md shadow-current ${
            isComplete ? "bg-[#3ea99a]" : "bg-[#f1af71]"
          }`}
          onClick={toggleComplete}
        >
          {isComplete ? "Completed" : "Complete"}
        </button>
        <button
          className="py-[10px] px-[20px] text-[16px] font-medium rounded-md bg-[#f1af71] shadow-current"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
