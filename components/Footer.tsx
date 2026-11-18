import Image from "next/image";
import type { ReactNode } from "react";

// Thay "#" bằng link thật
const LINKS = {
  appStore: "#",
  googlePlay: "#",
  facebook: "#",
  youtube: "#",
  tiktok: "#",
  zalo: "#",
};

const SOCIALS = [
  { icon: "soc1.png", label: "Facebook", href: LINKS.facebook },
  { icon: "soc2.png", label: "YouTube", href: LINKS.youtube },
  { icon: "soc3.png", label: "TikTok", href: LINKS.tiktok },
  { icon: "soc4.png", label: "Zalo", href: LINKS.zalo },
];

const ICON = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "mt-0.5 shrink-0 text-neutral-700",
  "aria-hidden": true,
};

function Row({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <div className="flex gap-3 text-sm leading-[22px] text-neutral-800">
      {icon}
      <div>{children}</div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-neutral-50 pb-14 pt-14">
      <div className="mx-auto flex max-w-[1110px] flex-col gap-10 px-6 lg:flex-row lg:justify-between">
        {/* Cột trái: logo + liên hệ */}
        <div className="space-y-6">
          <Image src="/logo.png" alt="Loa Thần Tài MobiFone" width={167} height={155} className="h-16 w-auto mix-blend-multiply" />

          <Row
            icon={
              <svg {...ICON}>
                <path d="M12 21s-7-6.1-7-11.5a7 7 0 0 1 14 0C19 14.9 12 21 12 21z" />
                <circle cx="12" cy="9.5" r="2.5" />
              </svg>
            }
          >
            Tổng công ty viễn thông MobiFone số 01 phố Phạm Văn Bạch,
            <br className="hidden sm:block" /> Yên Hòa, Cầu Giấy, Hà Nội.
          </Row>

          <Row
            icon={
              <svg {...ICON}>
                <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
              </svg>
            }
          >
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <div>
                <p className="text-xs text-neutral-500">Tư vấn sản phẩm</p>
                <a href="tel:0936110116" className="hover:text-brand">0936.110.116</a>
              </div>
              <div className="border-l border-neutral-300 pl-4">
                <p className="text-xs text-neutral-500">Hỗ trợ kỹ thuật</p>
                <a href="tel:0896151617" className="hover:text-brand">0896.151.617</a>
              </div>
            </div>
          </Row>

          <Row
            icon={
              <svg {...ICON}>
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3.5 6.5l8.5 6 8.5-6" />
              </svg>
            }
          >
            <a href="mailto:loathantai@mobifone.vn" className="hover:text-brand">
              loathantai@mobifone.vn
            </a>
          </Row>
        </div>

        {/* Cột phải: tải app + mạng xã hội */}
        <div className="w-full max-w-[334px]">
          <div className="relative">
            <Image
              src="/app-download.png"
              alt="Quét mã và tải về ứng dụng Loa Thần Tài MobiFone"
              width={334}
              height={171}
              className="h-auto w-full"
            />
            {/* Vùng bấm phủ lên 2 nút trong ảnh */}
            <a
              href={LINKS.appStore}
              aria-label="Tải trên App Store"
              className="absolute left-[5%] top-[66%] h-[23%] w-[43%] rounded-lg"
            />
            <a
              href={LINKS.googlePlay}
              aria-label="Tải trên Google Play"
              className="absolute left-[51.5%] top-[66%] h-[23%] w-[43%] rounded-lg"
            />
          </div>

          <div className="mt-5 flex gap-4">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noreferrer"
                className="transition-transform hover:-translate-y-0.5"
              >
                <Image src={`/${s.icon}`} alt="" width={44} height={44} className="h-11 w-11 object-contain" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}