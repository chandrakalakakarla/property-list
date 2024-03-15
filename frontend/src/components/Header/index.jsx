import React from "react";
import { Button, Text } from "./..";

export default function Header({ ...props }) {
  return (
    <header {...props}>
      <div className="flex md:flex-col justify-between items-center w-full gap-5 mx-auto md:p-5 max-w-[897px]">
        <Text as="p" className="flex !text-blue_gray-900 tracking-[0.16px]">
          <span className="text-blue_gray-900 text-[40px] font-extrabold">XYZ</span>
          <span className="text-blue_gray-900 text-[40px]">&nbsp;</span>
          <span className="text-blue_gray-900 tracking-[1.60px] text-[40px] font-light italic">INDUSTRIES</span>
        </Text>
        <div className="flex justify-between items-center w-[54%] md:w-full gap-5 p-4 bg-blue_gray-900 rounded-[33px]">
          <a href="#" className="ml-4">
            <Text as="p" className="tracking-[0.16px]">
              Home
            </Text>
          </a>
          <a href="#">
            <Text as="p" className="tracking-[0.16px]">
              About Us
            </Text>
          </a>
          <div className="flex justify-center w-[19%] p-[5px]">
            <Text as="p" className="self-end mt-[3px] tracking-[0.16px]">
              Property
            </Text>
          </div>
          <a href="#">
            <Text as="p" className="tracking-[0.16px]">
              Services
            </Text>
          </a>
          <a href="#" className="mr-4">
            <Text as="p" className="tracking-[0.16px]">
              Contact
            </Text>
          </a>
        </div>
      </div>
      <div className="flex justify-center w-[18%] gap-6">
        <Button
          color="blue_gray_900"
          variant="outline"
          shape="round"
          className="w-full sm:pl-5 text-blue_gray-900 tracking-[0.20px]"
        >
          Sign Up
        </Button>
        <Button shape="round" className="w-full sm:pl-5 tracking-[0.20px]">
          Sign In
        </Button>
      </div>
    </header>
  );
}
