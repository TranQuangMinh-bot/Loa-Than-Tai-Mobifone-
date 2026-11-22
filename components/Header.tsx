"use client";

import Image from "next/image";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Loa Thần Tài MobiFone", href: "#loa-than-tai" },
  { label: "Cách hoạt động", href: "#cach-hoat-dong" },
  { label: "Ưu điểm", href: "#uu-diem" },
  { label: "Giải pháp", href: "#giai-phap" },
  { label: "Khách hàng", href: "#khach-hang" },
  { label: "FAQ", href: "#faq" },
];

function Logo() {
  return (
    <Image
      src="/logo.png"
      alt="Loa Thần Tài MobiFone"
      width={91}
      height={90}
      className="h-12 w-auto lg:h-16"
      priority
    />
  );
}

export default function Header() {
  const [active, setActive] = useState(NAV_ITEMS[0].href);
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm lg:shadow-none">
      {/* Figma: cao 96px, padding 16px trên/dưới, nội dung rộng 1212px (1920 - 354×2) */}
      <div className="mx-auto flex h-24 max-w-[1260px] items-center justify-between px-6">
        <a href="#loa-than-tai" aria-label="Trang chủ" className="shrink-0" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        {/* Menu desktop: Figma 762 × 38, chữ 16px, các mục cách nhau 40px */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-10">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setActive(item.href)}
                className={`whitespace-nowrap py-2 text-base leading-[22px] transition-colors hover:text-brand ${
                  isActive ? "font-bold text-brand" : "font-normal text-neutral-800"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Nút: Figma 125 × 40 */}
        <a
          href="#tu-van"
          className="hidden h-10 w-[125px] shrink-0 items-center justify-center rounded-full border border-brand text-base font-bold text-brand transition-colors hover:bg-brand hover:text-white lg:inline-flex"
        >
          Nhận tư vấn
        </a>

        {/* Nút mở menu (mobile + iPad dọc) */}
        <button
          type="button"
          aria-label="Mở menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-brand lg:hidden"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {/* Menu xổ xuống khi bấm hamburger */}
      {open && (
        <div className="border-t border-neutral-100 bg-white px-6 pb-5 shadow-md lg:hidden">
          <nav className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => {
                  setActive(item.href);
                  setOpen(false);
                }}
                className={`border-b border-neutral-100 py-3 text-base ${
                  active === item.href ? "font-bold text-brand" : "font-medium text-neutral-800"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#tu-van"
            onClick={() => setOpen(false)}
            className="mt-4 inline-block rounded-full border border-brand px-6 py-2.5 font-bold text-brand"
          >
            Nhận tư vấn
          </a>
        </div>
      )}
    </header>
  );
}
