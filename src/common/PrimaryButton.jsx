
import React from "react";

const PrimaryButton = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="my-4 py-2 px-3 bg-[#00B386] text-white rounded-lg"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
