import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaFacebook } from "react-icons/fa";

const socials = [
  { icon: <FaGithub aria-label="GitHub" />, path: "https://github.com/your-username" },
  { icon: <FaFacebook aria-label="Facebook" />, path: "https://github.com/your-username" },
  { icon: <FaTwitter aria-label="Twitter" />, path: "https://github.com/your-username" },
  { icon: <FaWhatsapp aria-label="Whatsapp" />, path: "https://github.com/your-username" },
  { icon: <FaLinkedin aria-label="Linkedin" />, path: "https://github.com/your-username" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
