import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black w-full text-white h-[300px] grid-cols-12 grid gap-4 p-8">
      <div className="col-span-3 text-lg">
        <h1 className="hover:opacity-80 cursor-pointer">Stories</h1>
        <h1 className="hover:opacity-80 cursor-pointer">Impact</h1>
        <h1 className="hover:opacity-80 cursor-pointer">Company</h1>
        <h1 className="hover:opacity-80 cursor-pointer">Newsroom</h1>
        <h1 className="hover:opacity-80 cursor-pointer">Impact Resources</h1>
      </div>
      <div className="col-span-3 text-lg">
        <h1 className="hover:opacity-80 cursor-pointer">Shop Nike.com</h1>
        <h1 className="hover:opacity-80 cursor-pointer">Shop Converse.com</h1>
        <h1 className="hover:opacity-80 cursor-pointer">Get help</h1>
        <h1 className="hover:opacity-80 cursor-pointer">Investors</h1>
      </div>
      <div className="col-span-6 flex flex-col justify-between">
        <div className="flex gap-8 self-end pr-12 text-2xl">
          <i className="ri-twitter-line hover:scale-110 hover:opacity-80 cursor-pointer"></i>
          <Link target="_blank" to={"https://github.com/piyusss11"}>
            <i className="ri-github-fill hover:scale-110 hover:opacity-80 cursor-pointer"></i>
          </Link>
          <i className="ri-instagram-line hover:scale-110 hover:opacity-80 cursor-pointer"></i>
          <Link target="_blank" to={"https://www.linkedin.com/in/piyusss11/"}>
            <i className="ri-linkedin-fill hover:scale-110 hover:opacity-80 cursor-pointer"></i>
          </Link>
          <i className="ri-youtube-fill hover:scale-110 hover:opacity-80 cursor-pointer"></i>
        </div>
        <div className="flex gap-8 text-sm text-[#808080] ml-12">
          <h1 className="hover:text-white cursor-pointer"> Terms of Use </h1>
          <h1 className="hover:text-white cursor-pointer">
            Nike Privacy Policy
          </h1>
          <h1 className="hover:text-white cursor-pointer">CA Supply Chains</h1>
          <h1> Act © 2024 NIKE, Inc. All Rights Reserved</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
