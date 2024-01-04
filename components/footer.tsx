import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-white text-sm p-10 pb-0 pb-4 bg-[#111] gap-8 flex flex-col ">
      <div className="flex justify-between">
        <div className="flex gap-10 sm:gap-14 md:gap-20 flex-col sm:flex-row">
          <ul className="flex flex-col gap-4 font-semibold">
            <li>
              <a href="/">Find A Store</a>
            </li>
            <li>
              <a href="/">Become A Member</a>
            </li>
            <li>
              <a href="/">Student Discounts</a>
            </li>
            <li>
              <a href="/">Send Us Feedback</a>
            </li>
          </ul>

          <ul className="flex flex-col gap-4 text-gray-300">
            <li>
              <a href="/" className="font-semibold text-white">
                Get Help
              </a>
            </li>
            <li>
              <a href="/">Order Status</a>
            </li>
            <li>
              <a href="/">Delivery</a>
            </li>
            <li>
              <a href="/">Returns</a>
            </li>
            <li>
              <a href="/">Payment Options</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
          </ul>

          <ul className="flex flex-col gap-4 text-gray-300">
            <li>
              <a href="/" className="font-semibold text-white">
                About
              </a>
            </li>
            <li>
              <a href="/">News</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
            <li>
              <a href="/">Investors</a>
            </li>
            <li>
              <a href="/">Sustainability</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-4 ">
          <Facebook />
          <Twitter />
          <Linkedin />
          <Instagram />
        </div>
      </div>

      <div className="flex justify-between flex-col-reverse sm:flex-row gap-4">
        <div>© 2023 Sole&Ankle, Inc. All Rights Reserved</div>

        <ul className="flex gap-8 text-nowrap">
          <li>
            <a href="/">Terms of Sale</a>
          </li>
          <li>
            <a href="/">Terms of Use</a>
          </li>
          <li>
            <a href="/">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
