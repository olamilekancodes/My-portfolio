import FooterModule from "./components/footer";
import NavBar from "./components/navBar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <main className="flex-grow">
        <div className="m-auto max-w-6xl px-5 flex flex-col gap-10 my-20">
          {children}
        </div>
      </main>
      <FooterModule />
    </>
  );
}
