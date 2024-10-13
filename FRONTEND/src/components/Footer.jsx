import React from "react";

function Footer() {
  return (
    <div className="w-full h-full flex gap-[15vw] py-[6vw] px-[4vw] bg-zinc-500">
      <div className="w-1\2 h-full flex flex-col justify-between ">
        <div className="heading text-[6.5vw] ">
          <h1 className="  tracking-tighter font-bold leading-none">
            GAMIFIED
          </h1>
          <h1 className=" tracking-tighter font-bold leading-none">
            DSA
          </h1>
        </div>
      </div>

      <div className="w-1\2">
        <h1 className=" text-[6.5vw] tracking-tighter font-bold leading-none ">
          About Us
        </h1>
        <br />
        <div className="links flex justify-between pt-20">
          <div className=" left ">
            <div className="dets">
              <br />
              <a className="block" href="#">
                <u>Instagram</u>
              </a>
              <br />
              <a className="block" href="#">
                <u>Twitter [X]</u>
              </a><br />
              <a className="block" href="#">
                <u>Facebook</u>
              </a><br />
              <a className="block" href="#">
                <u>Linkedin</u>
              </a><br />
            </div>
            <br />
            <br />
          </div>
          <div className="right">
            <div>
              <h1>Quick Links</h1><br />
              <a className="block" href="#">
                <u>Home</u>
              </a><br />
              <a className="block" href="#">
                <u>Services</u>
              </a><br />
              <a className="block" href="#">
                <u>Our work</u>
              </a><br />
              <a className="block" href="#">
                <u>About us</u>
              </a><br />
              <a className="block" href="#">
                <u>Insights</u>
              </a><br />
              <a className="block" href="#">
                <u>Contact us</u>
              </a><br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;