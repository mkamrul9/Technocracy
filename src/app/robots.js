export default function robots() {
    const baseUrl = "https://technocracy2026.vercel.app";

    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl,
    };
}
