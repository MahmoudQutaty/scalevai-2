"use client";

import Link from "next/link";
import { useEffect, useState, type CSSProperties } from "react";
import { CountUp } from "@/components/ui/CountUp";
import HeroVideoBackground from "@/components/ui/HeroVideoBackground";
import ServiceHeroActions from "@/components/ui/ServiceHeroActions";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import ProcessStepsSection from "@/components/catalogue/shared/ProcessStepsSection";
import SharedFaqSection from "@/components/catalogue/SharedFaqSection";
import CapabilityFlipCard from "@/components/catalogue/workforce-intelligence/CapabilityFlipCard";
import RelatedSolutionsSection from "@/components/catalogue/workforce-intelligence/RelatedSolutionsSection";
import FinalCtaSection from "@/components/catalogue/workforce-intelligence/FinalCtaSection";
import { ContactSection } from "@/components/sections/home/ContactSection";
import { talentContactInterestOptions } from "@/data/contact-form";
import { talentIntelligencePage as copy } from "@/data/talent-intelligence-page";
import styles from "./TalentIntelligencePage.module.css";

const candidates = [
  { id: "0482", score: 94, name: "Candidate 0482", colors: ["#6366f1", "#a855f7"] },
  { id: "0317", score: 91, name: "Candidate 0317", colors: ["#0ea5e9", "#22d3ee"] },
  { id: "0905", score: 88, name: "Candidate 0905", colors: ["#10b981", "#34d399"] },
  { id: "0661", score: 84, name: "Candidate 0661", colors: ["#f59e0b", "#f97316"] },
  { id: "0128", score: 79, name: "Candidate 0128", colors: ["#ec4899", "#8b5cf6"] },
];

function CandidateRanking() {
  const [order, setOrder] = useState(candidates.map((_, index) => index));
  const [scores, setScores] = useState(candidates.map((candidate) => candidate.score));
  const [scoring, setScoring] = useState(false);
  const [progress, setProgress] = useState(100);
  const [count, setCount] = useState(1200);

  useEffect(() => {
    const finalOrder = candidates.map((_, index) => index);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let active = true;
    let frame = 0;
    const startRound = () => {
      setScoring(true);
      setCount(0);
      setProgress(0);
      setOrder([...finalOrder].sort(() => Math.random() - 0.5));
      setScores(candidates.map(() => 20 + Math.round(Math.random() * 30)));
      const startedAt = performance.now();
      const animate = (now: number) => {
        if (!active) return;
        const amount = Math.min((now - startedAt) / 2400, 1);
        setCount(Math.round(amount * 1200));
        setProgress(amount * 100);
        if (amount < 1) frame = window.requestAnimationFrame(animate);
        else {
          setOrder(finalOrder);
          setScores(candidates.map((candidate) => candidate.score));
          setScoring(false);
        }
      };
      frame = window.requestAnimationFrame(animate);
    };

    startRound();
    const timer = window.setInterval(startRound, 7500);
    return () => {
      active = false;
      window.clearInterval(timer);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div aria-label="Animated illustration of candidates being scored and ranked" className={styles.ranking}>
      <div className={styles.rankingHeader}>
        <span><b>Senior Sales Associate</b><small>Campaign applications</small></span>
        <span className={`${styles.scoreStatus} ${!scoring ? styles.scoreComplete : ""}`} aria-live="polite">
          {scoring ? "Scoring…" : "Top 40 ready ✓"}
        </span>
      </div>
      <div className={styles.progressTrack}><i style={{ width: `${progress}%` }} /></div>
      <div className={styles.rankingList} aria-hidden="true">
        {candidates.map((candidate, index) => {
          const position = order.indexOf(index);
          const score = scores[index] ?? 0;
          return (
            <div
              className={`${styles.candidate} ${!scoring && position < 3 ? styles.topCandidate : ""}`}
              key={candidate.id}
              style={{ top: `${Math.max(0, position) * 52}px` }}
            >
              <span className={styles.rankNumber}>{position + 1}</span>
              <span
                className={styles.avatar}
                style={{ "--avatar-a": candidate.colors[0], "--avatar-b": candidate.colors[1] } as CSSProperties}
              >
                {candidate.id.slice(-2)}
              </span>
              <span className={styles.candidateInfo}>{candidate.name}<i><b style={{ width: `${score}%` }} /></i></span>
              <b className={styles.score}>{score}</b>
            </div>
          );
        })}
      </div>
      <div className={styles.rankingFooter}>
        <span>Scored <b>{count.toLocaleString("en-US")}</b> / 1,200</span>
        <span>Illustrative example</span>
      </div>
    </div>
  );
}

function ProblemExplorer() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive((index) => (index + 1) % copy.examples.length), 4500);
    return () => window.clearInterval(timer);
  }, [paused]);
  const example = copy.examples[active] ?? copy.examples[0];
  if (!example) return null;
  return (
    <div className={styles.examplePanel} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className={styles.exampleTabs}>
        <small>SAME RESUME LINE, TWO OUTCOMES</small>
        {copy.examples.map((item, index) => (
          <button
            aria-pressed={active === index}
            className={active === index ? styles.activeTab : ""}
            key={item.line}
            onClick={() => { setActive(index); setPaused(true); }}
            onFocus={() => { setActive(index); setPaused(true); }}
            type="button"
          >
            <span>0{index + 1}</span>“{item.line}”
          </button>
        ))}
      </div>
      <div className={styles.exampleContent}>
        <p className={styles.quote}>“{example.line}”</p>
        <div className={styles.comparison}>
          <article className={styles.badMatch}>
            <h3>Keyword filter</h3><small>Rigid word counts</small>
            <p>{example.rejected}</p><div className={styles.matchTrack}><i /></div>
            <div className={styles.matchLegend}><span>Match</span><span>Missed</span></div>
          </article>
          <article className={styles.goodMatch}>
            <h3>Talent Intelligence</h3><small>Skills understood in context</small>
            <p>{example.matched}</p><div className={styles.matchTrack}><i /></div>
            <div className={styles.matchLegend}><span>Match</span><span>Found</span></div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default function TalentIntelligencePage() {
  return (
    <main className={styles.page} id="main-content" tabIndex={-1}>
      <header className={styles.hero} id="top">
        <HeroVideoBackground className={styles.heroMedia} src={copy.video} />
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
                <ol>
                  {copy.breadcrumb.map((item) => (
                    <li key={item.label}><Link href={item.href}>{item.label}</Link><span aria-hidden="true">/</span></li>
                  ))}
                  <li aria-current="page">Talent Intelligence</li>
                </ol>
              </nav>
              <span className={styles.tag}>{copy.category}</span>
              <h1>Talent <span>Intelligence</span></h1>
              <p className={styles.lead}>{copy.lead}</p>
              <ServiceHeroActions
                className={styles.heroActions}
                primaryHref="#talk"
                primaryLabel="Book a call"
                secondaryHref="#how"
                secondaryLabel="See how it works ↓"
              />
            </div>
            <CandidateRanking />
          </div>
          <div className={styles.metrics}>
            {copy.metrics.map((metric) => (
              <div key={metric.label}>
                {metric.kind === "count"
                  ? <CountUp className={styles.metricValue} value={metric.value} suffix={metric.suffix} />
                  : <b className={styles.metricValue}>{metric.value}</b>}
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <section aria-labelledby="problem-heading" className={styles.problemSection} id="problem">
        <div className={styles.container}>
          <div className={styles.problemTop}>
            <Reveal>
              <p className={styles.kicker}>THE PROBLEM</p>
              <SectionHeading id="problem-heading" text={copy.problem.heading} />
              {copy.problem.paragraphs.map((paragraph) => <p className={styles.problemParagraph} key={paragraph}>{paragraph}</p>)}
            </Reveal>
            <Reveal className={styles.problemStats}>
              {copy.problem.stats.map((stat) => <article key={stat.value}><b>{stat.value}</b><span>{stat.label}</span></article>)}
            </Reveal>
          </div>
          <Reveal>
            <ProblemExplorer />
            <p className={styles.illustrative}>Illustrative examples of how the same resume line is treated.</p>
          </Reveal>
        </div>
      </section>

      <ProcessStepsSection
        variant="timeline"
        id="how"
        label="HOW IT WORKS"
        heading={copy.process.heading}
        description={copy.process.description}
        steps={copy.process.steps}
        cta={{
          heading: copy.process.ctaHeading,
          description: copy.process.ctaDescription,
          label: "Book a call",
          href: "#talk",
        }}
      />

      <section aria-labelledby="capabilities-heading" className={styles.section}>
        <div className={styles.container}>
          <Reveal><p className={styles.kicker}>KEY CAPABILITIES</p></Reveal>
          <Reveal><SectionHeading id="capabilities-heading" text="Built to find the candidates keywords miss" /></Reveal>
          <div className={styles.capabilityGrid}>
            {copy.capabilities.map((item, index) => (
              <Reveal key={item.title}>
                <CapabilityFlipCard capability={item} iconIndex={index} />
              </Reveal>
            ))}
          </div>
          <p className={styles.atsLabel}>TWO-WAY SYNC WITH</p>
          <div aria-label="Supported ATS platforms" className={styles.atsMarquee}>
            <div>{[...copy.ats, ...copy.ats].map((name, index) => <span key={`${name}-${index}`}>{name}</span>)}</div>
          </div>
        </div>
      </section>

      <section aria-labelledby="audience-heading" className={styles.section}>
        <div className={styles.container}>
          <Reveal><p className={styles.kicker}>WHERE IT DELIVERS THE MOST VALUE</p></Reveal>
          <Reveal><SectionHeading id="audience-heading" text="Built for teams with high applicant volumes and specialized hires" /></Reveal>
          <Reveal><p className={styles.sectionIntro}>Talent Intelligence is built for teams that manage high applicant volumes or hire for specialized technical, clinical, and leadership roles.</p></Reveal>
          <div className={styles.audienceGrid}>
            {copy.audiences.map((audience) => (
              <Reveal key={audience.title}>
                <article className={styles.audienceCard} style={{ "--audience-a": audience.colors[0], "--audience-b": audience.colors[1] } as CSSProperties}>
                  <div className={styles.audienceVisual}><span>Explore ›</span></div>
                  <div className={styles.audienceText}>
                    <h3>{audience.title}</h3><p>{audience.description}</p>
                    <ul><li>{audience.benefit}</li></ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="usecase-heading" className={`${styles.section} ${styles.useCaseSection}`}>
        <div className={styles.container}>
          <Reveal><p className={styles.kicker}>USE CASE</p></Reveal>
          <Reveal className={styles.useCase}>
            <div>
              <span className={styles.liveLabel}>USE CASE · DUBAI, UAE</span>
              <h2 id="usecase-heading">{copy.useCase.heading}</h2>
              <p>{copy.useCase.description}</p>
              <div className={styles.useCaseMetrics}>
                <article><CountUp value={1200} suffix="" /><span>Applications per campaign</span></article>
                <article><b>&lt; 4 hrs</b><span>To a ranked shortlist</span></article>
                <article><CountUp value={40} suffix="" /><span>Stack-ranked top candidates</span></article>
                <article><b>Day 1</b><span>Score justifications and interview prompts</span></article>
              </div>
            </div>
            <div className={styles.dashboard}>
              <h3>Shortlist funnel <em>● Complete</em></h3>
              {[
                ["Applications", "1,200", "100%"],
                ["Scored", "1,200", "100%"],
                ["Top tier", "40", "12%"],
              ].map(([label, value, width]) => (
                <div className={styles.funnelRow} key={label}>
                  <span>{label}</span><i><b style={{ width }} /></i><span>{value}</span>
                </div>
              ))}
              <div className={styles.justification}><b>SCORE JUSTIFICATION</b>✓ Verified achievements<br />✓ Transferable skills<br />✓ Relevant certifications<br />→ Targeted interview prompts generated</div>
              <small>Illustrative view</small>
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="responsible-heading" className={styles.section}>
        <div className={styles.container}>
          <Reveal><p className={styles.kicker}>RESPONSIBLE BY DESIGN</p><SectionHeading id="responsible-heading" text="Decision support, never the decision" /></Reveal>
          <div className={styles.responsibleGrid}>
            {copy.responsible.map((item) => (
              <Reveal key={item.title}>
                <article className={styles.responsibleCard}><i aria-hidden="true">{item.icon}</i><b>{item.title}</b><span>{item.description}</span></article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SharedFaqSection
        sectionId="faq"
        accordionId="talent-faq"
        label="FAQ"
        heading="Talent Intelligence FAQ"
        intro="Can’t find your answer? Our team will walk you through it."
        bookCall={{ label: "Book a call", href: "#talk" }}
        items={copy.faq}
      />

      <RelatedSolutionsSection
        sectionId="talent-related-solutions"
        label="MORE SOLUTIONS"
        heading="Other ways ScaleVAI puts AI to work"
        cards={copy.related}
      />
      <FinalCtaSection sectionId="talent-final-cta" content={copy.finalCta} />
      <ContactSection
        content={{
          heading: copy.contact.heading,
          text: copy.contact.description,
          form: {
            heading: copy.contact.formHeading,
            name: "Full name",
            company: "Company",
            email: "Business email",
            phone: "Phone",
            interestPlaceholder: "Select an area of interest",
            message: "Message",
            submit: "Send enquiry",
            success: copy.contact.success,
          },
        }}
        fieldIdPrefix="talent"
        initialInterest="Talent Intelligence"
        interestOptions={talentContactInterestOptions}
        includePartnerBanner={false}
        sectionId="talk"
        variant="service"
      />
    </main>
  );
}
