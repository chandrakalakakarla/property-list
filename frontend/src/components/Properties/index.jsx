import React, { useEffect, useState } from "react"

import { Text, Img, Button, Input, Heading } from "./..";
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default function Properties({ ...props }) {



  const history = useNavigate();

  const [email, setEmail] = useState('')
  const [disableCTA, setDisableCTA] = useState(true)


  const submit = async (e) => {
    console.log("hi email", email)

    try {

      await axios.post("./api/subscribers", { email }
      )
        .then(e => {
          alert("subscription successful")

        })
        .catch(e => {
          alert("subscription failed")
          console.log(e);
        })

    }
    catch (e) {
      console.log(e);

    }

  };
  const handleEmailChange = (value) => {
    setEmail(value)
    if (pattern.test(value)) {
      setDisableCTA(false)
    }
  }

  return (
    <footer {...props}>
      <form>
        <div className="flex flex-col justify-center w-full gap-[58px] mx-auto my-[17px] md:p-5 max-w-[1312px]">
          <div className="flex justify-center w-[98%] md:w-full">
            <div className="flex md:flex-col justify-between items-start w-full gap-5">
              <div className="flex flex-col items-start w-[25%] md:w-full mt-[5px] gap-[34px]">
                <Text as="p" className="flex !text-white-A700 tracking-[0.16px]">
                  <span className="text-white-A700 text-[40px] font-extrabold">XYZ</span>
                  <span className="text-white-A700 text-[40px]">&nbsp;</span>
                  <span className="text-white-A700 tracking-[1.60px] text-[40px] font-light italic">INDUSTRIES</span>
                </Text>
                <Text as="p" className="leading-5">
                  XYZ Industries: Where real estate dreams meet seamless transactions, transforming aspirations into
                  achievements.
                </Text>
                <Button
                  color="white_A700"
                  variant="outline"
                  shape="round"
                  rightIcon={<Img src="images/img_arrow_forwardresting.svg" alt="Arrow forward_Resting" />}
                  className="gap-4 sm:pl-5 text-white-A700 tracking-[0.20px] min-w-[168px]"
                >
                  EXPLORE
                </Button>
              </div>
              <div className="flex md:flex-col justify-between items-start w-[60%] md:w-full gap-5">
                <div className="flex flex-col items-start pt-0.5 gap-[21px]">
                  <Heading as="h5" className="!text-white-A700">
                    Quick Links
                  </Heading>
                  <div className="flex flex-col items-start gap-2">
                    <a href="#">
                      <Text as="p">About Us</Text>
                    </a>
                    <Text as="p">Blog</Text>
                    <a href="#">
                      <Text as="p">Testimonials</Text>
                    </a>
                    <a href="#">
                      <Text as="p">Terms and Conditions</Text>
                    </a>
                    <a href="#">
                      <Text as="p">Privacy Policy</Text>
                    </a>
                    <a href="#">
                      <Text as="p">Site Map</Text>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-start w-[21%] md:w-full pt-0.5 gap-[21px]">
                  <Heading as="h5" className="!text-white-A700">
                    Customer Support
                  </Heading>
                  <div className="flex flex-col w-[85%] md:w-full gap-[9px]">
                    <a href="#">
                      <Text as="p">Feedback</Text>
                    </a>
                    <div className="flex flex-col gap-1.5">
                      <Text as="p">Report a Problem</Text>
                      <div className="flex pt-px">
                        <Text as="p" className="self-end">
                          Request a Call Back
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-[39%] md:w-full gap-4">
                  <div className="flex flex-col w-[75%] md:w-full gap-[23px]">
                    <Heading as="h5" className="!text-white-A700">
                      Subscribe Us
                    </Heading>
                    <div>
                      <div className="flex pt-px">
                        <Text as="p" className="self-end tracking-[-0.64px]">
                          Subscribe to our weekly newsletter
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Input shape="round" type="email" onChange={handleEmailChange} placeholder="Email" className="sm:pr-5" />
                    <Button size="xs" className="w-full sm:px-5 rounded-lg" onClick={submit} disabled={disableCTA}>
                      Subscribe
                    </Button >

                  </div>


                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[23px]">
            <div className="h-px bg-gray-500" />
            <div className="flex sm:flex-col justify-between items-center gap-5">
              <div className="flex justify-center gap-[13px]">
                <Img src="images/img_youtube.svg" alt="youtube_one" className="h-[24px] w-[24px]" />
                <Img src="images/img_twitter.svg" alt="twitter_one" className="h-[24px] w-[24px]" />
                <Img src="images/img_instagram.svg" alt="instagram_one" className="h-[24px] w-[24px]" />
                <Img src="images/img_facebook.svg" alt="facebook_one" className="h-[24px] w-[24px]" />
              </div>
              <div className="flex justify-between items-center w-[18%] sm:w-full gap-5">
                <div className="flex justify-center items-center w-[47%] gap-2">
                  <div className="flex justify-center w-[42%] pt-px">
                    <Text as="p" className="!font-medium">
                      Terms
                    </Text>
                  </div>
                  <div className="h-[16px] w-px bg-gray-400" />
                  <div className="flex justify-center pt-px flex-1">
                    <a href="#" className="self-end">
                      <Text as="p" className="!font-medium">
                        Privacy
                      </Text>
                    </a>
                  </div>
                </div>
                <div className="flex justify-center items-center w-[32%]">
                  <Img src="images/img_copyright.svg" alt="copyright_one" className="h-[14px] w-[14px]" />
                  <div className="flex justify-center flex-1">
                    <Text size="xs" as="p" className="tracking-[-0.56px] !font-inter">
                      2024 XYZ
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </footer>
  );
}
