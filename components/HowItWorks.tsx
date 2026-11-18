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

const CLIP_FIRST =
  "md:[clip-path:polygon(0_0,calc(100%_-_22px)_0,100%_50%,calc(100%_-_22px)_100%,0_100%)]";
const CLIP_REST =
  "md:[clip-path:polygon(0_0,calc(100%_-_22px)_0,100%_50%,calc(100%_-_22px)_100%,0_100%,22px_50%)]";

export default function HowItWorks() {
  return (
    <section id="cach-hoat-dong" className="scroll-mt-24 pb-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-2xl font-extrabold text-neutral-900 sm:text-[26px]">
          3 Bước nhận tiền qua Loa Thần Tài Mobifone
        </h2>

        {/* 3 thẻ mũi tên */}
        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <div
              key={step.no}
              style={{ background: "linear-gradient(180deg,#F8D26B,#F0B63D)" }}
              className={`rounded-2xl px-7 py-5 md:min-h-[150px] md:rounded-none md:pl-10 ${
                i === 0 ? CLIP_FIRST : CLIP_REST
              }`}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                {step.no}
              </div>
              <p className="mt-3 text-[13px] font-medium leading-5 text-neutral-800">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Banner (một tấm ảnh đã gồm nhãn chữ, nút play, figure) */}
        <div id="nghe-thu" className="mt-10 flex scroll-mt-28 justify-center">
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