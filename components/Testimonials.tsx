"use client";

import Image from "next/image";
import { useRef } from "react";

const DATA = [
  {
    avatar: "av1.png",
    name: "Trung Dũng",
    role: "Chủ của hàng tạp hóa tại quận Hà Đông, Hà Nội.",
    quote:
      "Loa Thần Tài MobiFone nhỏ gọn, phù hợp với tiệm tạp hóa của tôi, giúp thông báo giao dịch thanh toán chuyển khoản QRcode thành công nhanh chóng. Nhờ có Loa Thần Tài MobiFone, việc quản lý nguồn thu tại cửa hàng của tôi trở nên dễ dàng hơn rất nhiều.",
  },
  {
    avatar: "av2.png",
    name: "Hồng Hạnh",
    role: "Chủ hiệu thuốc tại quận Thanh Xuân, Hà Nội.",
    quote:
      "Loa Thần Tài MobiFone giúp mình theo dõi các giao dịch chuyển khoản QRcode nhanh chóng và chính xác, mà không cần kiểm tra điện thoại. Âm thanh rõ ràng, thông báo ngay lập tức sau mỗi giao dịch. Thiết kế loa đẹp mắt góp phần nâng cao sự chuyên nghiệp cho quầy thuốc của mình.",
  },
  {
    avatar: "av3.png",
    name: "Tuấn Anh",
    role: "Chủ hiệu thuốc tại quận Thanh Xuân, Hà Nội.",
    quote:
      "Loa Thần Tài MobiFone giúp mình theo dõi các giao dịch chuyển khoản QRcode nhanh chóng và chính xác, mà không cần kiểm tra điện thoại. Âm thanh rõ ràng, thông báo ngay lập tức sau mỗi giao dịch. Thiết kế loa đẹp mắt góp phần nâng cao sự chuyên nghiệp cho quầy thuốc của mình.",
  },
];

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: "smooth" });
  };

  return (
    <section id="khach-hang" className="scroll-mt-24 bg-white py-14">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-center text-[40px] font-extrabold text-brand">9.000 +</p>
        <p className="mt-2 text-center text-base text-neutral-700">
          Chủ cửa hàng tại TP. Hà Nội và TP. Hồ Chí Minh đã sử dụng
        </p>

        <div
          ref={trackRef}
          className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {DATA.map((t) => (
            <article
              key={t.name}
              className="shrink-0 basis-full snap-start rounded-[20px] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.07)] sm:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)]"
            >
              <header className="flex items-center gap-3.5">
                <Image
                  src={`/${t.avatar}`}
                  alt={t.name}
                  width={52}
                  height={52}
                  className="h-[52px] w-[52px] rounded-full object-cover"
                />
                <div>
                  <p className="text-base font-bold text-neutral-900">{t.name}</p>
                  <p className="mt-0.5 text-xs leading-[17px] text-neutral-500">
                    {t.role}
                  </p>
                </div>
              </header>
              <p className="mt-[18px] text-[13.5px] leading-[22px] text-neutral-600">
                {t.quote}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Xem trước"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 transition-colors hover:bg-neutral-200"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Xem tiếp"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 transition-colors hover:bg-neutral-200"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}