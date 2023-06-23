import React from "react";

export enum TitleVariant {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
}

type TitleProps = {
  children: React.ReactNode;
  variant?: TitleVariant;
};

const Title = ({ children, variant = TitleVariant.h1 }: TitleProps) => {
  const TitleVariant = variant;

  return (
    <TitleVariant className="m-0 p-0 text-xl font-bold text-white">
      {children}
    </TitleVariant>
  );
};

export default Title;
