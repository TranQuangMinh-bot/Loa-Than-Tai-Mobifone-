import Image from "next/image";

export default function Gallery() {
  return (
    <section aria-label="Khách hàng sử dụng Loa Thần Tài MobiFone">
      <Image
        src="/gallery.png"
        alt="Khách hàng sử dụng Loa Thần Tài MobiFone"
        width={1143}
        height={327}
        sizes="100vw"
        className="h-auto w-full"
      />
    </section>
  );
}