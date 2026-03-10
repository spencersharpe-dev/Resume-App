"use client";

import { useState, useEffect, useRef } from "react";

// ── Types ──────────────────────────────────────────────────────────────────
type FlipDir = "forward" | "backward";
type Phase = "idle" | "flipping";

// ── Helper components ──────────────────────────────────────────────────────

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="mt-5 mb-2.5">
      <div className="flex items-center gap-2">
        <span className="w-1 h-3.5 rounded-sm bg-amber-500 flex-shrink-0" />
        <h2 className="text-[10px] font-bold tracking-[0.18em] uppercase text-slate-500">
          {title}
        </h2>
      </div>
      <div className="mt-1.5 h-px bg-gradient-to-r from-slate-300 via-slate-200 to-transparent" />
    </div>
  );
}

function JobEntry({
  company,
  title,
  period,
  bullets,
}: {
  company: string;
  title: string;
  period: string;
  bullets: string[];
}) {
  return (
    <div className="mb-4">
      <div className="flex items-baseline justify-between gap-2 mb-1">
        <div className="flex items-baseline gap-1.5 min-w-0">
          <span className="font-semibold text-[12px] text-slate-800 font-sans">{company}</span>
          <span className="text-slate-300 text-[11px]">—</span>
          <span className="text-[11px] text-slate-500 italic truncate">{title}</span>
        </div>
        <span className="text-[10px] text-slate-400 whitespace-nowrap flex-shrink-0">{period}</span>
      </div>
      <ul className="space-y-[3px]">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2 items-start">
            <span className="text-amber-500 text-[9px] mt-[3px] flex-shrink-0 leading-none">◆</span>
            <span className="text-[10.5px] text-slate-600 leading-snug">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── Cover page ─────────────────────────────────────────────────────────────

function CoverPage() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0d1321] rounded-[3px] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg,#f59e0b 0px,#f59e0b 1px,transparent 1px,transparent 10px)",
        }}
      />
      <div className="absolute inset-5 border border-amber-600/25 rounded-[2px] pointer-events-none" />
      <div className="absolute inset-8 border border-amber-500/12 rounded-[2px] pointer-events-none" />

      {[
        "top-5 left-5",
        "top-5 right-5 rotate-90",
        "bottom-5 right-5 rotate-180",
        "bottom-5 left-5 -rotate-90",
      ].map((pos, i) => (
        <svg key={i} className={`absolute ${pos} w-5 h-5 text-amber-600/40`} viewBox="0 0 20 20" fill="currentColor">
          <path d="M0 0 L8 0 L8 1 L1 1 L1 8 L0 8 Z" />
        </svg>
      ))}

      <div className="relative text-center px-16 z-10">
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-500/60" />
          <svg className="w-4 h-4 text-amber-400/80 flex-shrink-0" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 1l1.5 4.5H15l-4.25 3.1 1.6 4.9L8 10.8l-4.35 2.7 1.6-4.9L1 5.5h5.5Z" />
          </svg>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-amber-500/60" />
        </div>

        <p className="text-amber-400/60 text-[10px] tracking-[0.4em] uppercase mb-6 font-light">
          The Work History of
        </p>
        <h1 className="font-serif font-bold leading-none mb-2">
          <span className="block text-6xl text-white tracking-tight">Spencer</span>
          <span className="block text-6xl bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-300 bg-clip-text text-transparent tracking-tight mt-1">
            Sharpe
          </span>
        </h1>

        <div className="flex items-center justify-center gap-3 mt-10">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-500/60" />
          <svg className="w-4 h-4 text-amber-400/80 flex-shrink-0" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 1l1.5 4.5H15l-4.25 3.1 1.6 4.9L8 10.8l-4.35 2.7 1.6-4.9L1 5.5h5.5Z" />
          </svg>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-amber-500/60" />
        </div>
        <p className="text-amber-500/40 text-[10px] tracking-[0.25em] uppercase mt-6 font-light">
          Talent Engineer &nbsp;·&nbsp; Senior QA Engineer
        </p>
      </div>

      <div className="absolute bottom-10 flex items-center gap-2 text-amber-400/30">
        <span className="text-[9px] tracking-[0.3em] uppercase">Turn the page to begin</span>
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
}

// ── Resume page 1 ──────────────────────────────────────────────────────────

function ResumePage1() {
  return (
    <div className="px-9 pt-8 pb-6 font-sans h-full">
      <div className="mb-4">
        <h1 className="font-serif text-[28px] font-bold text-slate-900 tracking-tight leading-none">Spencer Sharpe</h1>
        <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[10.5px] text-slate-500">
          <span>Tampa, FL</span><span className="text-slate-300">·</span>
          <span>(714) 788-8706</span><span className="text-slate-300">·</span>
          <span>swsharpe1@gmail.com</span><span className="text-slate-300">·</span>
          <span className="text-blue-600 font-medium">LinkedIn</span>
        </div>
        <div className="mt-3 h-[2px] bg-gradient-to-r from-slate-800 via-slate-400 to-transparent rounded-full" />
      </div>

      <SectionHeader title="Work Experience" />
      <JobEntry
        company="Sharpe Ventures" title="Talent Engineer" period="July 2025 — Current"
        bullets={[
          "Designed and implemented bi-directional workflows between Attio and Clay, enabling automatic candidate enrichment and data hydration at the point of record creation",
          "Built scalable Clay sourcing workflows to identify, enrich, and segment high-quality candidates across multiple search criteria and hiring pipelines",
          "Automated candidate lifecycle operations by creating Attio workflows that routed records, enforced data consistency, and reduced manual pipeline management",
          "Integrated Slack and Metaview to streamline interview feedback capture and ensure real-time visibility into hiring activity across recruiting stakeholders",
          "Owned end-to-end recruiting systems operations, optimizing data flows, integrations, and automations to improve pipeline velocity and reporting accuracy",
          "Built and automated a candidate role-matching workflow using Attio, Claude, Linear, and Slack, enabling the team to intelligently resurface and match existing CRM candidates to new opportunities",
          "Built an automated sourcing machine that kicks off from a single Slack command — drop in a role and it automatically sources relevant candidates for that pipeline",
        ]}
      />
      <JobEntry
        company="GOAT" title="Senior QA Engineer" period="June 2022 — July 2025"
        bullets={[
          "Partnered with backend engineering teams to enhance and stabilize internal tooling, optimizing the fulfillment process and ensuring seamless end-to-end operations, saving the company roughly $3.5 million yearly",
          "Designed, wrote, and maintained comprehensive test case suites in Xray, adapting to evolving tooling and fulfillment workflows to ensure consistent test coverage and traceability",
          "Led QA efforts on logistics initiatives by testing and validating shipping methods, resulting in measurable reductions in cost per shipment and improved delivery times for end users",
          "Worked closely with the Alias (selling platform) pod, driving successful launches of high-impact features such as bulk shipping and bulk consignment, supporting scalability for power sellers",
          "Interviewed and trained new team members to align with internal processes and help with prioritization",
          "Tested shipment optimizations that lowered the cost per shipment from $9.96 to $9.13 per order",
        ]}
      />
      <div className="absolute bottom-5 right-9 text-[9px] text-slate-300 tracking-widest uppercase">Page 1 of 2</div>
    </div>
  );
}

// ── Resume page 2 ──────────────────────────────────────────────────────────

function ResumePage2() {
  return (
    <div className="px-9 pt-8 pb-6 font-sans h-full">
      <div className="mb-4">
        <div className="flex items-baseline justify-between">
          <h1 className="font-serif text-[18px] font-bold text-slate-400 tracking-tight">Spencer Sharpe</h1>
          <span className="text-[10px] text-slate-400 italic tracking-wide">continued</span>
        </div>
        <div className="mt-2 h-[2px] bg-gradient-to-r from-slate-800 via-slate-400 to-transparent rounded-full" />
      </div>

      <JobEntry
        company="GOAT" title="QA Engineer" period="Dec 2018 — Mar 2020"
        bullets={[
          "Managed the entire transition as sole QA Analyst for GOAT's Flight Club platform from the ground up — from FC1 (legacy Magento backend) to FC2 (Sneakers backend)",
          "Tested the new site with one QA Automation Engineer for a completely redesigned frontend",
          "Wrote all new test cases based on the redesigned Flight Club website (~300 test cases)",
          "Tested fraudulent transactions occurring on Flight Club through Accertify",
          "Worked cross-functionally with Product, Engineering, Marketing, and Business stakeholders to ensure technical objectives matched business goals",
          "Operated within a fully agile environment with bi-weekly sprints and weekly regressions for weekly production deployments",
          "Developed a sanity process for hot fixes that needed to go out post-release",
          "Discovered opportunities to convert manual processes to automation",
          "Tested new features in the GOAT iOS and Android applications",
          "Tested the transition from legacy email providers (migrated to Leanplum as primary email service)",
          "Utilized QA tools including Charles Proxy, Android Studio, and Jenkins",
          "Deep experience using Jira as the primary source for ticketing bugs and sprint planning",
        ]}
      />

      <SectionHeader title="Education" />
      <div className="mb-4 space-y-1.5">
        <div className="flex justify-between items-center">
          <span className="text-[11px] text-slate-700 font-medium">Irvine Valley College, Irvine CA</span>
          <span className="text-[10px] text-slate-400">Aug 2013 — Jun 2015</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[11px] text-slate-700 font-medium">Northwood High School, Irvine CA</span>
          <span className="text-[10px] text-slate-400">Sep 2009 — Jun 2013</span>
        </div>
      </div>

      <SectionHeader title="Extended Education" />
      <div className="mb-4 space-y-1.5">
        <div className="flex justify-between items-center">
          <span className="text-[11px] text-slate-700 font-medium">Cal Poly Extended Ed — Full Stack Bootcamp</span>
          <span className="text-[10px] text-slate-400">June 2020 — Jan 2021</span>
        </div>
        <p className="text-[10.5px] text-slate-500 leading-snug mt-1">
          Independently building full-stack websites and apps from concept to deployment using Claude, ChatGPT, Figma, VSCode, GitHub, Xcode, Playwright, and Supabase.
        </p>
      </div>

      <SectionHeader title="Extra-Curricular" />
      <div className="space-y-1.5">
        <div className="flex justify-between items-center">
          <span className="text-[11px] text-slate-700 font-medium">Carpentry</span>
          <span className="text-[10px] text-slate-400">Sep 2013 – Present</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[11px] text-slate-700 font-medium">Videography</span>
          <span className="text-[10px] text-slate-400">Sep 2009 – Present</span>
        </div>
      </div>

      <div className="absolute bottom-5 right-9 text-[9px] text-slate-300 tracking-widest uppercase">Page 2 of 2</div>
    </div>
  );
}

// ── Page content router ────────────────────────────────────────────────────

function PageContent({ page }: { page: number }) {
  if (page === 0) return <CoverPage />;
  if (page === 1) return <ResumePage1 />;
  return <ResumePage2 />;
}

// ── Arrow button ───────────────────────────────────────────────────────────

function ArrowBtn({
  dir,
  enabled,
  onClick,
}: {
  dir: "left" | "right";
  enabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={!enabled}
      aria-label={dir === "left" ? "Previous page" : "Next page"}
      className={[
        "w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0",
        "bg-gradient-to-br from-amber-400 to-amber-600",
        "shadow-[0_4px_20px_rgba(251,191,36,0.4)]",
        "transition-all duration-200",
        enabled
          ? "opacity-100 hover:scale-110 hover:from-amber-300 hover:to-amber-500 cursor-pointer active:scale-95"
          : "opacity-20 cursor-not-allowed",
      ].join(" ")}
    >
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
        <path d={dir === "left" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
      </svg>
    </button>
  );
}

// ── Constants ──────────────────────────────────────────────────────────────

const TOTAL_PAGES = 3;
const BOOK_W = 700;
const BOOK_H = 900;
const FLIP_MS = 780;
// fast-start, slow-land — mimics a page with physical weight
const FLIP_EASE = "cubic-bezier(0.52, 0.02, 0.19, 1.02)";

function pageLabel(p: number) {
  if (p === 0) return "Cover";
  return `Page ${p} of 2`;
}

// ── Main component ─────────────────────────────────────────────────────────

export default function ResumeBook() {
  const [currentPage, setCurrentPage] = useState(0);
  const [phase, setPhase] = useState<Phase>("idle");
  const [flipDir, setFlipDir] = useState<FlipDir>("forward");
  const [fromPage, setFromPage] = useState(0);
  const [toPage, setToPage] = useState(1);

  // ── Responsive scaling ────────────────────────────────────────────────
  // The book is always rendered at BOOK_W × BOOK_H internally.
  // We scale the whole wrapper to fit the viewport.
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const recalc = () => {
      // On desktop: arrows sit beside the book (2 × 56px + 2 × 24px gap = 160px)
      // On mobile:  arrows go below, only the book width matters
      const arrowRoom = window.innerWidth >= 768 ? 160 : 0;
      const available = window.innerWidth - 32 - arrowRoom; // 16px padding each side
      setScale(Math.min(1, available / BOOK_W));
    };
    recalc();
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, []);

  // ── Touch / swipe ─────────────────────────────────────────────────────
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 48) {
      flip(dx < 0 ? "forward" : "backward");
    }
    touchStartX.current = null;
  };

  // ── Flip logic ────────────────────────────────────────────────────────
  const flip = (dir: FlipDir) => {
    if (phase !== "idle") return;
    const next = dir === "forward" ? currentPage + 1 : currentPage - 1;
    if (next < 0 || next >= TOTAL_PAGES) return;

    setFromPage(currentPage);
    setToPage(next);
    setFlipDir(dir);
    setPhase("flipping");

    setTimeout(() => {
      setCurrentPage(next);
      setPhase("idle");
    }, FLIP_MS + 20);
  };

  const isFlipping = phase === "flipping";
  const canBack = currentPage > 0;
  const canForward = currentPage < TOTAL_PAGES - 1;

  // Direction-aware shadow: strong where the hinge is, fades across the page
  const shadowGradient =
    flipDir === "forward"
      ? "linear-gradient(90deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.25) 40%, transparent 72%)"
      : "linear-gradient(270deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.25) 40%, transparent 72%)";

  // Highlight that sweeps across the turning page (light catching the paper)
  const highlightGradient =
    flipDir === "forward"
      ? "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.18) 70%, rgba(255,255,255,0.45) 88%, rgba(255,255,255,0.1) 100%)"
      : "linear-gradient(270deg, transparent 0%, rgba(255,255,255,0.18) 70%, rgba(255,255,255,0.45) 88%, rgba(255,255,255,0.1) 100%)";

  // Perspective origin shifts slightly toward the hinge side for a more natural viewing angle
  const perspOrigin = flipDir === "forward" ? "62% 50%" : "38% 50%";

  return (
    <div className="flex flex-col items-center select-none w-full">

      {/* ── Desktop layout: arrows left + book + arrows right ── */}
      <div className="hidden md:flex items-center gap-6">
        <ArrowBtn dir="left"  enabled={canBack    && !isFlipping} onClick={() => flip("backward")} />

        {/* Book */}
        <BookCard
          scale={scale}
          isFlipping={isFlipping}
          flipDir={flipDir}
          fromPage={fromPage}
          toPage={toPage}
          currentPage={currentPage}
          perspOrigin={perspOrigin}
          shadowGradient={shadowGradient}
          highlightGradient={highlightGradient}
          canForward={canForward}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        />

        <ArrowBtn dir="right" enabled={canForward && !isFlipping} onClick={() => flip("forward")} />
      </div>

      {/* ── Mobile layout: book full-width + arrows below ── */}
      <div className="flex md:hidden flex-col items-center gap-5 w-full">
        <BookCard
          scale={scale}
          isFlipping={isFlipping}
          flipDir={flipDir}
          fromPage={fromPage}
          toPage={toPage}
          currentPage={currentPage}
          perspOrigin={perspOrigin}
          shadowGradient={shadowGradient}
          highlightGradient={highlightGradient}
          canForward={canForward}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        />
        <div className="flex items-center gap-8">
          <ArrowBtn dir="left"  enabled={canBack    && !isFlipping} onClick={() => flip("backward")} />
          <ArrowBtn dir="right" enabled={canForward && !isFlipping} onClick={() => flip("forward")} />
        </div>
      </div>

      {/* ── Page dots ── */}
      <div className="flex items-center gap-3 mt-7">
        {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
          <button
            key={i}
            aria-label={`Go to ${pageLabel(i)}`}
            onClick={() => { if (i > currentPage) flip("forward"); else if (i < currentPage) flip("backward"); }}
            className={[
              "rounded-full transition-all duration-300",
              i === currentPage
                ? "w-6 h-2.5 bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.5)]"
                : "w-2.5 h-2.5 bg-slate-600 hover:bg-slate-400",
            ].join(" ")}
          />
        ))}
      </div>

      <p className="text-slate-500 text-xs mt-2.5 tracking-widest uppercase">
        {pageLabel(currentPage)}
      </p>
      {/* Mobile swipe hint (only on touch devices, only on cover) */}
      {currentPage === 0 && (
        <p className="md:hidden text-slate-600 text-[10px] mt-1 tracking-wider">
          swipe or tap arrows to turn
        </p>
      )}
    </div>
  );
}

// ── BookCard sub-component (shared between desktop & mobile layouts) ────────

const CARD = "absolute inset-0 rounded-[3px] overflow-hidden shadow-[0_2px_4px_rgba(0,0,0,0.15),0_8px_24px_rgba(0,0,0,0.4),0_24px_56px_rgba(0,0,0,0.55)]";

function BookCard({
  scale,
  isFlipping,
  flipDir,
  fromPage,
  toPage,
  currentPage,
  perspOrigin,
  shadowGradient,
  highlightGradient,
  canForward,
  onTouchStart,
  onTouchEnd,
}: {
  scale: number;
  isFlipping: boolean;
  flipDir: FlipDir;
  fromPage: number;
  toPage: number;
  currentPage: number;
  perspOrigin: string;
  shadowGradient: string;
  highlightGradient: string;
  canForward: boolean;
  onTouchStart: (e: React.TouchEvent) => void;
  onTouchEnd: (e: React.TouchEvent) => void;
}) {
  return (
    /*
     * Scaling wrapper: renders the book at full BOOK_W × BOOK_H internally,
     * then uses CSS transform+origin to fit smaller screens.
     * The outer div reserves the correct layout space at the scaled size.
     */
    <div style={{ width: BOOK_W * scale, height: BOOK_H * scale, flexShrink: 0 }}>
      <div
        style={{
          width: BOOK_W,
          height: BOOK_H,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/*
         * Perspective container.
         * perspectiveOrigin is offset toward the hinge so the 3-D angle
         * feels like you're watching the page turn from a natural reading position.
         */}
        <div style={{ perspective: "850px", perspectiveOrigin: perspOrigin, width: "100%", height: "100%" }}>
          <div className="relative w-full h-full">

            {/* ── BACK LAYER: destination page ── */}
            {isFlipping && (
              <div className={`${CARD} bg-[#FAFAF7]`} style={{ zIndex: 1 }}>
                <PageContent page={toPage} />
                {/* Directional shadow cast by the turning page */}
                <div
                  className="absolute inset-0 pointer-events-none z-20 rounded-[3px]"
                  style={{
                    background: shadowGradient,
                    animation: `flipShadowFade ${FLIP_MS}ms ease-out forwards`,
                  }}
                />
              </div>
            )}

            {/* ── FRONT LAYER: current page, rotates away ── */}
            <div
              className={`${CARD} page-spine bg-[#FAFAF7]`}
              style={{
                zIndex: 2,
                transformOrigin: flipDir === "forward" ? "left center" : "right center",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                willChange: "transform",
                animation: isFlipping
                  ? `${flipDir === "forward" ? "bookFlipForward" : "bookFlipBackward"} ${FLIP_MS}ms ${FLIP_EASE} forwards`
                  : "none",
              }}
            >
              <PageContent page={isFlipping ? fromPage : currentPage} />

              {/* Paper-edge curl highlight — simulates light on the turning surface */}
              {isFlipping && (
                <div
                  className="absolute inset-0 pointer-events-none z-20 rounded-[3px]"
                  style={{
                    background: highlightGradient,
                    animation: `pageCurlHighlight ${FLIP_MS * 0.6}ms ease-in-out forwards`,
                    backgroundSize: "200% 100%",
                  }}
                />
              )}

              {/* Viewer-side darkening: page dims as it rotates away from light */}
              {isFlipping && (
                <div
                  className="absolute inset-0 pointer-events-none z-21 rounded-[3px] bg-black"
                  style={{ animation: `flipPageDarken ${FLIP_MS * 0.5}ms ease-in forwards` }}
                />
              )}

              {/* Corner curl hint (static, visible only when not flipping) */}
              {!isFlipping && canForward && (
                <div
                  className="absolute bottom-0 right-0 w-12 h-12 pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg,transparent 50%,rgba(0,0,0,0.07) 50%)",
                    borderRadius: "0 0 3px 0",
                  }}
                />
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
