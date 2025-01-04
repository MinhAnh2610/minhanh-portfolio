import Link from "next/link";
import React from "react";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

type SocialProps = {
  containerStyles: string; // Type as a string for className
  iconStyles: string;      // Type as a string for className
};

const socials = [
  { icons: <FaGithub />, path: "https://github.com/MinhAnh2610" },
  { icons: <FaLinkedinIn />, path: "" },
  { icons: <FaYoutube />, path: "" },
  { icons: <FaTwitter />, path: "" },
];

const Social: React.FC<SocialProps> = ({ containerStyles, iconStyles }) => {
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
