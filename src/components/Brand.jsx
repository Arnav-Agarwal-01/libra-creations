import Image from "next/image";
import Link from "next/link";

export default function Brand({ light = false, onClick }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="inline-flex min-h-11 items-center gap-2.5"
      aria-label="Libra Creations home"
    >
      <Image
        src={light ? "/images/libra-mark-white.png" : "/images/libra-mark.png"}
        alt=""
        width={40}
        height={40}
        className="h-9 w-9 shrink-0"
        priority
      />
      <span className={`font-display text-[1.15rem] font-semibold tracking-[0.02em] ${light ? "text-white" : "text-ink"}`}>
        Libra <span className="font-normal">Creations</span>
      </span>
    </Link>
  );
}
