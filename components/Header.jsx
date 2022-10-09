import Image from "next/image";
import Link from "next/link";
import github from "../public/github.svg";
import linkedin from "../public/linkedin.svg";

const Header = () => {
  const links = [
    {
      img: linkedin,
      link: "https://www.linkedin.com/in/hakan-özcan-5b3637179/",
      alt: "Linkedin",
    },

    {
      img: github,
      link: "https://github.com/hakanozcan",
      alt: "Github",
    },
  ];

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 pb-4 pt-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              Hakan Özcan
            </span>
          </Link>
        </div>
        <div className="hidden float-left md:contents">
          {links?.map((link) => (
            <div className="md:float-right mt-2 align-middle text-white ml-6 mr-4 font-semibold cursor-pointer">
              <a href={link.link} target="_blank">
                <Image src={link.img} alt={link.alt} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
