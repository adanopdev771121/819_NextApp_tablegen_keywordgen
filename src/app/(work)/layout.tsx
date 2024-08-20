export default function WorkLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h1 className="h-40 text-center content-center">Sub app</h1>
      <nav></nav>

      {children}
    </section>
  );
}
