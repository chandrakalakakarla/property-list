import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text, Heading } from "../components";
import DIRECTMESSAGING from "../components/DIRECTMESSAGING";
import Header from "../components/Header";
import Properties from "../components/Properties";

export default function LANDINGPAGEPage() {
  return (
    <>
      <Helmet>
        <title>Real estate</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col w-full pt-10 gap-[120px] sm:pt-5 bg-white-A700">
        <div className="flex flex-col items-center w-full gap-20 mx-auto md:p-5 max-w-[1312px]">
          <Header className="flex self-stretch justify-between items-center" />
          <div className="flex flex-col items-center w-[94%] md:w-full gap-[37px]">
            <div className="flex flex-col self-stretch items-center gap-[26px]">
              <Heading size="md" as="h1" className="flex tracking-[0.72px] text-center">
                <span className="text-blue_gray-900">
                  <>
                    CONNECTING DREAMS TO REALITY
                    <br />
                  </>
                </span>
                <span className="text-teal-400 font-bold italic">
                  <>
                    YOUR PREMIER
                    <br />
                  </>
                </span>
                <span className="text-blue_gray-900">REAL ESTATE MARKETPLACE</span>
              </Heading>
              <Text size="md" as="p" className="!text-blue_gray-900 text-center">
                Where every search ends with a home
              </Text>
            </div>
            <div className="flex sm:flex-col justify-between w-[44%] md:w-full gap-5">
              <Button
                shape="round"
                rightIcon={<Img src="images/img_arrow_forwardresting.svg" alt="Arrow forward_Resting" />}
                className="gap-4 sm:pl-5 tracking-[0.20px] min-w-[224px]"
              >
                Find Your Home
              </Button>
              <Button
                shape="round"
                rightIcon={<Img src="images/img_arrow_forwardresting.svg" alt="Arrow forward_Resting" />}
                className="gap-4 sm:pl-5 tracking-[0.20px] min-w-[240px]"
              >
                List Your Property
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="self-stretch">
            <Img src="images/img_test_1_1.png" alt="test1one_one" className="h-[175px] w-full object-cover" />
            <Img
              src="images/img_rectangle_8299.png"
              alt="image"
              className="h-[640px] w-full rounded-tr-[240px] rounded-tl-[240px] object-cover"
            />
          </div>
          <div className="flex flex-col items-center mt-[118px] gap-5">
            <Heading size="md" as="h2" className="tracking-[0.72px] text-center">
              HOW IT WORKS?
            </Heading>
            <Text size="md" as="p" className="!text-blue_gray-900 text-center">
              Step by Step Guide
            </Text>
          </div>
          <div className="flex md:flex-col justify-between items-center w-full mt-[77px] gap-5 mx-auto md:p-5 max-w-[1000px]">
            <Img src="images/img_image_199.png" alt="image199_one" className="w-[320px] object-cover rounded-[40px]" />
            <div className="flex flex-col w-[60%] md:w-full gap-[17px]">
              <Heading size="s" as="h2">
                Discover Your Perfect Home
              </Heading>
              <Text size="md" as="p" className="!text-blue_gray-900_b2">
                Use our advanced filters to narrow down your search. Specify everything from location to amenities,
                ensuring you find the property that feels right.
              </Text>
              <a href="#">
                <Text size="md" as="p" className="!text-blue_gray-900_b2 underline">
                  Learn More
                </Text>
              </a>
            </div>
          </div>
          <div className="flex md:flex-col justify-between items-center w-full mt-20 gap-5 mx-auto md:p-5 max-w-[1000px]">
            <div className="flex flex-col items-end w-[60%] md:w-full pt-[5px]">
              <Heading size="s" as="h2" className="text-right">
                Showcase Your Property
              </Heading>
              <Text size="md" as="p" className="mt-2.5 !text-blue_gray-900_b2 text-right">
                List your property with ease. Fill in detailed forms to highlight every feature, attracting the perfect
                buyer directly.
              </Text>
              <a href="#" className="mt-[19px]">
                <Text size="md" as="p" className="!text-blue_gray-900_b2 text-right underline">
                  Learn More
                </Text>
              </a>
            </div>
            <Img src="images/img_image_200.png" alt="image200_one" className="w-[320px] object-cover rounded-[40px]" />
          </div>
          <div className="flex md:flex-col justify-between items-center w-full mt-20 gap-5 mx-auto md:p-5 max-w-[1000px]">
            <Img src="images/img_image_201.png" alt="image201_one" className="w-[320px] object-cover rounded-[40px]" />
            <div className="flex flex-col w-[60%] md:w-full gap-[17px]">
              <Heading size="s" as="h2">
                Connect and Communicate
              </Heading>
              <Text size="md" as="p" className="!text-blue_gray-900_b2">
                Our platform facilitates direct communication between buyer and seller, making negotiations transparent
                and straightforward.
              </Text>
              <a href="#">
                <Text size="md" as="p" className="!text-blue_gray-900_b2 underline">
                  Learn More
                </Text>
              </a>
            </div>
          </div>
          <div className="flex md:flex-col justify-between items-center w-full mt-20 gap-5 mx-auto md:p-5 max-w-[1000px]">
            <div className="flex flex-col items-end w-[60%] md:w-full pt-[5px]">
              <Heading size="s" as="h2" className="text-right">
                Seal the Deal Securely
              </Heading>
              <Text size="md" as="p" className="mt-2.5 !text-blue_gray-900_b2 text-right">
                Advance payments made safe. Secure your agreement with confidence, and step closer to your dream
                property.
              </Text>
              <a href="#" className="mt-[19px]">
                <Text size="md" as="p" className="!text-blue_gray-900_b2 text-right underline">
                  Learn More
                </Text>
              </a>
            </div>
            <Img src="images/img_image_202.png" alt="image202_one" className="w-[320px] object-cover rounded-[40px]" />
          </div>
          <div className="flex flex-col self-stretch items-center justify-center mt-[120px] gap-[77px] px-14 py-[71px] md:p-5 bg-teal-50">
            <Heading size="md" as="h2" className="mt-2.5 !font-bold">
              WHY CHOOSE XYZ?
            </Heading>
            <div className="flex md:flex-col w-full mb-[9px] gap-[88px] mx-auto md:p-5 max-w-[1296px]">
              <DIRECTMESSAGING className="flex justify-center items-center w-full mb-60 gap-[23px]" />
              <DIRECTMESSAGING
                one="02"
                searchand="Detailed Listings"
                tailored="Every Detail Matters. Sellers can list, and buyers can explore properties that meet their exact specifications."
                className="flex justify-center items-center w-full mt-20 mb-40 gap-[23px]"
              />
              <DIRECTMESSAGING
                one="03"
                searchand="Direct Messaging"
                tailored="Seamless Communication. Connect directly with sellers or buyers to ask questions, negotiate, and make decisions."
                className="flex justify-center items-center w-full mt-60 gap-[23px]"
              />
              <DIRECTMESSAGING
                one="04"
                searchand="Secure Payments"
                className="flex justify-center items-center w-full mt-20 mb-40 gap-[23px]"
              />
            </div>
          </div>
          <div className="self-stretch h-[1086px] mt-[120px] relative">
            <div className="justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
              <Img
                src="images/img_rectangle_8302.png"
                alt="image_one"
                className="h-[235px] w-full z-[1] object-cover"
              />
              <Img
                src="images/img_image_203_flattened.png"
                alt="image203_one"
                className="h-[862px] w-full mt-[-11px] object-cover"
              />
            </div>
            <div className="flex flex-col items-center w-[67%] gap-10 top-[11%] right-0 left-0 m-auto absolute">
              <div className="flex flex-col self-stretch items-center gap-6">
                <Heading size="md" as="h2" className="flex tracking-[0.72px] text-center">
                  <span className="text-blue_gray-900">YOUR </span>
                  <span className="text-blue_gray-900 font-semibold italic">TRUSTED</span>
                  <span className="text-blue_gray-900">
                    <>
                      {" "}
                      PARTNER IN
                      <br />
                      THE FUTURE{" "}
                    </>
                  </span>
                  <span className="text-blue_gray-900 font-semibold italic">OF HOUSING</span>
                </Heading>
                <Text size="md" as="p" className="w-[82%] md:w-full !text-blue_gray-900 text-center !leading-[26px]">
                  Our partnerships with governments and local banks ensure that our housing prices are affordable enough
                  for our target market.
                </Text>
              </div>
              <Button
                shape="round"
                rightIcon={<Img src="images/img_arrow_forwardresting.svg" alt="Arrow forward_Resting" />}
                className="gap-4 sm:pl-5 tracking-[0.20px] min-w-[323px]"
              >
                Join Our Community Today
              </Button>
            </div>
          </div>
          <Properties className="self-stretch mt-20 px-14 py-[63px] md:p-5 bg-blue_gray-900" />
        </div>
      </div>
    </>
  );
}
