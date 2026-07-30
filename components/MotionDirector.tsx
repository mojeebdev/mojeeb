"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => void | Promise<void>) => {
    finished: Promise<void>;
  };
};

const EASE_OUT = "cubic-bezier(0.16, 1, 0.3, 1)";

function animateElement(
  element: Element | null,
  keyframes: Keyframe[],
  options: KeyframeAnimationOptions,
) {
  if (!(element instanceof HTMLElement)) return;

  const animation = element.animate(keyframes, {
    fill: "both",
    ...options,
  });

  animation.finished
    .catch(() => undefined)
    .then(() => animation.cancel());
}

function animateHero() {
  const nav = document.querySelector(".floating-nav");
  const strategyLine = document.querySelector(".identity-line--strategy");
  const engineeringLine = document.querySelector(".identity-line--engineering");
  const portrait = document.querySelector(".dual-portrait");
  const kickers = Array.from(document.querySelectorAll(".identity-kicker"));
  const summaries = Array.from(document.querySelectorAll(".identity-summary"));
  const meta = document.querySelector(".identity-meta");

  animateElement(
    nav,
    [
      { opacity: 0, clipPath: "inset(0 0 100% 0)", translate: "0 -18px" },
      { opacity: 1, clipPath: "inset(0 0 0% 0)", translate: "0 0" },
    ],
    { duration: 620, easing: EASE_OUT },
  );

  animateElement(
    strategyLine,
    [
      { opacity: 0, clipPath: "inset(0 100% 0 0)", transform: "translateX(-54px)" },
      { opacity: 1, clipPath: "inset(0 0% 0 0)", transform: "translateX(0)" },
    ],
    { duration: 920, delay: 140, easing: EASE_OUT },
  );

  animateElement(
    engineeringLine,
    [
      { opacity: 0, clipPath: "inset(0 0 0 100%)", transform: "translateX(54px)" },
      { opacity: 1, clipPath: "inset(0 0 0 0%)", transform: "translateX(0)" },
    ],
    { duration: 920, delay: 220, easing: EASE_OUT },
  );

  animateElement(
    portrait,
    [
      { opacity: 0, clipPath: "inset(100% 0 0 0 round 999px 999px 0 0)", scale: .94 },
      { opacity: 1, clipPath: "inset(0% 0 0 0 round 999px 999px 0 0)", scale: 1 },
    ],
    { duration: 1120, delay: 300, easing: EASE_OUT },
  );

  [...kickers, ...summaries, meta].forEach((element, index) => {
    animateElement(
      element,
      [
        { opacity: 0, translate: "0 18px" },
        { opacity: 1, translate: "0 0" },
      ],
      { duration: 620, delay: 520 + index * 55, easing: EASE_OUT },
    );
  });
}

function setupScrollReveals() {
  const selector = [
    ".identity-proof > *",
    ".dual-section-heading > *",
    ".dual-work-card",
    ".dual-project-row",
    ".capability-track",
    ".capability-track article",
    ".dual-proof > *",
    ".dual-milestones article",
    ".dual-principle-list article",
    ".dual-projects-cta > *",
    ".dual-contact > *",
    ".route-hero > *",
    ".route-band > *",
    ".route-card",
    ".project-detail-grid > *",
    ".site-footer > *",
  ].join(",");

  const targets = Array.from(document.querySelectorAll<HTMLElement>(selector));
  if (!targets.length) return () => undefined;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || !(entry.target instanceof HTMLElement)) return;

        const element = entry.target;
        const siblings = element.parentElement
          ? Array.from(element.parentElement.children).filter((child) => child.matches(selector))
          : [];
        const index = Math.max(0, siblings.indexOf(element));
        const compact = element.classList.contains("dual-project-row") || element.matches(".capability-track article");

        animateElement(
          element,
          [
            {
              opacity: 0,
              transform: `translateY(${compact ? 18 : 34}px)`,
              clipPath: "inset(0 0 10% 0)",
            },
            {
              opacity: 1,
              transform: "translateY(0)",
              clipPath: "inset(0 0 0% 0)",
            },
          ],
          {
            duration: compact ? 520 : 760,
            delay: Math.min(index, 4) * 55,
            easing: EASE_OUT,
          },
        );

        observer.unobserve(element);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
  );

  targets.forEach((target) => observer.observe(target));
  return () => observer.disconnect();
}

function setupHeroParallax() {
  const hero = document.querySelector<HTMLElement>(".dual-identity-hero");
  const portrait = document.querySelector<HTMLElement>(".dual-portrait");

  if (!hero || !portrait || window.innerWidth < 900) return () => undefined;

  let frame = 0;
  let pointerX = 0;
  let pointerY = 0;

  const render = () => {
    frame = 0;
    const scrollProgress = Math.min(1, Math.max(0, window.scrollY / Math.max(hero.offsetHeight, 1)));
    portrait.style.setProperty("--dual-portrait-x", `${pointerX * 8}px`);
    portrait.style.setProperty("--dual-portrait-y", `${scrollProgress * 34 + pointerY * 5}px`);
  };

  const requestRender = () => {
    if (!frame) frame = window.requestAnimationFrame(render);
  };

  const onPointerMove = (event: PointerEvent) => {
    const rect = hero.getBoundingClientRect();
    pointerX = ((event.clientX - rect.left) / rect.width - .5) * 2;
    pointerY = ((event.clientY - rect.top) / rect.height - .5) * 2;
    requestRender();
  };

  const onPointerLeave = () => {
    pointerX = 0;
    pointerY = 0;
    requestRender();
  };

  hero.addEventListener("pointermove", onPointerMove);
  hero.addEventListener("pointerleave", onPointerLeave);
  window.addEventListener("scroll", requestRender, { passive: true });
  render();

  return () => {
    hero.removeEventListener("pointermove", onPointerMove);
    hero.removeEventListener("pointerleave", onPointerLeave);
    window.removeEventListener("scroll", requestRender);
    if (frame) window.cancelAnimationFrame(frame);
  };
}

export default function MotionDirector() {
  const pathname = usePathname();
  const router = useRouter();

  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.documentElement.classList.toggle("motion-enhanced", !reducedMotion);

    if (reducedMotion) return;

    if (pathname === "/") animateHero();
    else {
      animateElement(
        document.querySelector(".route-page"),
        [
          { opacity: 0, translate: "0 18px" },
          { opacity: 1, translate: "0 0" },
        ],
        { duration: 520, easing: EASE_OUT },
      );
    }
  }, [pathname]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const removeReveals = setupScrollReveals();
    const removeParallax = pathname === "/" ? setupHeroParallax() : () => undefined;

    return () => {
      removeReveals();
      removeParallax();
    };
  }, [pathname]);

  useEffect(() => {
    const onDocumentClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) return;

      const target = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[href]") : null;
      if (!target || target.target === "_blank" || target.hasAttribute("download")) return;

      const href = target.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;

      const destination = new URL(target.href, window.location.href);
      if (destination.origin !== window.location.origin) return;
      if (`${destination.pathname}${destination.search}${destination.hash}` === `${window.location.pathname}${window.location.search}${window.location.hash}`) return;

      const viewTransitionDocument = document as ViewTransitionDocument;
      if (!viewTransitionDocument.startViewTransition || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      event.preventDefault();
      viewTransitionDocument.startViewTransition(() => {
        router.push(`${destination.pathname}${destination.search}${destination.hash}`);
      });
    };

    document.addEventListener("click", onDocumentClick, true);
    return () => document.removeEventListener("click", onDocumentClick, true);
  }, [router]);

  return null;
}
