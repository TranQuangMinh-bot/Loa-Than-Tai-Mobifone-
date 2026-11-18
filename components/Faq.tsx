"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Loa Thần Tài MobiFone là gì?",
    a: "Loa Thần Tài MobiFone là thiết bị phát âm thanh bằng giọng nói, thông báo kết quả thanh toán qua mã QR. Khi giao dịch thành công, loa sẽ tự động đọc chính xác số tiền khách hàng đã chuyển khoản, giúp người bán nhận tiền nhanh chóng và an toàn.",
  },
  {
    q: "Tôi muốn đăng ký sử dụng sản phẩm này",
    a: "Bạn chỉ cần bấm nút “Nhận tư vấn” ở đầu trang hoặc để lại thông tin, đội ngũ MobiFone sẽ liên hệ hỗ trợ bạn đăng ký và lắp đặt.",
  },
  {
    q: "Thiết bị này có an toàn không?",
    a: "Có. Thiết bị chỉ phát âm thanh thông báo kết quả giao dịch, không lưu trữ hay truy cập thông tin tài khoản ngân hàng của bạn nên hoàn toàn an toàn.",
  },
  {
    q: "QRcode của Loa Thần Tài MobiFone hỗ trợ thanh toán những ngân hàng nào?",
    a: "Mã QR hỗ trợ thanh toán qua hầu hết các ngân hàng và ví điện tử tại Việt Nam thông qua chuẩn VietQR / Napas 247.",
  },
  {
    q: "Tôi mất những chi phí gì để sử dụng Loa Thần Tài MobiFone?",
    a: "Chi phí trọn bộ thiết bị là 880.000đ. Ứng dụng quản lý và thông báo biến động số dư được sử dụng miễn phí.",
  },
];

function HelpIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" className="shrink-0" aria-hidden="true">
      <circle cx="12" cy="12" r="10.5" fill="none" stroke="#B9061B" strokeWidth="1.6" />
      <text
        x="12"
        y="16.5"
        fontSize="13"
        fontWeight="800"
        fill="#B9061B"
        textAnchor="middle"
        fontFamily="inherit"
      >
        ?
      </text>
    </svg>
  );
}

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="scroll-mt-24 bg-white py-14">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center text-2xl font-extrabold text-neutral-900 sm:text-[26px]">
          Hỏi và đáp về Loa Thần Tài MobiFone
        </h2>

        <div className="mt-10 rounded-3xl bg-white px-7 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="border-b border-neutral-100 last:border-none"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-3.5 py-5 text-left"
                >
                  <HelpIcon />
                  <span className="flex-1 text-base font-bold text-neutral-900">
                    {item.q}
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`shrink-0 text-neutral-400 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {isOpen && (
                  <p className="-mt-1 pb-5 pl-[38px] text-sm leading-6 text-neutral-500">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}