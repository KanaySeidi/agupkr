import { useEffect, useState, Children, type ReactNode, useRef } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";

interface StepperSimpleProps {
  children: ReactNode;
  autoplay?: boolean;
  autoplayInterval?: number; // ms
  className?: string;
  indicatorClassName?: string;
  contentClassName?: string;
  // key for localStorage if you want separate instances
  storageKeyPrefix?: string;
}

export default function StepperSimple({
  children,
  autoplay = true,
  autoplayInterval = 4000,
  className = "",
  indicatorClassName = "",
  contentClassName = "",
  storageKeyPrefix = "stepper.simple",
}: StepperSimpleProps) {
  const steps = Children.toArray(children);
  const total = steps.length || 1;
  const [current, setCurrent] = useState<number>(1);
  const autoplayRef = useRef<number | null>(null);
  const hoverRef = useRef(false);

  const todayKey = `${storageKeyPrefix}.date`;
  const bgKey = `${storageKeyPrefix}.bg`;
  const palette = ["#fff", "#f8fafc", "#f1f5f9", "#eef2ff", "#f0fdf4"]; // soft neutrals + one soft blue/green
  const [bg, setBg] = useState<string>(() => {
    try {
      const storedDate = localStorage.getItem(todayKey);
      const storedBg = localStorage.getItem(bgKey);
      const today = new Date().toISOString().slice(0, 10);
      if (storedDate === today && storedBg) return storedBg;
      const idx = Math.abs(hashString(today)) % palette.length;
      return palette[idx];
    } catch {
      return palette[0];
    }
  });

  useEffect(() => {
    try {
      const today = new Date().toISOString().slice(0, 10);
      const storedDate = localStorage.getItem(todayKey);
      if (storedDate !== today) {
        const nextIdx = Math.abs(hashString(today)) % palette.length || 0;
        const next = palette[nextIdx];
        localStorage.setItem(todayKey, today);
        localStorage.setItem(bgKey, next);
        setBg(next);
      } else {
        const storedBg = localStorage.getItem(bgKey);
        if (storedBg) setBg(storedBg);
      }
    } catch {}
  }, []);

  // autoplay
  useEffect(() => {
    if (!autoplay) return;
    if (autoplayRef.current) {
      window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
    autoplayRef.current = window.setInterval(() => {
      if (hoverRef.current) return;
      setCurrent((prev) => (prev >= total ? 1 : prev + 1));
    }, autoplayInterval);

    return () => {
      if (autoplayRef.current) {
        window.clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };
  }, [autoplay, autoplayInterval, total]);

  const goTo = (n: number) => {
    setCurrent(Math.max(1, Math.min(n, total)));
  };

  return (
    <div
      className={`w-full px-6 py-10 ${className} rounded-md mt-5`}
      style={{ background: bg }}
      onMouseEnter={() => (hoverRef.current = true)}
      onMouseLeave={() => (hoverRef.current = false)}
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between gap-4 overflow-x-auto p-2 mb-2">
          {Array.from({ length: total }).map((_, i) => {
            const idx = i + 1;
            const isActive = idx === current;
            return (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                aria-current={isActive ? "step" : undefined}
                className={`flex h-10 w-10  items-center justify-center rounded-full border-0 ${
                  isActive
                    ? "scale-110 ring-4 ring-gray-500 bg-hover-sinii"
                    : "bg-sinii bg-opacity-90"
                } ${indicatorClassName}`}
                title={`Step ${idx}`}
              >
                <span
                  className={`font-semibold text-sm ${
                    isActive ? "text-white" : "text-white"
                  }`}
                  style={{ lineHeight: 1 }}
                >
                  {idx}
                </span>
              </button>
            );
          })}
        </div>

        <div
          className="rounded-2xl bg-white shadow-lg"
          style={{ border: "1px solid rgba(0,0,0,0.15)" }}
        >
          <div className={`p-10 ${contentClassName}`}>
            <AnimatePresence initial={false} mode="sync">
              <Slide key={current}>{steps[current - 1]}</Slide>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

function Slide({ children }: { children: ReactNode }) {
  const variants: Variants = {
    enter: { opacity: 0, x: 40 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
  };
  return (
    <motion.div
      key={String(Math.random())}
      initial="enter"
      animate="center"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

/* tiny hash */
function hashString(s: string) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
