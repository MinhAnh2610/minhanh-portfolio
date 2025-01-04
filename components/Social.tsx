import Link from "next/link";
import path from "path";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icons: <FaGithub />, path: "https://github.com/MinhAnh2610" },
  { icons: <FaLinkedinIn />, path: "" },
  { icons: <FaYoutube />, path: "" },
  { icons: <FaTwitter />, path: "" },
];

const Social = ({ containerStyles, iconStyles }: any) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link key={index} href={social.path} className={iconStyles}>
            {social.icons}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
