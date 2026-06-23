import { useEffect } from "react";

const SELECTORS = [".reveal", ".reveal-left", ".reveal-right", ".reveal-zoom", ".reveal-words"].join(",");

export function useReveal(selector = SELECTORS) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(selector));
    if (!els.length) return;

    // Split reveal-words into per-word spans for staggered animation
    els.forEach((el) => {
      if (el.classList.contains("reveal-words") && !el.dataset.split) {
        el.dataset.split = "1";
        const text = el.textContent ?? "";
        el.textContent = "";
        text.split(/(\s+)/).forEach((chunk, i) => {
          if (/^\s+$/.test(chunk)) {
            el.appendChild(document.createTextNode(chunk));
          } else if (chunk.length) {
            const span = document.createElement("span");
            span.className = "reveal-word";
            span.style.transitionDelay = `${i * 60}ms`;
            span.textContent = chunk;
            el.appendChild(span);
          }
        });
      }
    });

    if (typeof IntersectionObserver === "undefined") {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            // Optional: remove class to re-trigger animation on next scroll-in
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector]);
}
