export default function Home() {
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
        </nav>
      </header>

      <main>
        <section id="home" className="hero sectionBlock">
          <p className="kicker">ECE Presents</p>
          <h1>Technocracy 2026</h1>
          <p className="heroSub">
            One stage. Two signature events. Competitive programming and hackathon for innovators across departments.
          </p>
          <div className="heroCtaRow">
            <a className="btnPrimary" href="#events">
              Explore Events
            </a>
            <a className="btnGhost" href="#rulebooks">
              View Rulebooks
            </a>
          </div>
        </section>

        <section id="events" className="sectionBlock">
          <h2>Competition Section</h2>
          <p className="sectionLead">Phase 1 structure is ready. Detailed visual cards and motion will be added in Phase 2.</p>
          <div className="cardGrid">
            <article className="infoCard">
              <h3>Code Kachal (Programming Contest)</h3>
              <p>Date: 30 April, 2026 (Thursday)</p>
              <p>Eligibility: All departments, series 21-24</p>
              <a href="https://forms.gle/xhghADXrngrKxhUCA" target="_blank" rel="noopener noreferrer">
                Registration Link
              </a>
            </article>

            <article className="infoCard">
              <h3>HackSpark (Hackathon)</h3>
              <p>Date: 1 May, 2026 (Friday)</p>
              <p>Eligibility: All departments, series 20-24</p>
              <a href="https://forms.gle/LMXuQvZLcMRRWJHA6" target="_blank" rel="noopener noreferrer">
                Registration Link
              </a>
            </article>
          </div>
        </section>

        <section id="schedule" className="sectionBlock">
          <h2>Time & Registration</h2>
          <div className="cardGrid">
            <article className="infoCard">
              <h3>Key Deadline</h3>
              <p>Last date of registration: 24 April, 2026</p>
              <p>Team size: up to 3 members</p>
              <p>Fee: 900 BDT per team</p>
            </article>
            <article className="infoCard">
              <h3>Event Flow</h3>
              <p>30 April: Code Kachal contest day</p>
              <p>1 May: HackSpark hackathon day</p>
              <p>Detailed timeline will be added in Phase 3.</p>
            </article>
          </div>
        </section>

        <section id="rulebooks" className="sectionBlock">
          <h2>Rulebooks</h2>
          <div className="cardGrid">
            <article className="infoCard">
              <h3>Code Kachal Rulebook</h3>
              <a
                href="https://drive.google.com/file/d/193Eb3jryGxNZusZviioP112IHe-4H-fX/view?fbclid=IwY2xjawRVl9FleHRuA2FlbQIxMABicmlkETFvVDI4YUVsNjZIMVdlSHNxc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHrn6muQKq1Yf_qQxfUaCi5y_iRbhkFOoRoJ_hOn9vZn_lmJ5lMiccxfFhzOA_aem_HXRM-lsEXqs5kGnLKMOAAg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Rulebook
              </a>
            </article>
            <article className="infoCard">
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

        <section id="kits" className="sectionBlock">
          <h2>Prize & Participant Kits</h2>
          <div className="cardGrid">
            <article className="infoCard">
              <h3>For Each Participant</h3>
              <ul>
                <li>Participation certificate</li>
                <li>Official event t-shirt and additional kits</li>
                <li>Snacks and lunch</li>
                <li>10% discount coupon from Callisto</li>
              </ul>
            </article>
            <article className="infoCard">
              <h3>For Winning Teams</h3>
              <p>Crests and trophies for champion teams.</p>
            </article>
          </div>
        </section>

        <section id="venue" className="sectionBlock">
          <h2>Place & Contact</h2>
          <article className="infoCard singleCard">
            <p>Venue details and organizer contact blocks will be integrated in Phase 3.</p>
            <p>Current build is the approved structural foundation for your one-page site.</p>
          </article>
        </section>
      </main>
    </>
  );
}
