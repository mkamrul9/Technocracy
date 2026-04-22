import NoticePopup from "@/components/NoticePopup";
import QuickActions from "@/components/QuickActions";

const REGISTRATION_DEADLINE = "2026-04-24T23:59:59+06:00";
const CODE_REGISTRATION_LINK = "https://forms.gle/xhghADXrngrKxhUCA";
const HACK_REGISTRATION_LINK = "https://forms.gle/LMXuQvZLcMRRWJHA6";
const CODE_RULEBOOK_LINK = "https://drive.google.com/file/d/193Eb3jryGxNZusZviioP112IHe-4H-fX/view";
const HACK_RULEBOOK_LINK = "https://drive.google.com/file/d/1jb5QxWS96kKgWUMVrtelXgTg8U7MsiEc/view";
const SITE_URL = "https://technocracy2026.vercel.app";

function getDaysLeft(deadlineIso) {
  const now = new Date();
  const deadline = new Date(deadlineIso);
  const diff = deadline.getTime() - now.getTime();

  if (diff <= 0) {
    return 0;
  }

  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export default function Home() {
  const daysLeft = getDaysLeft(REGISTRATION_DEADLINE);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Event",
        name: "Code Kachal",
        startDate: "2026-04-30T09:00:00+06:00",
        endDate: "2026-04-30T18:00:00+06:00",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        url: CODE_REGISTRATION_LINK,
        location: {
          "@type": "Place",
          name: "CSE Building, RUET",
          address: "CSE Building, Rajshahi University of Engineering & Technology, Rajshahi, Bangladesh",
        },
        organizer: {
          "@type": "Organization",
          name: "ECE, RUET",
          url: SITE_URL,
        },
      },
      {
        "@type": "Event",
        name: "HackSpark",
        startDate: "2026-05-01T09:00:00+06:00",
        endDate: "2026-05-01T21:00:00+06:00",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        url: HACK_REGISTRATION_LINK,
        location: {
          "@type": "Place",
          name: "CSE Building, RUET",
          address: "CSE Building, Rajshahi University of Engineering & Technology, Rajshahi, Bangladesh",
        },
        organizer: {
          "@type": "Organization",
          name: "ECE, RUET",
          url: SITE_URL,
        },
      },
    ],
  };

  return (
    <>
      <NoticePopup registrationHref="#events" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="ambientBackdrop" aria-hidden="true">
        <span className="glow glowOne" />
        <span className="glow glowTwo" />
        <span className="glow glowThree" />
      </div>
      <header className="topNav">
        <a href="#home" className="brand">
          Technocracy 2026
        </a>
        <nav className="navLinks" aria-label="Main navigation">
          <a href="#events">Events</a>
          <a href="#schedule">Schedule</a>
          <a href="#rulebooks">Rulebooks</a>
          <a href="#kits">Prize & Kits</a>
          <a href="#venue">Venue</a>
          <a href="#faq">FAQ</a>
        </nav>
      </header>
      <div className="navSpacer" aria-hidden="true" />
      <section className="newsTickerWrap" aria-label="Latest Technocracy news">
        <div className="newsTickerTrack">
          <span className="newsItem">
            IMPORTANT: Only <strong>3 days left</strong> for registration.
          </span>
          <span className="newsItem">
            UPDATE: All-girls member teams can have <strong>up to 4 members</strong>.
          </span>
          <span className="newsItem">
            DATE: <strong>30 April</strong> - Code Kachal Programming Contest.
          </span>
          <span className="newsItem">
            DATE: <strong>1 May</strong> - HackSpark Hackathon Day.
          </span>

          <span className="newsItem">
            IMPORTANT: Only <strong>3 days left</strong> for registration.
          </span>
          <span className="newsItem">
            UPDATE: All-girls member teams can have <strong>up to 4 members</strong>.
          </span>
          <span className="newsItem">
            DATE: <strong>30 April</strong> - Code Kachal Programming Contest.
          </span>
          <span className="newsItem">
            DATE: <strong>1 May</strong> - HackSpark Hackathon Day.
          </span>
        </div>
      </section>

      <main id="main-content">
        <section id="home" className="hero sectionBlock" data-reveal>
          <div className="binaryRain" aria-hidden="true">
            010101 001101 111000 100101 001011 010110 110010 000111 101001 011100
          </div>
          <div className="heroGrid">
            <div className="heroCopy" data-reveal>
              <p className="kicker">ECE Presents</p>
              <h1>
                TECHNOC<span>RACY</span> 2026
              </h1>
              <p className="heroSub">
                The flagship intra-university tech festival featuring Code Kachal and HackSpark. Built for problem solvers,
                makers, and future builders.
              </p>

              <div className="heroStats" aria-label="Key registration details">
                <span>Registration Deadline: 24 April</span>
                <span>Max Team Size: 3 Members</span>
                <span>Fee: 900 BDT / Team</span>
              </div>

              <div className="heroCtaRow">
                <a className="btnPrimary" href="#events">
                  Explore Events
                </a>
                <a className="btnGhost" href="#rulebooks">
                  View Rulebooks
                </a>
              </div>
            </div>

            <aside className="countdownCard" aria-label="Registration countdown" data-reveal>
              <p className="countLabel">Only</p>
              <p className="countNumber">{daysLeft}</p>
              <p className="countLabel">Days Left</p>
              <p className="countMeta">for registration close</p>
            </aside>
          </div>
        </section>

        <section id="events" className="sectionBlock" data-reveal>
          <h2>Competition Tracks</h2>
          <p className="sectionLead">Two events, one platform. Join a focused coding contest or ship solutions in a full hackathon sprint.</p>

          <div className="eventGrid">
            <article className="eventCard codeCard" data-reveal>
              <div className="eventHeader">
                <p className="eventTag">Programming Contest</p>
                <p className="eventDate">Date: <span className="importantDate">30 April, 2026</span> | Thursday</p>
              </div>
              <h3>Code Kachal</h3>
              <ul>
                <li>Open for all departments, series 21-24</li>
                <li>Team size: up to 3 members</li>
                <li>Fast-paced algorithmic challenge format</li>
              </ul>
              <div className="eventActions">
                <a className="btnMini" href={CODE_REGISTRATION_LINK} target="_blank" rel="noopener noreferrer">
                  Register
                </a>
                <a
                  className="btnMiniGhost"
                  href={CODE_RULEBOOK_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rulebook
                </a>
              </div>
            </article>

            <article className="eventCard hackCard" data-reveal>
              <div className="eventHeader">
                <p className="eventTag">Hackathon</p>
                <p className="eventDate">Date: <span className="importantDate">1 May, 2026</span> | Friday</p>
              </div>
              <h3>HackSpark</h3>
              <ul>
                <li>Open for all departments, series 20-24</li>
                <li>Team size: up to 3 members</li>
                <li>Prototype and pitch problem-solving ideas</li>
              </ul>
              <div className="eventActions">
                <a className="btnMini" href={HACK_REGISTRATION_LINK} target="_blank" rel="noopener noreferrer">
                  Register
                </a>
                <a
                  className="btnMiniGhost"
                  href={HACK_RULEBOOK_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rulebook
                </a>
              </div>
            </article>
          </div>

          <div className="benefitStrip" aria-label="Participant inclusions" data-reveal>
            <span>T-shirt</span>
            <span>Certificate</span>
            <span>Snacks & Lunch</span>
            <span>10% Callisto Coupon</span>
            <span>Crest & Trophy for Winners</span>
          </div>
        </section>

        <section id="schedule" className="sectionBlock" data-reveal>
          <h2>Time & Registration</h2>
          <p className="sectionLead">Important milestones to keep your team registration and preparation on track.</p>
          <p className="importantLine">Registration closes on <span className="importantDate">24 April, 2026</span></p>

          <div className="timelineGrid">
            <article className="timelineCard" data-reveal>
              <p className="timelineDate"><span className="importantDate">24 April, 2026</span></p>
              <h3>Registration Deadline</h3>
              <p>Final date to submit team registration for both events.</p>
            </article>

            <article className="timelineCard" data-reveal>
              <p className="timelineDate"><span className="importantDate">30 April, 2026</span> | Thursday</p>
              <h3>Code Kachal Contest Day</h3>
              <p>Intra RUET programming contest for series 21-24 from all departments.</p>
            </article>

            <article className="timelineCard" data-reveal>
              <p className="timelineDate"><span className="importantDate">1 May, 2026</span> | Friday</p>
              <h3>HackSpark Main Day</h3>
              <p>Hackathon project sprint, evaluation, and winner selection.</p>
            </article>

            <article className="timelineCard" data-reveal>
              <p className="timelineDate">Team Policy</p>
              <h3>Team Size & Fee</h3>
              <p>Up to 3 members per team. Registration fee is 900 BDT per team.</p>
            </article>
          </div>
        </section>

        <section id="rulebooks" className="sectionBlock" data-reveal>
          <h2>Rulebooks</h2>
          <div className="cardGrid">
            <article className="infoCard" data-reveal>
              <h3>Code Kachal Rulebook</h3>
              <a
                href={CODE_RULEBOOK_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Rulebook
              </a>
            </article>
            <article className="infoCard" data-reveal>
              <h3>HackSpark Rulebook</h3>
              <a
                href={HACK_RULEBOOK_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Rulebook
              </a>
            </article>
          </div>
        </section>

        <section id="kits" className="sectionBlock" data-reveal>
          <h2>Prize & Participant Kits</h2>
          <div className="cardGrid kitGrid">
            <article className="infoCard participantCard" data-reveal>
              <h3>For Each Participant</h3>
              <p className="kitLead">Every registered member receives a complete participant package.</p>
              <div className="kitPillWrap">
                <span className="kitPill">Participation Certificate</span>
                <span className="kitPill">Official Event T-shirt</span>
                <span className="kitPill">Snacks & Lunch</span>
                <span className="kitPill">10% Callisto Coupon</span>
              </div>
            </article>

            <article className="infoCard winnerCard" data-reveal>
              <h3>For Winning Teams</h3>
              <p className="kitLead">Top teams receive official recognition and premium rewards.</p>
              <div className="winnerRow">
                <span className="winnerTag">Crest</span>
                <span className="winnerTag">Trophy</span>
                <span className="winnerTag">Champion Honor</span>
              </div>
            </article>
          </div>
        </section>

        <section id="venue" className="sectionBlock" data-reveal>
          <h2>Place & Contact</h2>

          <div className="venueGrid">
            <article className="infoCard singleCard" data-reveal>
              <h3>Venue</h3>
              <p><span className="importantDate">CSE Building, RUET</span>, Rajshahi.</p>
              <p>Specific room-wise seating and reporting points will be announced before event day.</p>
              <a href="https://maps.google.com/?q=CSE%20Building%20RUET" target="_blank" rel="noopener noreferrer">
                Open CSE Building on Map
              </a>
            </article>

            <article className="infoCard singleCard" data-reveal>
              <h3>Organizer Desk</h3>
              <p>For registration support and event communication, contact the ECE Technocracy organizing panel.</p>
              <p>Official contact numbers and helpdesk links will be published soon.</p>
              <a href="#home">Back To Top</a>
            </article>
          </div>
        </section>

        <section id="faq" className="sectionBlock" data-reveal>
          <h2>FAQ</h2>
          <div className="faqGrid">
            <article className="faqCard" data-reveal>
              <h3>Can I join both events?</h3>
              <p>Yes. You can register for Code Kachal, HackSpark, or both if your team meets eligibility requirements.</p>
            </article>

            <article className="faqCard" data-reveal>
              <h3>Who can participate?</h3>
              <p>Code Kachal is for all departments, series 21-24. HackSpark is for all departments, series 20-24.</p>
            </article>

            <article className="faqCard" data-reveal>
              <h3>How many members are allowed?</h3>
              <p>Each team can have up to 3 members.</p>
            </article>

            <article className="faqCard" data-reveal>
              <h3>What does each participant get?</h3>
              <p>Participation certificate, official event t-shirt, snacks and lunch, and a 10% Callisto discount coupon.</p>
            </article>
          </div>
        </section>
      </main>

      <footer className="siteFooter" data-reveal>
        <div className="footerInner">
          <div className="footerBrandBlock">
            <p className="footerEyebrow">ECE, RUET</p>
            <h3>Technocracy 2026</h3>
            <p>Code Kachal and HackSpark for innovators, builders, and problem-solvers.</p>
          </div>

          <div className="footerLinksBlock">
            <p className="footerTitle">Quick Links</p>
            <a href={CODE_REGISTRATION_LINK} target="_blank" rel="noopener noreferrer">
              Code Kachal Registration
            </a>
            <a href={HACK_REGISTRATION_LINK} target="_blank" rel="noopener noreferrer">
              HackSpark Registration
            </a>
            <a href={CODE_RULEBOOK_LINK} target="_blank" rel="noopener noreferrer">
              Code Kachal Rulebook
            </a>
            <a href={HACK_RULEBOOK_LINK} target="_blank" rel="noopener noreferrer">
              HackSpark Rulebook
            </a>
          </div>

          <div className="footerInfoBlock">
            <p className="footerTitle">Event Info</p>
            <p>Venue: CSE Building, RUET</p>
            <p>Registration Deadline: <span className="importantDate">24 April, 2026</span></p>
            <p>Team Size: Up to 3 Members</p>
            <p>Fee: 900 BDT / Team</p>
          </div>
        </div>

        <div className="footerBottom">
          <p>© 2026 Technocracy. All rights reserved.</p>
          <a href="#home">Back to top</a>
        </div>
      </footer>

      <QuickActions />
    </>
  );
}
