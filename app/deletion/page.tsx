import Image from "next/image";

export default function DeletionPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-12">
      <div className="flex w-full max-w-xl flex-col items-center text-center">
        <div className="mb-10 rounded-3xl bg-pink-soft p-4">
          <Image
            src="/pinkcablogo.png"
            alt="PinkCab Logo"
            width={140}
            height={140}
            priority
          />
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Pink Cab OU
        </h1>

        <p className="mt-4 text-xl font-medium italic text-pink-accent">
          Account Deletion
        </p>

        <p className="mt-2 text-lg leading-relaxed text-slate-600">
          To delete your account, go to your profile in the app and tap
          <strong> Delete Account</strong>.
        </p>

        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          After you request deletion, your account is scheduled for permanent
          deletion in 30 days.
        </p>

        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          If you change your mind during that 30-day period, sign in again to
          cancel deletion on the profile page and keep your account.
        </p>

        <a
          href="/"
          className="mt-10 underline text-slate-500 hover:text-slate-700"
        >
          Back to Home
        </a>

        <footer className="pt-16 text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} PinkCab</p>
        </footer>
      </div>
    </main>
  );
}