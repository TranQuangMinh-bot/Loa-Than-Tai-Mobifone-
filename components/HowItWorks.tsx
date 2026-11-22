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

/*
 * Hình mũi tên cho tablet/desktop (đo theo mẫu Figma).
 * Mỗi thẻ rộng 291 đơn vị = bước 264 + mũi nhọn 27. Thẻ sau lùi vào 27 để
 * khớp khít với mũi nhọn của thẻ trước, chỉ chừa một đường trắng mảnh ở giữa.
 */
const DESKTOP_FIRST =
  "M8 0H257.3Q262.3 0 264.1 4.6L287.8 64.3Q289.3 68 287.8 71.7L264.1 131.4Q262.3 136 257.3 136H8Q0 136 0 128V8Q0 0 8 0Z";
const DESKTOP_REST =
  "M6.7 0H257.3Q262.3 0 264.1 4.6L287.8 64.3Q289.3 68 287.8 71.7L264.1 131.4Q262.3 136 257.3 136H6.7Q1.7 136 3.5 131.4L27.6 70.8Q28.7 68 27.6 65.2L3.5 4.6Q1.7 0 6.7 0Z";

export default function HowItWorks() {
  return (
    <section id="cach-hoat-dong" className="scroll-mt-24 pb-8 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[90px]">
      <div className="mx-auto max-w-[1260px] px-4 sm:px-6">
        <h2 className="text-center text-[23px] font-bold leading-8 text-neutral-900 sm:text-[26px] md:font-extrabold lg:text-[32px] lg:font-bold lg:leading-[44px]">
          3 Bước nhận tiền qua Loa Thần Tài MobiFone
        </h2>

        {/* 3 thẻ: điện thoại là mũi tên bo tròn kiểu dọc, từ tablet là mũi tên nối liền nhau */}
        <div className="mt-6 grid grid-cols-3 pr-[14px] md:mt-11 md:flex md:pr-0 lg:mt-[66px]">
          {STEPS.map((step, i) => (
            <div
              key={step.no}
              style={{ zIndex: STEPS.length - i }}
              className={`relative pb-5 pr-1 pt-[15px] md:w-[35.53%] md:shrink-0 md:pb-6 md:pr-10 md:pt-5 lg:pb-[30px] lg:pr-12 lg:pt-6 ${
                i === 0 ? "pl-3 md:pl-[33px] lg:pl-10" : "pl-[31px] md:-ml-[3.297%] md:pl-[calc(3.297%+34px)] lg:pl-[calc(3.297%+41px)]"
              }`}
            >
              {/* Nền mũi tên cho điện thoại */}
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

              {/* Nền mũi tên cho tablet/desktop */}
              <svg
                aria-hidden="true"
                viewBox="0 0 291 136"
                preserveAspectRatio="none"
                className="absolute inset-0 hidden h-full w-full md:block"
              >
                <path d={i === 0 ? DESKTOP_FIRST : DESKTOP_REST} fill="#F4C357" />
              </svg>

              <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-brand text-[13px] font-bold text-white md:h-[38px] md:w-[38px] md:text-base lg:h-[46px] lg:w-[46px] lg:text-lg">
                {step.no}
              </div>
              <p className="relative mt-[18px] text-[12.5px] leading-[19px] text-neutral-800 md:mt-3 md:text-[15px] md:leading-[23px] lg:mt-4 lg:text-lg lg:leading-7">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Banner: sát ngay dưới 3 thẻ như mẫu */}
        <div id="nghe-thu" className="mt-3 flex scroll-mt-28 justify-center md:mt-5 lg:mt-6">
          <Image
            src="/banner-full.png"
            alt="3 Bước nhận tiền qua Loa Thần Tài MobiFone"
            width={675}
            height={380}
            className="h-auto w-full max-w-xl md:max-w-[662px] lg:max-w-[801px]"
          />
        </div>
      </div>
    </section>
  );
}
