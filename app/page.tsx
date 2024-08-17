import Image from "next/image";
import LoginButton from "./_components/LoginButton";
export default function Page() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-zinc-100">
      <section className={"flex items-center flex-col gap-5"}>
        <Image
          src="/logo.png"
          alt="Finify Logo"
          width={300}
          height={300}
          priority={true}
        />
        <p className="text-lg md:text-2xl font-semibold">
          Your finances, finally simplified
        </p>
        <LoginButton />
      </section>
    </main>
  );
}
