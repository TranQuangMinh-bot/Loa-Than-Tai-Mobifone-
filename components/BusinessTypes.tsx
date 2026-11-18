import Image from "next/image";

const TYPES = [
  { icon: "b1.png", label: "Nhà thuốc" },
  { icon: "b2.png", label: "Dịch vụ làm đẹp" },
  { icon: "b3.png", label: "Tiệm cà phê" },
  { icon: "b4.png", label: "Quán ăn" },
  { icon: "b5.png", label: "Thực phẩm" },
  { icon: "b6.png", label: "Tạp hóa" },
  { icon: "b7.png", label: "Cửa hàng quần áo" },
  { icon: "b8.png", label: "Siêu thị" },
];

export default function BusinessTypes() {
  return (
    <section id="loai-hinh" className="scroll-mt-24 bg-neutral-50 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-[22px] font-extrabold leading-8 text-neutral-900 sm:text-[26px] sm:leading-[37px]">
          Loa Thần Tài MobiFone phù hợp với đa
          <br className="hidden sm:block" /> dạng loại hình kinh doanh
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {TYPES.map((t) => (
            <div
              key={t.label}
              className="flex min-h-[150px] flex-col items-center justify-center gap-5 rounded-[20px] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.05)] sm:min-h-[180px]"
            >
              <Image
                src={`/${t.icon}`}
                alt=""
                width={44}
                height={44}
                className="h-11 w-11 object-contain"
              />
              <span className="text-[15px] text-neutral-700">{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}