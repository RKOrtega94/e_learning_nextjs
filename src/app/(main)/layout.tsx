import { Sidebar } from "@/components";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full h-screen relative md:flex">
      <Sidebar />
      <section className="main">main</section>
    </main>
  );
}
