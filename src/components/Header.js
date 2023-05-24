import React from "react";

const Header = ({ handleAdd }) => {
  return (
    <div className="flex flex-row justify-between items-center px-10">
      <p className="text-[#fff]  my-[30px] text-[35px] font-semibold">
        TASK MANAGER
      </p>
      <button
        className="py-[15px] px-[20px] text-[16px] font-bold rounded-md bg-[#f1af71]"
        onClick={handleAdd}
      >
        ADD
      </button>
    </div>
  );
};

export default Header;
