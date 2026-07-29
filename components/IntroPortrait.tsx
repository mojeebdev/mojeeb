"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const EASE_OUT = "cubic-bezier(0.16, 1, 0.3, 1)";

export default function IntroPortrait() {
  const frameRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    const image = imageRef.current;
    if (!frame || !image) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;

        frame.animate(
          [
            { opacity: 0, clipPath: "inset(100% 0 0 0 round 26px)", transform: "translateY(52px)" },
            { opacity: 1, clipPath: "inset(0% 0 0 0 round 26px)", transform: "translateY(0)" },
          ],
          { duration: 980, easing: EASE_OUT, fill: "both" },
        );

        image.animate(
          [
            { transform: "scale(1.1) translateY(18px)" },
            { transform: "scale(1) translateY(0)" },
          ],
          { duration: 1250, easing: EASE_OUT, fill: "both" },
        );

        observer.disconnect();
      },
      { threshold: 0.22, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const frame = frameRef.current;
    const image = imageRef.current;
    if (!frame || !image || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frameId = 0;

    const render = () => {
      frameId = 0;
      const rect = frame.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const progress = Math.min(1, Math.max(0, (viewportHeight - rect.top) / (viewportHeight + rect.height)));
      image.style.setProperty("--intro-image-shift", `${(progress - 0.5) * 28}px`);
    };

    const requestRender = () => {
      if (!frameId) frameId = window.requestAnimationFrame(render);
    };

    window.addEventListener("scroll", requestRender, { passive: true });
    window.addEventListener("resize", requestRender);
    render();

    return () => {
      window.removeEventListener("scroll", requestRender);
      window.removeEventListener("resize", requestRender);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div ref={frameRef} className="intro-portrait">
      <Image
        ref={imageRef}
        className="intro-portrait__image"
        src="/mojeeb_headshot.png"
        alt="Mojeeb Titilayo"
        fill
        sizes="(max-width: 760px) calc(100vw - 2.5rem), (max-width: 1100px) 44vw, 31vw"
      />
    </div>
  );
}
