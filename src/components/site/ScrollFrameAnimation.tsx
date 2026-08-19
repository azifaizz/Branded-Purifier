import { useEffect, useRef, useCallback, useState } from "react";
import { Droplets, Wrench, Factory, ShieldCheck, FlaskConical } from "lucide-react";

const TOTAL_FRAMES = 300;
const SECTION_HEIGHT_VH = 600;
const SMOOTHING_FACTOR = 0.12;

/** Generate the exact filename for a given 0-based index */
function getFramePath(index: number): string {
  const num = String(index + 1).padStart(4, "0");
  return `/frames/frame_${num}.jpg`;
}

/** Process steps shown on the left side */
const PROCESS_STEPS = [
  {
    icon: FlaskConical,
    title: "Source Water Analysis",
    body: "Testing TDS, hardness, iron and microbial levels to determine the exact treatment process required for the site.",
    range: [0, 0.2] as const,
  },
  {
    icon: Droplets,
    title: "System Design & Supply",
    body: "Selecting the right membrane configuration, vessel sizing, pump capacity and pre-treatment stages for the required output.",
    range: [0.2, 0.4] as const,
  },
  {
    icon: Factory,
    title: "Skid Fabrication",
    body: "MS and SS frame fabrication, vessel mounting, piping layout, dosing arrangement and control panel wiring in-house.",
    range: [0.4, 0.6] as const,
  },
  {
    icon: Wrench,
    title: "Installation & Commissioning",
    body: "Plumbing, electrical connections, trial runs, output quality verification and operator handover at the customer site.",
    range: [0.6, 0.8] as const,
  },
  {
    icon: ShieldCheck,
    title: "Service & Maintenance",
    body: "Annual maintenance contracts, membrane and media replacement, and component supply from branch stock.",
    range: [0.8, 1.0] as const,
  },
];

export function ScrollFrameAnimation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  const framesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  const loadedRef = useRef<boolean[]>(new Array(TOTAL_FRAMES).fill(false));
  const currentFrameRef = useRef(0);
  const targetFrameRef = useRef(0);
  const lastRenderedFrameRef = useRef(-1);
  const progressRef = useRef(0);
  const rafIdRef = useRef<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);

  /** Load a single frame */
  const loadFrame = useCallback((index: number): Promise<void> => {
    return new Promise((resolve) => {
      if (framesRef.current[index]) { resolve(); return; }
      const img = new Image();
      img.src = getFramePath(index);
      img.onload = () => {
        framesRef.current[index] = img;
        loadedRef.current[index] = true;
        resolve();
      };
      img.onerror = () => {
        loadedRef.current[index] = false;
        resolve();
      };
    });
  }, []);

  /** Find the nearest loaded frame */
  const findNearestLoaded = useCallback((targetIndex: number): number => {
    if (framesRef.current[targetIndex]) return targetIndex;
    for (let delta = 1; delta < TOTAL_FRAMES; delta++) {
      const below = targetIndex - delta;
      const above = targetIndex + delta;
      if (below >= 0 && framesRef.current[below]) return below;
      if (above < TOTAL_FRAMES && framesRef.current[above]) return above;
    }
    return 0;
  }, []);

  /** Draw a frame onto the canvas */
  const renderFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const displayIndex = findNearestLoaded(frameIndex);
    const img = framesRef.current[displayIndex];
    if (!img) return;

    if (displayIndex === lastRenderedFrameRef.current) return;
    lastRenderedFrameRef.current = displayIndex;

    const cw = canvas.width;
    const ch = canvas.height;
    ctx.clearRect(0, 0, cw, ch);

    const imgAspect = 1920 / 1080;
    const canvasAspect = cw / ch;

    let dw: number, dh: number, dx: number, dy: number;
    if (canvasAspect > imgAspect) {
      // Canvas is wider than image (e.g. 21:9 vs 16:9) -> Scale to fit width
      dw = cw; dh = cw / imgAspect;
      dx = 0; dy = (ch - dh) / 2;
    } else {
      // Canvas is taller than image -> Scale to fit height
      dh = ch; dw = ch * imgAspect;
      dx = (cw - dw) / 2; dy = 0;
    }
    ctx.drawImage(img, dx, dy, dw, dh);
  }, [findNearestLoaded]);

  /** Update the process steps highlight based on scroll progress — uses direct DOM manipulation */
  const updateSteps = useCallback((progress: number) => {
    const container = stepsContainerRef.current;
    if (!container) return;
    const stepEls = container.querySelectorAll<HTMLDivElement>("[data-step]");
    stepEls.forEach((el, i) => {
      const step = PROCESS_STEPS[i];
      if (!step) return;
      const [start, end] = step.range;
      const isActive = progress >= start && progress < end;
      const isPast = progress >= end;
      const stepProgress = isActive ? (progress - start) / (end - start) : 0;

      // Water fill bar
      const bar = el.querySelector<HTMLDivElement>("[data-bar]");
      if (bar) {
        if (isActive) {
          bar.style.height = `${stepProgress * 100}%`;
          bar.style.opacity = "1";
        } else if (isPast) {
          bar.style.height = "100%";
          bar.style.opacity = "1";
        } else {
          bar.style.height = "0%";
          bar.style.opacity = "0.3";
        }
      }

      // Water drop on the connector
      const drop = el.querySelector<HTMLDivElement>("[data-drop]");
      if (drop) {
        if (isActive) {
          drop.style.top = `${stepProgress * 100}%`;
          drop.style.opacity = "1";
          drop.style.transform = "translateX(-50%) scale(1)";
        } else if (isPast) {
          drop.style.top = "100%";
          drop.style.opacity = "0";
          drop.style.transform = "translateX(-50%) scale(0.5)";
        } else {
          drop.style.top = "0%";
          drop.style.opacity = "0";
          drop.style.transform = "translateX(-50%) scale(0.5)";
        }
      }

      // Card styling
      const card = el.querySelector<HTMLDivElement>("[data-card]");
      if (card) {
        if (isActive) {
          card.style.opacity = "1";
          card.style.transform = "translateX(0)";
        } else if (isPast) {
          card.style.opacity = "0.5";
          card.style.transform = "translateX(0)";
        } else {
          card.style.opacity = "0.3";
          card.style.transform = "translateX(-8px)";
        }
      }

      // Number circle — water fill effect
      const numFill = el.querySelector<HTMLDivElement>("[data-num-fill]");
      const numText = el.querySelector<HTMLSpanElement>("[data-num-text]");
      const numRing = el.querySelector<HTMLDivElement>("[data-num]");
      if (numFill && numRing) {
        if (isActive) {
          // Fill from bottom as the step progresses
          const fillPercent = Math.min(stepProgress * 2, 1); // fills in the first half of the step
          numFill.style.height = `${fillPercent * 100}%`;
          numRing.style.borderColor = "var(--color-brand)";
          numRing.style.transform = "scale(1)";
          numRing.style.boxShadow = "0 0 12px rgba(47,128,201,0.4)";
          if (numText) numText.style.color = fillPercent > 0.5 ? "white" : "rgba(255,255,255,0.4)";
        } else if (isPast) {
          numFill.style.height = "100%";
          numRing.style.borderColor = "var(--color-brand)";
          numRing.style.transform = "scale(1)";
          numRing.style.boxShadow = "none";
          if (numText) numText.style.color = "white";
        } else {
          numFill.style.height = "0%";
          numRing.style.borderColor = "rgba(255,255,255,0.15)";
          numRing.style.transform = "scale(1)";
          numRing.style.boxShadow = "none";
          if (numText) numText.style.color = "rgba(255,255,255,0.4)";
        }
      }
    });
  }, []);

  /** Animation loop */
  const tick = useCallback(() => {
    const diff = targetFrameRef.current - currentFrameRef.current;
    if (Math.abs(diff) > 0.5) {
      currentFrameRef.current += diff * SMOOTHING_FACTOR;
    } else {
      currentFrameRef.current = targetFrameRef.current;
    }

    const frameIndex = Math.round(currentFrameRef.current);
    const clamped = Math.max(0, Math.min(TOTAL_FRAMES - 1, frameIndex));
    renderFrame(clamped);

    const progress = clamped / (TOTAL_FRAMES - 1);
    if (Math.abs(progress - progressRef.current) > 0.002) {
      progressRef.current = progress;
      updateSteps(progress);
    }

    rafIdRef.current = requestAnimationFrame(tick);
  }, [renderFrame, updateSteps]);

  /** Handle scroll */
  const handleScroll = useCallback(() => {
    const section = sectionRef.current;
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const sectionHeight = section.offsetHeight;
    const viewportHeight = window.innerHeight;
    const scrollableDistance = sectionHeight - viewportHeight;
    if (scrollableDistance <= 0) return;

    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));
    const targetFrame = Math.floor(progress * (TOTAL_FRAMES - 1));
    targetFrameRef.current = Math.max(0, Math.min(TOTAL_FRAMES - 1, targetFrame));
  }, []);

  /** Resize canvas */
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;
    const dpr = window.devicePixelRatio || 1; // Uncap DPR for maximum sharpness on modern displays
    const w = parent.clientWidth;
    const h = parent.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
    }
    
    lastRenderedFrameRef.current = -1;
  }, []);

  useEffect(() => {
    let cancelled = false;
    const INITIAL_BATCH = 30;
    let totalLoaded = 0;

    async function preloadFrames() {
      await loadFrame(0);
      if (cancelled) return;
      totalLoaded++;
      setLoadProgress(totalLoaded / TOTAL_FRAMES);
      resizeCanvas();
      renderFrame(0);

      const firstBatchPromises: Promise<void>[] = [];
      for (let i = 1; i < INITIAL_BATCH && i < TOTAL_FRAMES; i++) {
        firstBatchPromises.push(
          loadFrame(i).then(() => {
            totalLoaded++;
            if (!cancelled) setLoadProgress(totalLoaded / TOTAL_FRAMES);
          })
        );
      }
      await Promise.all(firstBatchPromises);
      if (cancelled) return;
      setIsLoading(false);

      const BATCH_SIZE = 10;
      for (let start = INITIAL_BATCH; start < TOTAL_FRAMES; start += BATCH_SIZE) {
        if (cancelled) return;
        const batchPromises: Promise<void>[] = [];
        for (let i = start; i < start + BATCH_SIZE && i < TOTAL_FRAMES; i++) {
          batchPromises.push(
            loadFrame(i).then(() => {
              totalLoaded++;
              if (!cancelled && totalLoaded % 30 === 0) {
                setLoadProgress(totalLoaded / TOTAL_FRAMES);
              }
            })
          );
        }
        await Promise.all(batchPromises);
      }
    }

    preloadFrames();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    rafIdRef.current = requestAnimationFrame(tick);

    return () => {
      cancelled = true;
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(rafIdRef.current);
    };
  }, [loadFrame, handleScroll, resizeCanvas, tick, renderFrame]);

  // Prevent scrolling while the initial frames are loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-ink"
      style={{ height: `${SECTION_HEIGHT_VH}vh` }}
    >
      {/* Sticky viewport — Offset by navbar height (68px mobile / 76px desktop) */}
      <div className="sticky top-[68px] lg:top-[76px] h-[calc(100vh-68px)] lg:h-[calc(100vh-76px)] w-full overflow-hidden bg-ink">
        
        {/* CANVAS (Top on mobile, Right on desktop, bleeding to edge) */}
        <div className="absolute top-0 left-0 w-full h-[45vh] lg:h-full lg:left-auto lg:right-0 lg:w-[60vw] xl:w-[65vw] z-0">
          <canvas
            ref={canvasRef}
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          />
          {/* Desktop: Dark left edge fading to transparent */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-40 xl:w-56 bg-gradient-to-r from-ink to-transparent pointer-events-none" />
          {/* Mobile: Dark bottom edge fading to transparent */}
          <div className="lg:hidden absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent pointer-events-none" />
        </div>

        {/* FOREGROUND CONTENT (Contained in max-w-7xl) */}
        <div className="relative z-10 h-full w-full max-w-7xl mx-auto flex flex-col lg:flex-row px-5 lg:px-10 pointer-events-none">
          
          {/* Mobile Spacer to push text below the canvas */}
          <div className="h-[40vh] shrink-0 lg:hidden pointer-events-none" />

          {/* LEFT (Desktop) / BOTTOM (Mobile) — Process steps */}
          <div
            ref={stepsContainerRef}
            className="flex flex-col w-full lg:w-[420px] shrink-0 h-[calc(100%-40vh)] lg:h-full overflow-y-auto justify-start lg:justify-center pr-2 lg:pr-0 pb-10 lg:pb-0 pointer-events-auto"
            style={{ scrollbarWidth: 'none' }}
          >
            <p className="text-[10px] lg:text-[11px] tracking-[0.2em] text-brand uppercase font-display font-bold mb-4 lg:mb-6 mt-4 lg:mt-0">
              The Process
            </p>
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.title} data-step className="flex gap-3.5 relative">
                {/* Vertical timeline line + water drop */}
                <div className="flex flex-col items-center shrink-0">
                  {/* Number circle with water fill */}
                  <div
                    data-num
                    className="relative flex h-7 w-7 lg:h-8 lg:w-8 items-center justify-center rounded-full z-10 overflow-hidden transition-all duration-500 border-2 bg-ink"
                    style={{
                      borderColor: "rgba(255,255,255,0.15)",
                    }}
                  >
                    {/* Water fill inside circle */}
                    <div
                      data-num-fill
                      className="absolute bottom-0 left-0 w-full bg-brand transition-[height] duration-300 ease-out"
                      style={{ height: "0%" }}
                    />
                    <span data-num-text className="relative z-10 text-[10px] lg:text-[11px] font-bold transition-colors duration-300" style={{ color: "rgba(255,255,255,0.4)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="relative flex-1 min-h-[20px] lg:min-h-[24px] flex justify-center -my-1 lg:-my-1.5 z-20">
                      {/* Visible 2px track with fill */}
                      <div className="relative w-[2px] h-full bg-white/10 overflow-hidden">
                        <div
                          data-bar
                          className="absolute top-0 left-0 w-full bg-gradient-to-b from-brand to-brand/60 transition-[height] duration-200 ease-out"
                          style={{ height: "0%", opacity: "0.3" }}
                        />
                      </div>
                      {/* Water drop — positioned on top of the track, NOT clipped */}
                      <div
                        data-drop
                        className="absolute left-1/2 z-10 pointer-events-none transition-all duration-200 ease-out"
                        style={{ top: "0%", opacity: "0", transform: "translateX(-50%) scale(0.5)" }}
                      >
                        <svg width="10" height="14" viewBox="0 0 10 14" className="drop-shadow-[0_0_8px_rgba(47,128,201,0.7)] lg:w-[12px] lg:h-[16px]">
                          <path
                            d="M5 0C5 0 0 6 0 9C0 11.76 2.24 14 5 14C7.76 14 10 11.76 10 9C10 6 5 0 5 0Z"
                            fill="var(--color-brand)"
                          />
                          <path
                            d="M3.5 8.5C3.5 8.5 2.5 9.5 3 11C3.3 11.8 4 12 4 12"
                            fill="none"
                            stroke="rgba(255,255,255,0.5)"
                            strokeWidth="0.7"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card content */}
                <div
                  data-card
                  className="pb-3 lg:pb-4 transition-all duration-500 ease-out"
                  style={{ opacity: "0.3", transform: "translateX(-8px)" }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <step.icon size={14} className="text-brand" />
                    <h3 className="text-[13px] lg:text-[14px] font-bold text-white leading-tight">{step.title}</h3>
                  </div>
                  <p className="text-[11px] lg:text-[12px] leading-[1.6] text-white/50">{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT (Desktop) / TOP (Mobile) — Empty Spacer to maintain flex layout and keep text on the left */}
          <div className="hidden lg:block relative flex-1 pointer-events-none"></div>
        </div>

      </div>

      {/* Full-Screen Loading Splash Screen */}
      <div 
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-ink transition-opacity duration-700 ease-out ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="flex flex-col items-center gap-5">
          <Droplets className="text-brand animate-bounce" size={32} />
          <div className="w-64 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-brand rounded-full transition-[width] duration-300 ease-out" 
              style={{ width: `${Math.max(10, loadProgress * 100 * (300/30))}%` }}
            />
          </div>
          <span className="text-[12px] font-bold tracking-[0.2em] text-brand uppercase mt-2">
            Loading Experience
          </span>
        </div>
      </div>
    </section>
  );
}

