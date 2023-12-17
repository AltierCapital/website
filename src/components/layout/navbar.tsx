import { DiscordIcon } from "@/components/icons/discord";
import { GitHubIcon } from "@/components/icons/github";
import { TwitterIcon } from "@/components/icons/twitter";
import Image from "next/image";
import Link from "next/link";
import AltierLogo from "~/images/logo.png";

export const Navbar = () => (
  <nav className="w-full flex justify-around items-center fixed z-30">
    <Link href="/">
      <Image
        priority
        src={AltierLogo}
        alt="Altier Capital Logo"
        className="w-20 h-20"
      />
    </Link>

    {/* <ul className="hidden gap-x-4 md:flex">
      <li className="px-2 py-1 hover:text-gray-300">
        <Link href="/">Our vision</Link>
      </li>
      <li className="px-2 py-1 hover:text-gray-300">
        <Link href="/">Portfolio</Link>
      </li>
      <li className="px-2 py-1 hover:text-gray-300">
        <Link href="/">Partners</Link>
      </li>
      <li className="px-2 py-1 hover:text-gray-300">
        <Link href="/">Contact us</Link>
      </li>
    </ul> */}

    <ul className="flex gap-x-4">
      <li>
        <a
          href="https://github.com/AltierCapital"
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer"
        >
          <GitHubIcon className="w-5 h-5 text-white hover:text-gray-300" />
        </a>
      </li>
      <li>
        <a
          href="https://discord.com/invite/GbFGHTdez4"
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer"
        >
          <DiscordIcon className="w-5 h-5 text-white hover:text-gray-300" />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/altiercapital"
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer"
        >
          <TwitterIcon className="w-5 h-5 text-white hover:text-gray-300" />
        </a>
      </li>
    </ul>
  </nav>
);
