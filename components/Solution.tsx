import Image from "next/image";
import type { ReactNode } from "react";

const PRODUCTS = [
  "Loa báo kết quả giao dịch",
  "Mã QRcode in sẵn",
  "Dây sạc type C",
  "Kết nối Wifi hoặc kết nối sim 4G/5G",
];

const APP_FEATURES = [
  "Chủ cửa có thể phân quyền cho nhân viên xem tiền về",
  "Theo dõi biến động số dư trong thời gian thực",
  "Nhận tiền và rút tiền về tài khoản ngay lập tức",
];

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" className="shrink-0" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#B9061B" />
      <path
        d="M6.8 12.4l3.4 3.4L17.2 8.8"
        fill="none"
        stroke="#fff"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Item({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-center gap-3 text-[15px] leading-6 text-neutral-800">
      <Check />
      <span>{children}</span>
    </li>
  );
}

const CARD =
  "flex flex-col overflow-hidden rounded-[28px] bg-white px-6 pt-8 pb-6 shadow-[0_8px_32px_rgba(0,0,0,0.08)] sm:px-8";

export default function Solution() {
  return (
    <section id="giai-phap" className="scroll-mt-24 bg-white py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-[22px] font-extrabold leading-8 text-neutral-900 sm:text-[26px] sm:leading-[37px]">
          Nhận trọn bộ giải pháp Loa Thần Tài MobiFone
          <br />
          Chỉ với giá 880,000đ/ thiết bị
        </h2>

        <div className="mt-[52px] grid gap-5 md:grid-cols-2">
          {/* Thẻ trái: bộ sản phẩm */}
          <div className={CARD}>
            <h3 className="text-[17px] font-bold leading-6 text-neutral-900">
              Bộ sản phẩm Loa Thần Tài MobiFone
            </h3>
            <ul className="mt-4 space-y-[21px] pl-[9px]">
              {PRODUCTS.map((t) => (
                <Item key={t}>{t}</Item>
              ))}
            </ul>

            <div className="mt-auto grid grid-cols-2 gap-3 pt-10 sm:grid-cols-4 sm:pt-16">
              {[1, 2, 3, 4].map((n) => (
                <Image
                  key={n}
                  src={`/p${n}.png`}
                  alt=""
                  width={133}
                  height={136}
                  className="aspect-[133/136] w-full object-cover"
                />
              ))}
            </div>
          </div>

          {/* Thẻ phải: ứng dụng quản lý */}
          <div className={CARD}>
            <h3 className="text-[17px] font-bold leading-6 text-neutral-900">
              Ứng dụng quản lý và báo cáo tiền về
            </h3>
            <ul className="mt-4 space-y-[21px] pl-[9px]">
              {APP_FEATURES.map((t) => (
                <Item key={t}>{t}</Item>
              ))}
            </ul>

            {/* Ảnh app: rộng 340px, nằm giữa, đáy chạm mép dưới thẻ */}
            <div className="mx-auto mt-auto -mb-6 w-full max-w-[340px] pt-7">
              <Image
                src="/app-manage.png"
                alt="Ứng dụng quản lý Loa Thần Tài"
                width={585}
                height={312}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}