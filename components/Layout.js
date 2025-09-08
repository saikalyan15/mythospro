import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col text-white">
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
