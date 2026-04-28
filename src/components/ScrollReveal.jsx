"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
    useEffect(() => {
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const revealElements = document.querySelectorAll("[data-reveal]");

        const markVisible = (elements) => {
            elements.forEach((el) => el.classList.add("is-visible"));
        };

        const observeElements = (elements, observer) => {
            elements.forEach((el) => {
                if (el.dataset.revealObserved === "true") {
                    return;
                }

                observer.observe(el);
                el.dataset.revealObserved = "true";
            });
        };

        if (reducedMotion) {
            markVisible(revealElements);
            const reducedObserver = new MutationObserver((mutations) => {
                const added = [];
                mutations.forEach((mutation) => {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType !== Node.ELEMENT_NODE) {
                            return;
                        }

                        if (node.matches?.("[data-reveal]")) {
                            added.push(node);
                        }

                        node.querySelectorAll?.("[data-reveal]").forEach((el) => added.push(el));
                    });
                });

                if (added.length) {
                    markVisible(added);
                }
            });

            reducedObserver.observe(document.body, { childList: true, subtree: true });
            return () => reducedObserver.disconnect();
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

        observeElements(revealElements, observer);

        const mutationObserver = new MutationObserver((mutations) => {
            const added = [];
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType !== Node.ELEMENT_NODE) {
                        return;
                    }

                    if (node.matches?.("[data-reveal]")) {
                        added.push(node);
                    }

                    node.querySelectorAll?.("[data-reveal]").forEach((el) => added.push(el));
                });
            });

            if (added.length) {
                observeElements(added, observer);
            }
        });

        mutationObserver.observe(document.body, { childList: true, subtree: true });

        return () => {
            observer.disconnect();
            mutationObserver.disconnect();
        };
    }, []);

    return null;
}
