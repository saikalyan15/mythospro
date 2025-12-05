export default function Footer() {
  return (
    <footer className="py-6 px-6 text-center text-gray-400 bg-[#0A1220]">
      <div className="max-w-4xl mx-auto">
        <div className="mb-2">
          (c) {new Date().getFullYear()} MythosPro. All rights reserved.
        </div>
        <div className="text-sm">
          <a className="underline" href="/privacy">
            Privacy
          </a>{" "}
          |{" "}
          <a className="underline" href="/terms">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
