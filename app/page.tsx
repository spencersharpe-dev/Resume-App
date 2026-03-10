import ResumeBook from "@/components/ResumeBook";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-[#12103a] to-slate-950 relative overflow-x-hidden">
      {/* Ambient glow orbs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[15%] w-[600px] h-[600px] bg-amber-500/8 rounded-full blur-[140px]" />
        <div className="absolute top-[40%] left-[-10%] w-[400px] h-[400px] bg-indigo-400/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-4 py-16 pb-24">
        {/* ── Hero title section ── */}
        <header className="text-center mb-14 max-w-2xl w-full">
          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/50 to-amber-500" />
            <svg className="w-4 h-4 text-amber-400 flex-shrink-0" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0l2 6h6l-5 3.6 1.9 5.9L8 12l-4.9 3.5L5 9.6 0 6h6z" />
            </svg>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-amber-500/50 to-amber-500" />
          </div>

          <h1 className="font-serif font-bold leading-tight mb-4">
            <span className="block text-4xl md:text-5xl lg:text-6xl bg-gradient-to-br from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
              Welcome to Spencer&apos;s
            </span>
            <span className="block text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-300 bg-clip-text text-transparent mt-1">
              Resume
            </span>
          </h1>

          <p className="text-slate-400 text-sm tracking-[0.22em] uppercase font-light mt-2">
            Talent Engineer &nbsp;·&nbsp; Senior QA Engineer
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/50 to-amber-500" />
            <svg className="w-4 h-4 text-amber-400 flex-shrink-0" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0l2 6h6l-5 3.6 1.9 5.9L8 12l-4.9 3.5L5 9.6 0 6h6z" />
            </svg>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-amber-500/50 to-amber-500" />
          </div>
        </header>

        {/* ── Profile Photo ── */}
        <div className="mb-14 relative">
          {/* Outer soft glow */}
          <div className="absolute inset-0 rounded-full bg-amber-400/25 blur-2xl scale-125" />
          {/* Gold gradient ring */}
          <div className="relative w-44 h-44 rounded-full p-[3px] bg-gradient-to-br from-amber-200 via-amber-500 to-yellow-600 shadow-[0_0_40px_rgba(251,191,36,0.3)]">
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
              {/* Profile photo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Profile-image-resume.png"
                alt="Spencer Sharpe"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          {/* Name badge below photo */}
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <span className="bg-gradient-to-r from-slate-800 to-slate-700 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full shadow-lg">
              Spencer Sharpe
            </span>
          </div>
        </div>

        {/* ── Resume Book ── */}
        <div className="mt-8 w-full flex justify-center">
          <ResumeBook />
        </div>

        {/* ── Footer ── */}
        <footer className="mt-20 text-center text-slate-600 text-xs tracking-wider">
          <p>Built with Next.js &amp; Tailwind CSS &nbsp;·&nbsp; Deployed on Vercel</p>
        </footer>
      </div>
    </main>
  );
}
