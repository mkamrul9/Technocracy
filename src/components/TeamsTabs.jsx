"use client";

import { useMemo, useState } from "react";

const TABS = [
    { id: "code", label: "Code Kachal Teams" },
    { id: "hack", label: "HackSpark Teams" },
];

function buildSections(teams) {
    const groups = new Map();
    teams.forEach((team) => {
        const size = team.members.length;
        const list = groups.get(size) || [];
        list.push(team);
        groups.set(size, list);
    });

    const sizes = Array.from(groups.keys()).sort((a, b) => a - b);
    return sizes.map((size) => ({
        size,
        title: size === 1 ? "Solo Teams" : `${size} Member Teams`,
        teams: groups.get(size),
    }));
}

function countMembers(teams) {
    return teams.reduce((total, team) => total + team.members.length, 0);
}

export default function TeamsTabs({ codeKachalTeams, hackSparkTeams }) {
    const [activeTab, setActiveTab] = useState("code");
    const activeTeams = activeTab === "code" ? codeKachalTeams : hackSparkTeams;
    const sections = useMemo(() => buildSections(activeTeams), [activeTeams]);

    return (
        <div className="teamsTabs">
            <div className="tabHeader">
                <div className="tabButtons" role="tablist" aria-label="Team categories">
                    {TABS.map((tab) => (
                        <button
                            key={tab.id}
                            type="button"
                            role="tab"
                            aria-selected={activeTab === tab.id}
                            className={`tabButton ${activeTab === tab.id ? "active" : ""}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                <div className="teamSummary" aria-live="polite">
                    <div className="teamSummaryCard">
                        <span>Total Teams</span>
                        <strong>{activeTeams.length}</strong>
                    </div>
                    <div className="teamSummaryCard">
                        <span>Total Members</span>
                        <strong>{countMembers(activeTeams)}</strong>
                    </div>
                </div>
            </div>

            <div className="teamsPanel">
                {sections.map((section) => (
                    <div key={section.size} className="teamGroup">
                        <div className="teamGroupHeader">
                            <div>
                                <h3>{section.title}</h3>
                                <p className="sectionLead">{section.teams.length} teams</p>
                            </div>
                        </div>

                        <div className="teamGrid">
                            {section.teams.map((team) => (
                                <article key={team.name} className="teamCard">
                                    <div className="teamCardHeader">
                                        <div>
                                            <p className="teamTag">{team.members.length} members</p>
                                            <h4 className="teamName">{team.name}</h4>
                                        </div>
                                    </div>

                                    <div className="teamMembers">
                                        {team.members.map((member) => (
                                            <div key={`${team.name}-${member.name}`} className="memberCard">
                                                <p className="memberName">{member.name}</p>
                                                <div className="memberMeta">
                                                    <span className="memberTag">{member.dept}</span>
                                                    <span className="memberTag">Series {member.series}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
