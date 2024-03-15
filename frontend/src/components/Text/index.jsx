import React from "react";

const sizes = {
  xs: "text-sm font-normal leading-[17px]",
  lg: "text-[80px] font-light leading-[96px]",
  s: "text-base font-normal",
  md: "text-xl font-normal leading-6",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-400 font-lato ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
