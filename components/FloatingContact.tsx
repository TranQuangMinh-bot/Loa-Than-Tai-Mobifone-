import Image from "next/image";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col gap-3">
      {/* Nút hỗ trợ viên */}
      <a
        href="#tu-van"
        aria-label="Nhân viên hỗ trợ"
        className="block h-12 w-12 overflow-hidden rounded-2xl shadow-lg sm:h-14 sm:w-14 transition-transform hover:scale-105"
      >
        <Image
          src="/support.png"
          alt="Nhân viên hỗ trợ"
          width={161}
          height={162}
          className="h-full w-full object-contain"
        />
      </a>

      {/* Nút Zalo — thay href bằng link Zalo thật: https://zalo.me/SỐ_ĐIỆN_THOẠI */}
      <a
        href="#"
        aria-label="Chat Zalo"
        className="block h-12 w-12 overflow-hidden rounded-2xl shadow-lg sm:h-14 sm:w-14 transition-transform hover:scale-105"
      >
        <Image
          src="/zalo.png"
          alt="Chat Zalo"
          width={157}
          height={165}
          className="h-full w-full object-contain"
        />
      </a>
    </div>
  );
}