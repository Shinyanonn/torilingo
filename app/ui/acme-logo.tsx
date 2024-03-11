import { lusitana } from "@/app/ui/fonts";

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-col items-center leading-none text-white`}
    >
      <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wide">
        Tori
        <br />
        <span className="text-red-500">L</span>ingo
      </p>
    </div>
  );
}
