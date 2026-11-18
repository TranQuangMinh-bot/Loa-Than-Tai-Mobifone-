"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";

type Reason = {
  no: number;
  side: "left" | "right";
  icon: string;
  title: string;
  desc: ReactNode;
  extra?: "app" | "device";
};

const REASONS: Reason[] = [
  { no: 1, side: "right", icon: "r1.png", title: "Tăng năng suất bán hàng", desc: "Giải pháp cho mọi cửa hàng giúp quản lý giao dịch thanh toán an toàn, hiệu quả, rảnh tay khi bán hàng" },
  { no: 2, side: "left", icon: "r2.png", title: "Phòng tránh gian lận", desc: "Kiểm soát tuyệt đối các giao dịch, phòng ngừa thất thoát khi giao dịch" },
  { no: 3, side: "right", icon: "r3.png", title: "Tốc độ thông báo tức thời", desc: "Loa thông báo kết quả giao dịch tức thời sau khi nhận chuyển khoản" },
  { no: 4, side: "left", icon: "r4.png", title: "Giải pháp đa nền tảng", desc: "Tiện dụng, dễ dàng sử dụng và quản lý doanh thu qua các giao diện App Mobile, Website cho người dùng", extra: "app" },
  { no: 5, side: "right", icon: "r5.png", title: "Giao dịch không mất phí", desc: "Tiền vào ngay tài khoản của chủ cửa hàng khi quét QRCode thành công, không mất thêm bước rút tiền từ ví, phòng tránh lừa đảo" },
  { no: 6, side: "left", icon: "r6.png", title: "Kết nối mọi lúc mọi nơi", desc: "Kết nối tốc độ cao mạng thông qua Wifi/4G/5G mạng MobiFone" },
  { no: 7, side: "right", icon: "r7.png", title: "Chất lượng thiết bị cao cấp", desc: "Thiết bị hiện đại tinh tế, dễ lắp đặt, phù hợp với mọi không gian kinh doanh", extra: "device" },
  { no: 8, side: "left", icon: "r8.png", title: "Thời gian bảo hành", desc: (<>Gói bảo hành bạch kim <strong className="font-semibold text-brand">24 tháng</strong> duy nhất trên thị trường</>) },
];

function ReasonCard({ r }: { r: Reason }) {
  return (
    <div className="relative rounded-2xl bg-white p-5 shadow-[0_6px_24px_rgba(0,0,0,0.07)]">
      {/* Số cho mobile */}
      <span className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-brand text-xs font-bold text-white md:hidden">
        {r.no}
      </span>
      <Image src={`/${r.icon}`} alt="" width={44} height={44} className="h-10 w-10 object-contain" />
      <h3 className="mt-3 text-[15px] font-bold text-neutral-900">{r.title}</h3>
      <p className="mt-1.5 text-[13px] leading-5 text-neutral-500">{r.desc}</p>
      {r.extra === "app" && (
        <Image src="/app-screens.png" alt="Giao diện App MobiFone" width={710} height={475} className="mt-4 w-full" />
      )}
      {r.extra === "device" && (
        <Image src="/hero.png" alt="Thiết bị Loa Thần Tài" width={763} height={604} className="mt-4 w-full" />
      )}
    </div>
  );
}

export default function Reasons() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const badgeRefs = useRef<Record<number, HTMLSpanElement | null>>({});
  const [points, setPoints] = useState("");

  // Đo tâm 8 số rồi nối 1 → 2 → ... → 8 bằng đường kẻ đứt
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const draw = () => {
      const box = wrap.getBoundingClientRect();
      if (box.width === 0) return setPoints(""); // đang ẩn (mobile)
      const pts: string[] = [];
      for (let no = 1; no <= REASONS.length; no++) {
        const el = badgeRefs.current[no];
        if (!el) return;
        const b = el.getBoundingClientRect();
        pts.push(
          `${b.left + b.width / 2 - box.left},${b.top + b.height / 2 - box.top}`
        );
      }
      setPoints(pts.join(" "));
    };

    draw();
    const observer = new ResizeObserver(draw);
    observer.observe(wrap);
    return () => observer.disconnect();
  }, []);

  const right = REASONS.filter((r) => r.side === "right"); // 1,3,5,7
  const left = REASONS.filter((r) => r.side === "left"); // 2,4,6,8

  const badge = (r: Reason) => (
    <span
      ref={(el) => {
        badgeRefs.current[r.no] = el;
      }}
      className={`absolute top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-sm font-bold text-white ${
        r.side === "left" ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"
      }`}
    >
      {r.no}
    </span>
  );

  return (
    <section id="uu-diem" className="scroll-mt-24 bg-neutral-50 py-16">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center text-2xl font-extrabold text-neutral-900 sm:text-[26px]">
          8 lý do chọn Loa Thần Tài Mobifone
        </h2>

        {/* MOBILE: xếp dọc 1-8 */}
        <ul className="mt-10 space-y-5 md:hidden">
          {REASONS.map((r) => (
            <li key={r.no}>
              <ReasonCard r={r} />
            </li>
          ))}
        </ul>

        {/* DESKTOP: hai cột đan chéo */}
        <div ref={wrapRef} className="relative mt-12 hidden md:block">
          {/* Đường chéo nối các số */}
          <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
            <polyline
              points={points}
              fill="none"
              stroke="#b9061b"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
          </svg>

          <div className="grid grid-cols-2 gap-x-36">
            {/* cột trái (2,4,6,8) - đẩy xuống để so le */}
            <div className="mt-14 space-y-6">
              {left.map((r) => (
                <div key={r.no} className="relative">
                  <ReasonCard r={r} />
                  {badge(r)}
                </div>
              ))}
            </div>
            {/* cột phải (1,3,5,7) */}
            <div className="space-y-6">
              {right.map((r) => (
                <div key={r.no} className="relative">
                  <ReasonCard r={r} />
                  {badge(r)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}