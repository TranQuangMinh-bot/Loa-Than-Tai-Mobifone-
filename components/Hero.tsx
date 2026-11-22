"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function Hero() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      audio.currentTime = 0;
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  };

  return (
    <section id="loa-than-tai" className="scroll-mt-24">
      <div className="mx-auto flex max-w-[1260px] flex-col items-center gap-10 px-6 pt-4 pb-12 lg:flex-row lg:justify-between lg:pt-[50px] lg:pb-16">
        {/* Khối chữ: Figma rộng 491px */}
        <div className="w-full max-w-md shrink-0 text-center lg:max-w-[491px] lg:text-left">
          <h1 className="text-[28px] font-bold leading-tight text-neutral-900 sm:text-[32px] lg:text-[44px] lg:leading-[1.2]">
            Giải pháp Loa sử dụng công nghệ AI hỗ trợ rảnh tay bán hàng.
          </h1>

          <p className="mt-5 text-[15px] leading-7 text-neutral-600 sm:text-base lg:mt-4 lg:text-lg lg:leading-8">
            <strong className="font-semibold text-neutral-800">Loa Thần Tài Mobifone</strong>{" "}
            là giải pháp âm thanh bằng giọng nói ứng dụng công nghệ trí tuệ nhân tạo của Mobifone. Nhằm
            thông báo chính xác kết quả trong từng giao dịch thanh toán thành công. Giúp người bán rảnh
            tay bán hàng, nhận tiền nhanh chóng và an toàn.
          </p>

          {/* Hàng nút: Figma 408 × 56 (2 nút 188px, cách nhau 32px) */}
          <div className="mt-8 flex justify-center gap-3 lg:mt-10 lg:justify-start lg:gap-8">
            <button
              type="button"
              onClick={toggleAudio}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-brand bg-brand px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-red-800 sm:w-44 sm:flex-none lg:h-14 lg:w-[188px] lg:py-0 lg:text-base"
            >
              {playing ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <rect x="6" y="5" width="4" height="14" rx="1" />
                  <rect x="14" y="5" width="4" height="14" rx="1" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
              {playing ? "Đang phát" : "Nghe thử loa"}
            </button>

            <a
              href="#tu-van"
              className="inline-flex flex-1 items-center justify-center rounded-full border border-brand px-4 py-2.5 text-sm font-bold text-brand transition-colors hover:bg-brand hover:text-white sm:w-44 sm:flex-none lg:h-14 lg:w-[188px] lg:py-0 lg:text-base"
            >
              Nhận tư vấn
            </a>
          </div>

          <audio ref={audioRef} src="/loa-demo.mp3" onEnded={() => setPlaying(false)} preload="none" />
        </div>

        {/* Ảnh: Figma 649 × 479 */}
        <Image
          src="/hero.png"
          alt="Ông Thần Tài cầm mã QR bên cạnh Loa Thần Tài MobiFone"
          width={660}
          height={487}
          className="h-auto w-full min-w-0 max-w-[350px] sm:max-w-[420px] lg:max-w-[649px]"
          priority
        />
      </div>
    </section>
  );
}
