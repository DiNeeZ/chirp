import React from "react";

type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button
      className="active:bg-violet-70 inline-block rounded bg-violet-600
      px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal  
      text-white transition duration-150 ease-in-out  
      hover:bg-violet-700 focus:bg-violet-600 
      focus:outline-none focus:ring-0"
    >
      {children}
    </button>
  );
};

export default Button;
