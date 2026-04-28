import Navbar from "@/components/Navbar";
import QuickActions from "@/components/QuickActions";
import TeamsTabs from "@/components/TeamsTabs";
import { codeKachalTeams, hackSparkTeams } from "@/data/teams";

export const metadata = {
    title: "Teams",
    description: "Registered teams for Code Kachal and HackSpark.",
};

export default function TeamsPage() {
    return (
        <>
            <div className="ambientBackdrop" aria-hidden="true">
                <span className="glow glowOne" />
                <span className="glow glowTwo" />
                <span className="glow glowThree" />
            </div>
            <Navbar />
            <div className="navSpacer" aria-hidden="true" />

            <main id="main-content">
                <section className="sectionBlock teamSection">
                    <div className="teamSectionHeader">
                        <div>
                            <p className="kicker">Technocracy 2026</p>
                            <h2>Competition Teams</h2>
                            <p className="sectionLead">
                                Browse verified teams for both Code Kachal and HackSpark in separate tabs.
                            </p>
                        </div>
                    </div>

                    <TeamsTabs codeKachalTeams={codeKachalTeams} hackSparkTeams={hackSparkTeams} />
                </section>
            </main>

            <QuickActions />
        </>
    );
}
