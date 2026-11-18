import Image from "next/image";

const STEPS = [
  {
    no: "1",
    desc: "Khách hàng quét mã QR trên thiết bị Loa Thần Tài để chuyển khoản",
  },
  {
    no: "2",
    desc: "Loa Thần Tài xác nhận số tiền giao dịch, Thu ngân nghe loa báo và xác nhận cho khách hàng",
  },
  {
    no: "3",
    desc: "Chủ cửa hàng và thu ngân theo dõi tiền về qua app Loa Thần Tài",
  },
];

// Hình mũi tên thẳng cho tablet/desktop
const CLIP_FIRST =
  "md:[clip-path:polygon(0_0,calc(100%_-_22px)_0,100%_50%,calc(100%_-_22px)_100%,0_100%)]";
const CLIP_REST =
  "md:[clip-path:polygon(0_0,calc(100%_-_22px)_0,100%_50%,calc(100%_-_22px)_100%,0_100%,22px_50%)]";

export default function HowItWorks() {
  return (
    <section id="cach-hoat-dong" className="scroll-mt-24 pb-8 md:pb-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-center text-[23px] font-bold leading-8 text-neutral-900 sm:text-[26px] md:font-extrabold">
          3 Bước nhận tiền qua Loa Thần Tài MobiFone
        </h2>

        {/* 3 thẻ: điện thoại là mũi tên bo tròn (SVG), từ tablet là mũi tên thẳng */}
        <div className="mt-6 grid grid-cols-3 pr-[14px] md:mt-10 md:gap-3 md:pr-0">
          {STEPS.map((step, i) => (
            <div
              key={step.no}
              style={{ zIndex: STEPS.length - i }}
              className={`relative pb-5 pr-1 pt-[15px] md:min-h-[150px] md:px-7 md:py-5 md:pl-10 md:[background:linear-gradient(180deg,#F8D26B,#F0B63D)] ${
                i === 0 ? `pl-3 ${CLIP_FIRST}` : `pl-[31px] ${CLIP_REST}`
              }`}
            >
              {/* Nền hình mũi tên cho điện thoại */}
              <svg
                aria-hidden="true"
                viewBox="0 0 121 250"
                preserveAspectRatio="none"
                className="absolute left-0 top-0 h-full w-[calc(100%+14px)] md:hidden"
              >
                <defs>
                  <linearGradient id={`gold${i}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#F8D26B" />
                    <stop offset="1" stopColor="#F0B63D" />
                  </linearGradient>
                </defs>
                <path
                  d={
                    i === 0
                      ? "M12 0H103Q107 0 108.5 3.5L120.4 121Q121 125 120.4 129L108.5 246.5Q107 250 103 250H12Q0 250 0 238V12Q0 0 12 0Z"
                      : "M0 0H103Q107 0 108.5 3.5L120.4 121Q121 125 120.4 129L108.5 246.5Q107 250 103 250H0L13.4 129Q14 125 13.4 121Z"
                  }
                  fill={`url(#gold${i})`}
                />
                {i < STEPS.length - 1 && (
                  <path
                    d="M107 0Q107.3 0 108.5 3.5L120.4 121Q121 125 120.4 129L108.5 246.5Q107.3 250 107 250"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                  />
                )}
              </svg>
              <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-brand text-[13px] font-bold text-white md:h-8 md:w-8 md:text-sm">
                {step.no}
              </div>
              <p className="relative mt-[18px] text-[12.5px] leading-[19px] text-neutral-800 md:mt-3 md:text-[13px] md:font-medium md:leading-5">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Banner (một tấm ảnh đã gồm nhãn chữ, nút play, figure) */}
        <div id="nghe-thu" className="mt-3 flex scroll-mt-28 justify-center md:mt-10">
          <Image
            src="/banner-full.png"
            alt="3 Bước nhận tiền qua Loa Thần Tài MobiFone"
            width={675}
            height={380}
            className="h-auto w-full max-w-xl"
          />
        </div>
      </div>
    </section>
  );
}
