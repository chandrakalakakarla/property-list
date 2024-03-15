import React from "react";

const sizes = {
  s: "text-5xl font-semibold",
  md: "text-7xl font-extrabold leading-[80px]",
  xs: "text-xl font-semibold leading-6",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue_gray-900 font-lato ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
