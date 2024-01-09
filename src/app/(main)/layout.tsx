import { Sidebar, Appbar } from "@/components";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full h-screen relative md:flex p-4 md:gap-4">
      <Sidebar />
      <section className="main">
        <Appbar />
      </section>
    </main>
  );
}
