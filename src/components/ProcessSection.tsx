import React, { useEffect, useRef } from "react";
import "./Process.css";

interface ProcessStep {
  number: string;
  title: string;
  paragraphs: string[];
}

// Configuration for card animations
const ANIMATION_CONFIG = {
  card2Offset: -50, // Adjust this value to control where the second card stops (negative = moves up)
  card3Offset: -250, // Adjust this value to control where the third card stops (negative = moves up)
  triggerOffset: 0.5, // When to start the animation (0.5 = middle of viewport)
  smoothness: 0.15, // Higher = faster snap, Lower = smoother movement
};

const Process: React.FC = () => {
  const stepsRef = useRef<HTMLElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const processSteps: ProcessStep[] = [
    {
      number: "01",
      title: "Discover",
      paragraphs: [
        "We identify promising opportunities, visionary founders, and emerging markets with transformative potential.",
        "Through deep industry insight and a forward-looking lens, we uncover ideas that align with Africa's evolving economic and social landscape.",
      ],
    },
    {
      number: "02",
      title: "Research",
      paragraphs: [
        "We conduct rigorous due diligence and market analysis to validate each opportunity's strength, scalability, and sustainability. This process allows us to de-risk investments and ensure that every decision is grounded in data, market intelligence, and strategic fit.",
      ],
    },
    {
      number: "03",
      title: "Investments",
      paragraphs: [
        "Once opportunities are validated, we deploy capital and strategic support to help our portfolio companies scale and thrive. Beyond funding, we offer operational expertise, strategic partnerships, and governance guidance, ensuring our investments deliver measurable impact and enduring value.",
      ],
    },
  ];

  // 🔹 Smooth linear interpolation
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  useEffect(() => {
    const steps = stepsRef.current;
    if (!steps.length) return;

    const smoothPositions = new Array(steps.length).fill(0);
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const vh = window.innerHeight;
        const scrollY = window.scrollY;

        steps.forEach((step, i) => {
          if (i === 0) return; // First step stays fixed

          const rect = step.getBoundingClientRect();
          const startTop = rect.top + scrollY;

          // Calculate when this card should start moving
          const triggerStart = startTop - vh * ANIMATION_CONFIG.triggerOffset;
          const triggerEnd = triggerStart + vh * 0.7; // Movement range

          // Calculate progress (0 to 1)
          const progress = Math.max(0, Math.min(1, (scrollY - triggerStart) / (triggerEnd - triggerStart)));

          // Get the target offset for this card (card2Offset for second card, card3Offset for third)
          const targetOffset = i === 1 ? ANIMATION_CONFIG.card2Offset : ANIMATION_CONFIG.card3Offset;

          // Calculate final position
          const targetY = targetOffset * progress;

          // Smoothly interpolate to target position
          smoothPositions[i] = lerp(smoothPositions[i], targetY, ANIMATION_CONFIG.smoothness);

          // Apply transform
          step.style.transform = `translateY(${smoothPositions[i]}px)`;

          // Update opacity
          const opacity = progress < 0.1 ? 0.4 : 
                         progress > 0.9 ? 1 : 
                         0.4 + progress * 0.6;
          
          step.style.opacity = `${opacity}`;

          // Update active state
          if (progress > 0.1 && progress < 0.9) {
            step.classList.add("active");
            step.classList.remove("past");
          } else if (progress >= 0.9) {
            step.classList.remove("active");
            step.classList.add("past");
          } else {
            step.classList.remove("active", "past");
          }
        });

        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // 🔹 Intersection observer for fade-in visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("visible", entry.isIntersecting);
        });
      },
      { threshold: 0.4 }
    );

    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="processSection">
      <div className="process" ref={containerRef}>
        <div>
          <div className="process-content">
            <img src="/Images/Vector 2.png" alt="" />
            <h3>Process</h3>
          </div>
          <h2 className="section-title">Our Approach</h2>
        </div>

        <div className="process-container">
          {processSteps.map((step, index) => (
            <section
              key={step.number}
              className="process-step"
              ref={(el) => {
                if (el) stepsRef.current[index] = el;
              }}
            >
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              {step.paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>

        <div className="spacer-bottom"></div>
      </div>
    </section>
  );
};

export default Process;
