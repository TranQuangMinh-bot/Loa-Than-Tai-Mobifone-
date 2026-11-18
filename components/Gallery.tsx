import Image from "next/image";

const ALT = "Khách hàng sử dụng Loa Thần Tài MobiFone";

export default function Gallery() {
  return (
    <section aria-label={ALT}>
      {/* Tablet trở lên: dải ảnh ngang */}
      <Image
        src="/gallery.png"
        alt={ALT}
        width={1143}
        height={327}
        sizes="100vw"
        className="hidden h-auto w-full sm:block"
      />

      {/* Điện thoại: lưới ảnh dọc theo mẫu mobile */}
      <Image
        src="/gallery-mobile.png"
        alt={ALT}
        width={323}
        height={828}
        sizes="100vw"
        className="h-auto w-full sm:hidden"
      />
    </section>
  );
}
