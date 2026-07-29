"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => void | Promise<void>) => {
    finished: Promise<void>;
  };
};

const EASE_OUT = "cubic-bezier(0.16, 1, 0.3, 1)";
const EASE_SOFT = "cubic-bezier(0.22, 1, 0.36, 1)";

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
  const titleLines = Array.from(document.querySelectorAll(".heroTitleLine"));
  const portrait = document.querySelector(".hero-portrait");
  const name = document.querySelector(".hero-name");
  const role = document.querySelector(".hero-role");
  const location = document.querySelector(".hero-location");
  const meta = document.querySelector(".hero-meta");
  const orbit = document.querySelector(".hero-object--orbit");

  animateElement(
    nav,
    [
      { opacity: 0, clipPath: "inset(0 0 100% 0)", translate: "0 -18px" },
      { opacity: 1, clipPath: "inset(0 0 0% 0)", translate: "0 0" },
    ],
    { duration: 680, easing: EASE_OUT },
  );

  [name, role].forEach((element, index) => {
    animateElement(
      element,
      [
        { opacity: 0, translate: index === 0 ? "-24px 0" : "24px 0" },
        { opacity: 1, translate: "0 0" },
      ],
      { duration: 720, delay: 150 + index * 65, easing: EASE_OUT },
    );
  });

  animateElement(
    portrait,
    [
      { opacity: 0, clipPath: "inset(100% 0 0 0)", scale: 1.08 },
      { opacity: 1, clipPath: "inset(0% 0 0 0)", scale: 1 },
    ],
    { duration: 1120, delay: 190, easing: EASE_OUT },
  );

  titleLines.forEach((line, index) => {
    animateElement(
      line,
      [
        { opacity: 0, clipPath: "inset(0 0 100% 0)", transform: "translateY(70px)" },
        { opacity: 1, clipPath: "inset(0 0 0% 0)", transform: "translateY(0)" },
      ],
      { duration: 900, delay: 320 + index * 105, easing: EASE_OUT },
    );
  });

  animateElement(
    orbit,
    [
      { opacity: 0, scale: 0.72, rotate: "-16deg" },
      { opacity: 0.32, scale: 1, rotate: "0deg" },
    ],
    { duration: 950, delay: 600, easing: EASE_SOFT },
  );

  [meta, location].forEach((element, index) => {
    animateElement(
      element,
      [
        { opacity: 0, translate: "0 14px" },
        { opacity: 1, translate: "0 0" },
      ],
      { duration: 620, delay: 680 + index * 70, easing: EASE_OUT },
    );
  });
}

function setupScrollReveals() {
  const selector = [
    ".intro-copy",
    ".intro-side",
    ".section-heading",
    ".capability-list article",
    ".lead-work",
    ".feature-work",
    ".compact-work",
    ".milestone-list article",
    ".archive-group-heading",
    ".project-row",
    ".thought-list article",
    ".contact-section > *",
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
        const distance = element.classList.contains("project-row") ? 18 : 34;

        animateElement(
          element,
          [
            {
              opacity: 0,
              transform: `translateY(${distance}px)`,
              clipPath: "inset(0 0 10% 0)",
            },
            {
              opacity: 1,
              transform: "translateY(0)",
              clipPath: "inset(0 0 0% 0)",
            },
          ],
          {
            duration: element.classList.contains("project-row") ? 520 : 760,
            delay: Math.min(index, 4) * 65,
            easing: EASE_OUT,
          },
        );

        observer.unobserve(element);
      });
    },
    { rootMargin: "0px 0px -9% 0px", threshold: 0.12 },
  );

  targets.forEach((target) => observer.observe(target));
  return () => observer.disconnect();
}

function setupHeroParallax() {
  const hero = document.querySelector<HTMLElement>(".poster-hero");
  const title = document.querySelector<HTMLElement>(".heroTitle");
  const portrait = document.querySelector<HTMLElement>(".hero-portrait");
  const orbit = document.querySelector<HTMLElement>(".hero-object--orbit");

  if (!hero || !title || !portrait || window.innerWidth < 1024) return () => undefined;

  let frame = 0;
  let pointerX = 0;
  let pointerY = 0;

  const render = () => {
    frame = 0;
    const scrollProgress = Math.min(1, Math.max(0, window.scrollY / Math.max(hero.offsetHeight, 1)));

    title.style.setProperty("--motion-title-x", `${pointerX * -5}px`);
    title.style.setProperty("--motion-title-y", `${scrollProgress * 22 + pointerY * -3}px`);
    portrait.style.setProperty("--motion-portrait-x", `${pointerX * 9}px`);
    portrait.style.setProperty("--motion-portrait-y", `${scrollProgress * 44 + pointerY * 7}px`);
    orbit?.style.setProperty("--motion-orbit-x", `${pointerX * 13}px`);
    orbit?.style.setProperty("--motion-orbit-y", `${pointerY * 10}px`);
  };

  const requestRender = () => {
    if (!frame) frame = window.requestAnimationFrame(render);
  };

  const onPointerMove = (event: PointerEvent) => {
    const rect = hero.getBoundingClientRect();
    pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
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
