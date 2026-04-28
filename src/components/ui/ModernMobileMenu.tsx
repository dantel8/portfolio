"use client";

import { cn } from "@/utils/cn";
import type { ElementType } from "react";
import { useMemo, useState } from "react";

type IconType = ElementType<{ className?: string }>;

interface MenuItem {
  label: string;
  href: string;
  icon: IconType;
}

interface ModernMobileMenuProps {
  items: MenuItem[];
}

export default function ModernMobileMenu({ items }: ModernMobileMenuProps) {
  const [activeHref, setActiveHref] = useState(items[0]?.href ?? "#home");

  const finalItems = useMemo(() => items, [items]);

  return (
    <nav className="menu md:hidden" aria-label="Mobile navigation">
      {finalItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeHref === item.href;

        return (
          <a
            key={item.href}
            href={item.href}
            className={cn("menu__item", isActive && "active")}
            onClick={() => setActiveHref(item.href)}
          >
            <span className="menu__icon">
              <Icon className="icon h-[1.1rem] w-[1.1rem]" />
            </span>
            <strong className={cn("menu__text", isActive && "active")}>
              {item.label}
            </strong>
          </a>
        );
      })}
    </nav>
  );
}
