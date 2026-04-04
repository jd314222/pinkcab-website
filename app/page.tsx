import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-12">
      <div className="flex w-full max-w-xl flex-col items-center text-center">
        {/* Logo */}
        <div className="mb-10 p-4 rounded-3xl bg-pink-soft">
          <Image
            src="/pinkcablogo.png"
            alt="PinkCab Logo"
            width={160}
            height={160}
            priority
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Pink Cab OU
        </h1>
        
        <p className="mt-4 text-xl font-medium text-pink-accent italic">
          Safe Rides for Bobcats, by Bobcats.
        </p>

        {/* Description */}
        <p className="mt-8 text-lg leading-relaxed text-slate-600">
          A women-run, cross-platform ride-sharing application exclusively for 
          female-identifying Ohio University students.
        </p>

        {/* Download Buttons, Will hopefully be implemented one of these days */}
        <div className="mt-12 flex flex-col w-full gap-4 sm:flex-row sm:justify-center">
          <button className="btn-pink flex h-16 items-center justify-center rounded-2xl px-10 text-xl font-bold shadow-lg shadow-pink-100">
            App Coming Soon!
          </button>
          <a
            className="btn-white flex h-16 items-center justify-center rounded-2xl px-10 text-xl font-bold shadow-lg shadow-pink-100"
            href="https://groupme.com/join_group/97762553/iBlzScy9"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us Here 
          </a>
        </div>

        <div className="pt-8 flex flex-col items-center gap-2 text-sm text-slate-500">
          <p className="font-semibold text-slate-600">Legal</p>
          <div className="flex items-center gap-4">
            <a
              href="/docs/privacy-policy-02-04-2026.html"
              className="underline hover:text-slate-700"
            >
              Privacy Policy
            </a>
            <a
              href="/docs/terms-of-service-02-04-2026.html"
              className="underline hover:text-slate-700"
            >
              Terms of Service
            </a>
            <a
              href="/deletion"
              className="underline hover:text-slate-700"
            >
              Account Deletion
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="pt-20 flex flex-col items-center gap-4 text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} PinkCab</p>
        </footer>
      </div>
    </main>
  );
}
