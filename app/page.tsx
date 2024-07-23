import Image from "next/image";
import localFont from "next/font/local";

const myFont = localFont({ src: "../public/Aclonica.ttf" });

export default function Page() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-zinc-100">
      <section
        className={`flex items-center flex-col gap-3 ${myFont.className}`}
      >
        <Image
          src="/logo.svg"
          alt="Finify Logo"
          height={200}
          width={200}
          priority={true}
        />
        <p className="text-lg md:text-xl font-medium">
          Your finances, finally simplified
        </p>
        <button className="text-sm md:text-md underline">Coming Soon</button>
      </section>
    </main>
  );
}
