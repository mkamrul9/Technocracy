"use client";

import { useState } from "react";

export default function QuickActions() {
    const [openContact, setOpenContact] = useState(false);

    return (
        <>
            <div className="floatingActions" aria-label="Quick actions">
                <a className="floatingBtn topBtn" href="#home" aria-label="Back to top">
                    Top
                </a>
                <button
                    type="button"
                    className="floatingBtn msgBtn"
                    onClick={() => setOpenContact(true)}
                    aria-label="Open contact popup"
                >
                    Contact
                </button>
            </div>

            {openContact ? (
                <div className="contactOverlay" role="dialog" aria-modal="true" aria-labelledby="contact-title">
                    <div className="contactCard">
                        <p className="noticeBadge">Contact</p>
                        <h3 id="contact-title">Message Technocracy</h3>
                        <p>Use Messenger to contact the Technocracy team directly.</p>

                        <div className="contactActions">
                            <a
                                className="messengerBtn"
                                href="https://m.me/technocracyece"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="messengerIcon" aria-hidden="true">
                                    ✉
                                </span>
                                Messenger
                            </a>
                            <button type="button" className="noticeClose" onClick={() => setOpenContact(false)}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
}
