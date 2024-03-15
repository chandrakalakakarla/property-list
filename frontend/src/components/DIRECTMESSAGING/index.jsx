import React from "react";
import { Text, Heading } from "./..";

export default function DIRECTMESSAGING({
  one = "01",
  searchand = "Search and Filters",
  tailored = "Tailored Searches to meet your needs. Find what you’re looking for with precision.",
  ...props
}) {
  return (
    <div {...props}>
      <div className="h-full w-px bg-gradient" />
      <div className="flex flex-col gap-16 flex-1">
        <div className="flex flex-col items-start gap-[39px]">
          <div className="flex flex-col items-start gap-[3px]">
            <Text size="lg" as="p" className="!text-blue_gray-900">
              {one}
            </Text>
            <Heading as="h1" className="uppercase">
              {searchand}
            </Heading>
          </div>
          <div className="h-[16px] w-[16px] bg-teal-400 rounded" />
        </div>
        <Text as="p" className="!text-blue_gray-900_b2">
          {tailored}
        </Text>
      </div>
    </div>
  );
}
