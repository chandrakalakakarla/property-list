import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[29px]",
};
const variants = {
  outline: {
    blue_gray_900: "border-blue_gray-900 border border-solid",
    white_A700: "border-white-A700 border border-solid",
  },
  fill: {
    blue_A200: "bg-blue-A200 text-white-A700",
  },
};
const sizes = {
  xs: "h-[42px] px-[35px] text-base",
  sm: "h-[58px] pl-6 pr-4 text-xl",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "fill",
  size = "sm",
  color = "blue_A200",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["blue_gray_900", "white_A700", "blue_A200"]),
};

export { Button };
