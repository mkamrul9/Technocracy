export default function manifest() {
    return {
        name: "Technocracy 2026",
        short_name: "Technocracy",
        description: "Official event website for Technocracy 2026 featuring Code Kachal and HackSpark.",
        start_url: "/",
        display: "standalone",
        background_color: "#003f43",
        theme_color: "#18e4ea",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    };
}
