"use client";

import { DlUiText } from "@/components/ui/DlUiText";
import { DlUiIcon } from "@/components/ui/DlUiIcon";
import { DlUiGlass } from "@/components/ui/DlUiGlass";
import { Menu, Moon, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const menuItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const DlHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <DlUiGlass blur={5} className="overflow-hidden">
        <nav className="flex justify-between items-center w-full p-4 mx-auto">
          <DlUiText type="h2" className="text-v1-primary-600 relative">
            Portfolio
          </DlUiText>
          <div className="flex gap-2">
            <button className="p-2 rounded-lg hover:bg-white/30 transition-all duration-300">
              <DlUiIcon lucideIcon={Moon} className="text-v1-neutral-700" />
            </button>
            <button className="p-2 rounded-lg hover:bg-white/30 transition-all duration-300">
              <DlUiIcon
                lucideIcon={isOpen ? X : Menu}
                onClick={() => setIsOpen(!isOpen)}
                className="text-v1-neutral-700"
              />
            </button>
          </div>
        </nav>
      </DlUiGlass>

      {isOpen && (
        <div className="absolute top-full left-0 w-full">
          <DlUiGlass blur={5} className="rounded-lg overflow-hidden shadow-lg">
            <ul className="flex flex-col">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    className="block px-4 py-3 text-v1-neutral-700 font-semibold hover:text-v1-primary-500 transition-ease-in-out duration-300"
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </DlUiGlass>
        </div>
      )}
    </header>
  );
};

export default DlHeader;
