"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/treks", label: "Treks" },
  { href: "/treks/uttarakhand", label: "Uttarakhand" },
  { href: "/mountain-passes", label: "Mountain Passes" },
  { href: "/campsites", label: "Campsites" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Book / Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-lime-200/20 bg-emerald-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-8 lg:px-16">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="relative h-10 w-10 overflow-hidden rounded-full border border-lime-200/30 bg-white/95">
            <Image
              src="/branding/logo.png"
              alt="Mountsfinder logo"
              fill
              className="object-cover"
              sizes="40px"
            />
          </span>
          <span className="text-xs font-semibold tracking-[0.16em] text-lime-100 uppercase sm:text-sm">
            Mountsfinder
          </span>
        </Link>

        <button
          type="button"
          className="inline-flex rounded-md border border-lime-200/30 px-3 py-2 text-xs font-semibold tracking-wide text-lime-100 uppercase md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          Menu
        </button>

        <div className="hidden items-center gap-4 text-sm text-lime-100/90 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 transition ${
                  active ? "bg-lime-100/15 text-lime-100" : "hover:bg-lime-100/10 hover:text-lime-200"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {open ? (
        <div id="mobile-menu" className="animate-slide-down border-t border-lime-200/15 bg-emerald-950/95 px-4 py-3 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-lime-100/90 transition hover:bg-lime-100/10 hover:text-lime-100"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
