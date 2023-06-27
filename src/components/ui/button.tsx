import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  className?: string;
};

const Button = ({ children, type, disabled, className }: ButtonProps) => {
  return (
    <button
      className={`${className ? className + " " : ""}
        active:bg-violet-70 flex items-center justify-center 
        rounded bg-violet-600 px-6 pb-2 pt-2.5 text-xs font-medium 
        uppercase leading-normal text-white transition duration-150  
        ease-in-out hover:bg-violet-700 focus:bg-violet-600 
        focus:outline-none focus:ring-0`}
      type={type ?? "button"}
      disabled={disabled ?? false}
    >
      {children}
    </button>
  );
};

export default Button;
