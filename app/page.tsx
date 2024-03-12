import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-blue-500">
        {`ToriLingoにようこそ！`}
      </h1>
      <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
        <Image
          src="/bird_aoitori_bluebird.png"
          width={779}
          height={704}
          className="hidden md:block"
          alt="Screenshots of the dashboard project showing desktop version"
        />
      </div>
      <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
        <Image
          src="/fruit_ringo.png"
          width={758}
          height={758}
          className="hidden md:block"
          alt="Screenshots of the dashboard project showing desktop version"
        />
      </div>
      <Link
        href="/home"
        className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
      >
        <span>ログイン</span> <ArrowRightIcon className="w-5 md:w-6" />
      </Link>
    </div>
  );
}
