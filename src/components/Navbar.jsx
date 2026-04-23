"use client";

import { useState } from "react";

const navItems = [
    { href: "#events", label: "Events" },
    { href: "#schedule", label: "Schedule" },
    { href: "#rulebooks", label: "Rulebooks" },
    { href: "#kits", label: "Prize & Kits" },
    { href: "#venue", label: "Venue" },
    { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="topNav">
            <div className="topNavInner">
                <a href="#home" className="brand" onClick={() => setIsOpen(false)}>
                    Technocracy 2026
                </a>

                <button
                    type="button"
                    className={`menuToggle ${isOpen ? "active" : ""}`}
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation menu"
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    <span />
                    <span />
                    <span />
                </button>

                <nav className={`navLinks ${isOpen ? "open" : ""}`} aria-label="Main navigation">
                    {navItems.map((item) => (
                        <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                            {item.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}
