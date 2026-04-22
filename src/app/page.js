const REGISTRATION_DEADLINE = "2026-04-24T23:59:59+06:00";

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

  return (
    <>
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
                <p className="eventDate">30 April, 2026 | Thursday</p>
              </div>
              <h3>Code Kachal</h3>
              <ul>
                <li>Open for all departments, series 21-24</li>
                <li>Team size: up to 3 members</li>
                <li>Fast-paced algorithmic challenge format</li>
              </ul>
              <div className="eventActions">
                <a className="btnMini" href="https://forms.gle/xhghADXrngrKxhUCA" target="_blank" rel="noopener noreferrer">
                  Register
                </a>
                <a
                  className="btnMiniGhost"
                  href="https://drive.google.com/file/d/193Eb3jryGxNZusZviioP112IHe-4H-fX/view?fbclid=IwY2xjawRVl9FleHRuA2FlbQIxMABicmlkETFvVDI4YUVsNjZIMVdlSHNxc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHrn6muQKq1Yf_qQxfUaCi5y_iRbhkFOoRoJ_hOn9vZn_lmJ5lMiccxfFhzOA_aem_HXRM-lsEXqs5kGnLKMOAAg"
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
                <p className="eventDate">1 May, 2026 | Friday</p>
              </div>
              <h3>HackSpark</h3>
              <ul>
                <li>Open for all departments, series 20-24</li>
                <li>Team size: up to 3 members</li>
                <li>Prototype and pitch problem-solving ideas</li>
              </ul>
              <div className="eventActions">
                <a className="btnMini" href="https://forms.gle/LMXuQvZLcMRRWJHA6" target="_blank" rel="noopener noreferrer">
                  Register
                </a>
                <a
                  className="btnMiniGhost"
                  href="https://drive.google.com/file/d/1jb5QxWS96kKgWUMVrtelXgTg8U7MsiEc/view?fbclid=IwY2xjawRVmAlleHRuA2FlbQIxMABicmlkETE3RGVyS3lRMXVSbDdKejR4c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHiefmkeLDWV2pUti3o1WB1n1zF3Yn7Ibl_pvBF22HGugT_oRpry-KtgjOunE_aem_Jl7fAuTB_QDuOIqsos-w_g"
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

          <div className="timelineGrid">
            <article className="timelineCard" data-reveal>
              <p className="timelineDate">24 April, 2026</p>
              <h3>Registration Deadline</h3>
              <p>Final date to submit team registration for both events.</p>
            </article>

            <article className="timelineCard" data-reveal>
              <p className="timelineDate">30 April, 2026 | Thursday</p>
              <h3>Code Kachal Contest Day</h3>
              <p>Intra RUET programming contest for series 21-24 from all departments.</p>
            </article>

            <article className="timelineCard" data-reveal>
              <p className="timelineDate">1 May, 2026 | Friday</p>
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
                href="https://drive.google.com/file/d/193Eb3jryGxNZusZviioP112IHe-4H-fX/view?fbclid=IwY2xjawRVl9FleHRuA2FlbQIxMABicmlkETFvVDI4YUVsNjZIMVdlSHNxc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHrn6muQKq1Yf_qQxfUaCi5y_iRbhkFOoRoJ_hOn9vZn_lmJ5lMiccxfFhzOA_aem_HXRM-lsEXqs5kGnLKMOAAg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Rulebook
              </a>
            </article>
            <article className="infoCard" data-reveal>
              <h3>HackSpark Rulebook</h3>
              <a
                href="https://drive.google.com/file/d/1jb5QxWS96kKgWUMVrtelXgTg8U7MsiEc/view?fbclid=IwY2xjawRVmAlleHRuA2FlbQIxMABicmlkETE3RGVyS3lRMXVSbDdKejR4c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHiefmkeLDWV2pUti3o1WB1n1zF3Yn7Ibl_pvBF22HGugT_oRpry-KtgjOunE_aem_Jl7fAuTB_QDuOIqsos-w_g"
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
          <div className="cardGrid">
            <article className="infoCard" data-reveal>
              <h3>For Each Participant</h3>
              <ul>
                <li>Participation certificate</li>
                <li>Official event t-shirt and additional kits</li>
                <li>Snacks and lunch</li>
                <li>10% discount coupon from Callisto</li>
              </ul>
            </article>
            <article className="infoCard" data-reveal>
              <h3>For Winning Teams</h3>
              <p>Crests and trophies for champion teams.</p>
            </article>
          </div>
        </section>

        <section id="venue" className="sectionBlock" data-reveal>
          <h2>Place & Contact</h2>

          <div className="venueGrid">
            <article className="infoCard singleCard" data-reveal>
              <h3>Venue</h3>
              <p>Rajshahi University of Engineering & Technology (RUET), Rajshahi.</p>
              <p>Specific room-wise seating and reporting points will be announced by organizers before event day.</p>
              <a href="https://maps.google.com/?q=RUET%20Rajshahi" target="_blank" rel="noopener noreferrer">
                Open RUET on Map
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
    </>
  );
}
