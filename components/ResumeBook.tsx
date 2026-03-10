"use client";

import { useState } from "react";

// ── Types ──────────────────────────────────────────────────────────────────
type FlipDir = "forward" | "backward";

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

      {/* Work Experience */}
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

      {/* Page number */}
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

      {/* GOAT QA Engineer */}
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

      {/* Education */}
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

      {/* Extended Education */}
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

      {/* Extra-Curricular */}
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

      {/* Page number */}
      <div className="absolute bottom-5 right-9 text-[9px] text-slate-300 tracking-widest uppercase">
        Page 2 of 2
      </div>
    </div>
  );
}

// ── Navigation arrow button ────────────────────────────────────────────────

function NavArrow({
  direction,
  onClick,
  visible,
}: {
  direction: "left" | "right";
  onClick: () => void;
  visible: boolean;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === "left" ? "Previous page" : "Next page"}
      className={[
        "absolute top-1/2 -translate-y-1/2 z-30",
        direction === "left" ? "-left-16" : "-right-16",
        "w-12 h-12 rounded-full",
        "bg-gradient-to-br from-amber-400 to-amber-600",
        "hover:from-amber-300 hover:to-amber-500",
        "shadow-[0_4px_20px_rgba(251,191,36,0.4)]",
        "flex items-center justify-center",
        "transition-all duration-300 ease-out",
        visible
          ? "opacity-100 scale-100"
          : "opacity-0 scale-90 pointer-events-none",
      ].join(" ")}
    >
      {direction === "left" ? (
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 19l-7-7 7-7" />
        </svg>
      ) : (
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 5l7 7-7 7" />
        </svg>
      )}
    </button>
  );
}

// ── Main exported component ────────────────────────────────────────────────

const TOTAL_PAGES = 2;

export default function ResumeBook() {
  const [page, setPage] = useState(0);
  const [displayedPage, setDisplayedPage] = useState(0);
  const [animClass, setAnimClass] = useState("");
  const [flipping, setFlipping] = useState(false);
  const [hovered, setHovered] = useState(false);

  const flip = (dir: FlipDir) => {
    if (flipping) return;
    const next = dir === "forward" ? page + 1 : page - 1;
    if (next < 0 || next >= TOTAL_PAGES) return;

    setFlipping(true);
    setAnimClass(dir === "forward" ? "flip-forward-out" : "flip-backward-out");

    setTimeout(() => {
      setDisplayedPage(next);
      setPage(next);
      setAnimClass(dir === "forward" ? "flip-forward-in" : "flip-backward-in");
      setTimeout(() => {
        setAnimClass("");
        setFlipping(false);
      }, 360);
    }, 360);
  };

  return (
    <div className="flex flex-col items-center select-none">
      {/* Hover zone — includes side arrow areas */}
      <div
        className="relative px-20"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* ── Left / Previous arrow ── */}
        <NavArrow
          direction="left"
          onClick={() => flip("backward")}
          visible={hovered && page > 0}
        />

        {/* ── Right / Next arrow ── */}
        <NavArrow
          direction="right"
          onClick={() => flip("forward")}
          visible={hovered && page < TOTAL_PAGES - 1}
        />

        {/* ── Resume card ── */}
        <div
          className={[
            "relative page-spine",
            "bg-[#FAFAF7]",
            "rounded-[3px]",
            // Layered shadow for paper depth
            "shadow-[0_2px_4px_rgba(0,0,0,0.12),0_8px_24px_rgba(0,0,0,0.35),0_24px_56px_rgba(0,0,0,0.5),4px_0_12px_rgba(0,0,0,0.08)]",
            // Glow on hover
            hovered && !flipping
              ? "ring-1 ring-amber-400/20 shadow-[0_2px_4px_rgba(0,0,0,0.12),0_8px_24px_rgba(0,0,0,0.35),0_24px_56px_rgba(0,0,0,0.5),0_0_60px_rgba(251,191,36,0.08)]"
              : "",
            "transition-shadow duration-500",
            animClass,
          ]
            .filter(Boolean)
            .join(" ")}
          style={{ width: "700px", minHeight: "900px" }}
        >
          {displayedPage === 0 ? <ResumePage1 /> : <ResumePage2 />}

          {/* Page-edge curl hint (bottom-right corner fold) */}
          {page < TOTAL_PAGES - 1 && (
            <div
              className="absolute bottom-0 right-0 w-10 h-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.06) 50%)",
                borderRadius: "0 0 3px 0",
              }}
            />
          )}
        </div>
      </div>

      {/* ── Page indicator dots ── */}
      <div className="flex items-center gap-3 mt-7">
        {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
          <button
            key={i}
            aria-label={`Go to page ${i + 1}`}
            onClick={() => {
              if (i > page) flip("forward");
              else if (i < page) flip("backward");
            }}
            className={[
              "rounded-full transition-all duration-300",
              i === page
                ? "w-6 h-2.5 bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.5)]"
                : "w-2.5 h-2.5 bg-slate-600 hover:bg-slate-400",
            ].join(" ")}
          />
        ))}
      </div>

      {/* ── Page counter ── */}
      <p className="text-slate-500 text-xs mt-2.5 tracking-widest uppercase">
        Page {page + 1} / {TOTAL_PAGES}
      </p>
    </div>
  );
}
