export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col h-screen">
      <nav className="h-[4rem]"></nav>
      <section className="flex grow h-full">
        <nav className="w-[18rem] h-full"></nav>
        {children}
      </section>
    </main>
  );
}
