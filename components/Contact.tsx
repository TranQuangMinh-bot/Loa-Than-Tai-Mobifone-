"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";

// 34 tỉnh/thành sau sáp nhập (từ 01/07/2025)
const PROVINCES = [
  "Hà Nội", "TP. Hồ Chí Minh", "Hải Phòng", "Đà Nẵng", "Cần Thơ", "Huế",
  "An Giang", "Bắc Ninh", "Cà Mau", "Cao Bằng", "Đắk Lắk", "Điện Biên",
  "Đồng Nai", "Đồng Tháp", "Gia Lai", "Hà Tĩnh", "Hưng Yên", "Khánh Hòa",
  "Lai Châu", "Lâm Đồng", "Lạng Sơn", "Lào Cai", "Nghệ An", "Ninh Bình",
  "Phú Thọ", "Quảng Ngãi", "Quảng Ninh", "Quảng Trị", "Sơn La", "Tây Ninh",
  "Thái Nguyên", "Thanh Hóa", "Tuyên Quang", "Vĩnh Long",
];

type Errors = Partial<Record<"name" | "phone" | "province", string>>;

const FIELD =
  "w-full rounded-md bg-white/[0.13] px-3.5 text-sm text-white placeholder:text-white/50 outline-none ring-1 ring-transparent transition focus:bg-white/[0.18] focus:ring-white/40";

function Label({ children, required }: { children: string; required?: boolean }) {
  return (
    <span className="mb-1.5 block text-[13px] text-white">
      {required && <span className="mr-1 text-[#ff6b6b]">*</span>}
      {children}
    </span>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", province: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const update = (key: keyof typeof form, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Vui lòng nhập họ và tên";
    if (!/^(0|\+84)\d{9}$/.test(form.phone.replace(/\s/g, "")))
      next.phone = "Số điện thoại không hợp lệ";
    if (!form.province) next.province = "Vui lòng chọn tỉnh thành";
    setErrors(next);
    if (Object.keys(next).length) return;

    // TODO: gửi dữ liệu về server / Google Sheet / email
    console.log("Đăng ký tư vấn:", form);
    setSent(true);
    setForm({ name: "", phone: "", province: "", message: "" });
  };

  return (
    <section id="tu-van" className="scroll-mt-24 bg-white py-16">
      <div className="mx-auto max-w-[1110px] px-6">
        <div className="relative overflow-hidden rounded-[28px] bg-[#8A0F1C] lg:min-h-[543px]">
          {/* Hình bên phải (desktop) */}
          <Image
            src="/contact-art.png"
            alt=""
            width={560}
            height={537}
            className="pointer-events-none absolute right-0 top-0 hidden h-full w-auto lg:block"
          />

          <form
            onSubmit={onSubmit}
            noValidate
            className="relative z-10 px-6 py-10 sm:px-11 lg:w-[464px] lg:pr-0"
          >
            <h2 className="text-2xl font-bold text-white sm:text-[28px] lg:whitespace-nowrap">
              Kết nối với Loa Thần Tài MobiFone
            </h2>
            <p className="mt-1 text-[15px] text-white">
              Giá: <b>880,000đ</b>/Thiết bị (bao gồm sim data 4G)
            </p>

            <div className="mt-6 space-y-5">
              <label className="block">
                <Label required>Họ và tên</Label>
                <input
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  autoComplete="name"
                  className={`${FIELD} h-[35px]`}
                />
                {errors.name && <p className="mt-1 text-xs text-[#ffb3b3]">{errors.name}</p>}
              </label>

              <label className="block">
                <Label required>Số điện thoại</Label>
                <input
                  type="tel"
                  inputMode="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  autoComplete="tel"
                  className={`${FIELD} h-[35px]`}
                />
                {errors.phone && <p className="mt-1 text-xs text-[#ffb3b3]">{errors.phone}</p>}
              </label>

              <label className="block">
                <Label required>Tỉnh thành</Label>
                <div className="relative">
                  <select
                    value={form.province}
                    onChange={(e) => update("province", e.target.value)}
                    className={`${FIELD} h-[35px] appearance-none pr-10 ${
                      form.province ? "" : "text-white/50"
                    } [&>option]:text-neutral-900`}
                  >
                    <option value="" disabled>
                      Chọn tỉnh thành
                    </option>
                    {PROVINCES.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                  <svg
                    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
                    className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-white/80"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
                {errors.province && <p className="mt-1 text-xs text-[#ffb3b3]">{errors.province}</p>}
              </label>

              <label className="block">
                <Label>Lời nhắn</Label>
                <textarea
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Bạn muốn..."
                  rows={3}
                  className={`${FIELD} h-[84px] resize-none py-2.5`}
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-5 h-9 w-full rounded-md bg-[#C22334] text-sm text-white transition-colors hover:bg-[#d62a3c]"
            >
              Nhận tư vấn ngay
            </button>

            {sent && (
              <p className="mt-3 text-sm text-white">
                Cảm ơn bạn! MobiFone sẽ liên hệ tư vấn trong thời gian sớm nhất.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}