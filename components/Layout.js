import Footer from "./Footer";
import Image from "next/image";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col text-white">
      <header className="py-4 px-6 bg-[#07101A] border-b border-[#08202D]">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <div className="w-10 h-10 relative">
            <Image src="/MythosPro-Transparent.png" alt="MythosPro" width={40} height={40} />
          </div>
          <div className="font-semibold">MythosPro</div>
        </div>
      </header>
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
