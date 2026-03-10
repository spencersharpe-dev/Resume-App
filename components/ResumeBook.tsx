"use client";

import { useState } from "react";

// ── Types ──────────────────────────────────────────────────────────────────
type FlipDir = "forward" | "backward";
type Phase = "idle" | "flipping";

// ── Small helper components ────────────────────────────────────────────────

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
          <span className="font-semibold text-[12px] text-slate-800 font-sans">
            {company}
          </span>
          <span className="text-slate-300 text-[11px]">—</span>
          <span className="text-[11px] text-slate-500 italic truncate">
            {title}
          </span>
        </div>
        <span className="text-[10px] text-slate-400 whitespace-nowrap flex-shrink-0">
          {period}
        </span>
      </div>
      <ul className="space-y-[3px]">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2 items-start">
            <span className="text-amber-500 text-[9px] mt-[3px] flex-shrink-0 leading-none">
              ◆
            </span>
            <span className="text-[10.5px] text-slate-600 leading-snug">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── Page 1 ─────────────────────────────────────────────────────────────────

function ResumePage1() {
  return (
    <div className="px-9 pt-8 pb-6 font-sans h-full">
      {/* Name & contact header */}
      <div className="mb-4">
        <h1 className="font-serif text-[28px] font-bold text-slate-900 tracking-tight leading-none">
          Spencer Sharpe
        </h1>
        <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[10.5px] text-slate-500">
          <span>Tampa, FL</span>
          <span className="text-slate-300">·</span>
          <span>(714) 788-8706</span>
          <span className="text-slate-300">·</span>
          <span>swsharpe1@gmail.com</span>
          <span className="text-slate-300">·</span>
          <span className="text-blue-600 font-medium">LinkedIn</span>
        </div>
        <div className="mt-3 h-[2px] bg-gradient-to-r from-slate-800 via-slate-400 to-transparent rounded-full" />
      </div>

      <SectionHeader title="Work Experience" />

      <JobEntry
        company="Sharpe Ventures"
        title="Talent Engineer"
        period="July 2025 — Current"
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
        company="GOAT"
        title="Senior QA Engineer"
        period="June 2022 — July 2025"
        bullets={[
          "Partnered with backend engineering teams to enhance and stabilize internal tooling, optimizing the fulfillment process and ensuring seamless end-to-end operations, saving the company roughly $3.5 million yearly",
          "Designed, wrote, and maintained comprehensive test case suites in Xray, adapting to evolving tooling and fulfillment workflows to ensure consistent test coverage and traceability",
          "Led QA efforts on logistics initiatives by testing and validating shipping methods, resulting in measurable reductions in cost per shipment and improved delivery times for end users",
          "Worked closely with the Alias (selling platform) pod, driving successful launches of high-impact features such as bulk shipping and bulk consignment, supporting scalability for power sellers",
          "Interviewed and trained new team members to align with internal processes and help with prioritization",
          "Tested shipment optimizations that lowered the cost per shipment from $9.96 to $9.13 per order",
        ]}
      />

      <div className="absolute bottom-5 right-9 text-[9px] text-slate-300 tracking-widest uppercase">
        Page 1 of 2
      </div>
    </div>
  );
}

// ── Page 2 ─────────────────────────────────────────────────────────────────

function ResumePage2() {
  return (
    <div className="px-9 pt-8 pb-6 font-sans h-full">
      {/* Continuation header */}
      <div className="mb-4">
        <div className="flex items-baseline justify-between">
          <h1 className="font-serif text-[18px] font-bold text-slate-400 tracking-tight">
            Spencer Sharpe
          </h1>
          <span className="text-[10px] text-slate-400 italic tracking-wide">
            continued
          </span>
        </div>
        <div className="mt-2 h-[2px] bg-gradient-to-r from-slate-800 via-slate-400 to-transparent rounded-full" />
      </div>

      <JobEntry
        company="GOAT"
        title="QA Engineer"
        period="Dec 2018 — Mar 2020"
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
          <span className="text-[11px] text-slate-700 font-medium">
            Irvine Valley College, Irvine CA
          </span>
          <span className="text-[10px] text-slate-400">Aug 2013 — Jun 2015</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[11px] text-slate-700 font-medium">
            Northwood High School, Irvine CA
          </span>
          <span className="text-[10px] text-slate-400">Sep 2009 — Jun 2013</span>
        </div>
      </div>

      <SectionHeader title="Extended Education" />
      <div className="mb-4 space-y-1.5">
        <div className="flex justify-between items-center">
          <span className="text-[11px] text-slate-700 font-medium">
            Cal Poly Extended Ed — Full Stack Bootcamp
          </span>
          <span className="text-[10px] text-slate-400">June 2020 — Jan 2021</span>
        </div>
        <p className="text-[10.5px] text-slate-500 leading-snug mt-1">
          Independently building full-stack websites and apps from the ground up,
          taking projects from concept to deployment using Claude, ChatGPT, Figma,
          VSCode, GitHub, Xcode, Playwright, and Supabase.
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

      <div className="absolute bottom-5 right-9 text-[9px] text-slate-300 tracking-widest uppercase">
        Page 2 of 2
      </div>
    </div>
  );
}

// ── Page content helper ────────────────────────────────────────────────────

function PageContent({ page }: { page: number }) {
  return page === 0 ? <ResumePage1 /> : <ResumePage2 />;
}

// ── Shared page card styles ────────────────────────────────────────────────

const CARD_STYLE =
  "absolute inset-0 bg-[#FAFAF7] rounded-[3px] shadow-[0_2px_4px_rgba(0,0,0,0.12),0_8px_24px_rgba(0,0,0,0.35),0_24px_56px_rgba(0,0,0,0.5)]";

// ── Main exported component ────────────────────────────────────────────────

const TOTAL_PAGES = 2;

export default function ResumeBook() {
  const [currentPage, setCurrentPage] = useState(0);
  const [phase, setPhase] = useState<Phase>("idle");
  const [flipDir, setFlipDir] = useState<FlipDir>("forward");
  const [fromPage, setFromPage] = useState(0);
  const [toPage, setToPage] = useState(1);

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
    }, 720);
  };

  const isFlipping = phase === "flipping";
  const canGoBack = currentPage > 0;
  const canGoForward = currentPage < TOTAL_PAGES - 1;

  return (
    <div className="flex flex-col items-center select-none">
      {/* ── Outer layout: arrows flanking the book ── */}
      <div className="flex items-center gap-6">
        {/* ── Left / Back arrow ── */}
        <button
          onClick={() => flip("backward")}
          disabled={!canGoBack || isFlipping}
          aria-label="Previous page"
          className={[
            "w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0",
            "bg-gradient-to-br from-amber-400 to-amber-600",
            "shadow-[0_4px_20px_rgba(251,191,36,0.4)]",
            "transition-all duration-200",
            canGoBack && !isFlipping
              ? "opacity-100 hover:scale-110 hover:from-amber-300 hover:to-amber-500 cursor-pointer"
              : "opacity-20 cursor-not-allowed",
          ].join(" ")}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* ── Book with 3-D perspective ── */}
        <div style={{ perspective: "1000px" }}>
          <div
            className="relative"
            style={{ width: "700px", minHeight: "900px" }}
          >
            {/*
             * BACK LAYER — the upcoming page, revealed as the front flips away.
             * Only rendered during a flip so it's never visible otherwise.
             */}
            {isFlipping && (
              <div className={CARD_STYLE}>
                <PageContent page={toPage} />
              </div>
            )}

            {/*
             * FRONT LAYER — the current page.
             * During a flip it rotates away (backface hidden so it vanishes at 90°),
             * exposing the back layer underneath.
             */}
            <div
              className={`${CARD_STYLE} page-spine`}
              style={{
                zIndex: 2,
                transformOrigin:
                  flipDir === "forward" ? "left center" : "right center",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                willChange: "transform",
                animation: isFlipping
                  ? `${
                      flipDir === "forward"
                        ? "bookFlipForward"
                        : "bookFlipBackward"
                    } 0.72s cubic-bezier(0.645, 0.045, 0.355, 1.000) forwards`
                  : "none",
              }}
            >
              <PageContent page={isFlipping ? fromPage : currentPage} />

              {/* Corner curl hint on page 1 */}
              {!isFlipping && currentPage < TOTAL_PAGES - 1 && (
                <div
                  className="absolute bottom-0 right-0 w-10 h-10 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.07) 50%)",
                    borderRadius: "0 0 3px 0",
                  }}
                />
              )}
            </div>
          </div>
        </div>

        {/* ── Right / Forward arrow ── */}
        <button
          onClick={() => flip("forward")}
          disabled={!canGoForward || isFlipping}
          aria-label="Next page"
          className={[
            "w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0",
            "bg-gradient-to-br from-amber-400 to-amber-600",
            "shadow-[0_4px_20px_rgba(251,191,36,0.4)]",
            "transition-all duration-200",
            canGoForward && !isFlipping
              ? "opacity-100 hover:scale-110 hover:from-amber-300 hover:to-amber-500 cursor-pointer"
              : "opacity-20 cursor-not-allowed",
          ].join(" ")}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* ── Page indicator dots ── */}
      <div className="flex items-center gap-3 mt-7">
        {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
          <button
            key={i}
            aria-label={`Go to page ${i + 1}`}
            onClick={() => {
              if (i > currentPage) flip("forward");
              else if (i < currentPage) flip("backward");
            }}
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
        Page {currentPage + 1} / {TOTAL_PAGES}
      </p>
    </div>
  );
}
