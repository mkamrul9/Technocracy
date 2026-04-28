"use client";

import { useEffect, useState } from "react";

function getTimeParts(targetMs) {
    const now = Date.now();
    const diff = Math.max(0, targetMs - now);

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
        days,
        hours,
        minutes,
        seconds,
        isOver: diff === 0,
    };
}

function pad(value) {
    return String(value).padStart(2, "0");
}

export default function CountdownTimer({ targetIso }) {
    const targetMs = new Date(targetIso).getTime();
    const [timeLeft, setTimeLeft] = useState(() => getTimeParts(targetMs));

    useEffect(() => {
        const tick = () => setTimeLeft(getTimeParts(targetMs));
        tick();
        const intervalId = setInterval(tick, 1000);
        return () => clearInterval(intervalId);
    }, [targetMs]);

    if (timeLeft.isOver) {
        return (
            <div className="countdownOver">
                <p className="countLabel">Event Started</p>
                <p className="countMeta">See you at HackSpark!</p>
            </div>
        );
    }

    return (
        <div className="countdownGrid" aria-label="Countdown to event start">
            <div className="countdownUnit">
                <span className="countdownValue">{timeLeft.days}</span>
                <span className="countdownLabel">Days</span>
            </div>
            <div className="countdownUnit">
                <span className="countdownValue">{pad(timeLeft.hours)}</span>
                <span className="countdownLabel">Hours</span>
            </div>
            <div className="countdownUnit">
                <span className="countdownValue">{pad(timeLeft.minutes)}</span>
                <span className="countdownLabel">Minutes</span>
            </div>
            <div className="countdownUnit">
                <span className="countdownValue">{pad(timeLeft.seconds)}</span>
                <span className="countdownLabel">Seconds</span>
            </div>
        </div>
    );
}
