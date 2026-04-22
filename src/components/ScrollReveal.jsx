"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
    useEffect(() => {
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const revealElements = document.querySelectorAll("[data-reveal]");

        if (reducedMotion) {
            revealElements.forEach((el) => el.classList.add("is-visible"));
            return undefined;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.16,
                rootMargin: "0px 0px -30px 0px",
            }
        );

        revealElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return null;
}
