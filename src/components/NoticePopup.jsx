"use client";

import { useState } from "react";

export default function NoticePopup({ registrationHref }) {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="noticeOverlay" role="dialog" aria-modal="true" aria-labelledby="notice-title">
      <div className="noticeCard">
        <p className="noticeBadge">Important Notice</p>
        <h3 id="notice-title">All-Girls Team Update</h3>
        <p>
          All girls member teams can have a maximum of 4 members for Technocracy events.
        </p>
        <div className="noticeActions">
          <a className="btnPrimary" href={registrationHref}>
            Registration
          </a>
          <button type="button" className="noticeClose" onClick={() => setIsOpen(false)}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
