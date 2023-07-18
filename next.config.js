/** @type {import('next').NextConfig} */

const corsHeaders = [
    {
        key: "Access-Control-Allow-Origin",
        value: "*", // Allow requests from any origin
    },
    {
        key: "Access-Control-Allow-Methods",
        value: "GET,POST,PUT,DELETE,OPTIONS",
    },
    {
        key: "Access-Control-Allow-Headers",
        value: "Content-Type, Authorization, x-itersv-origin",
    },
    {
        key: "Access-Control-Allow-Credentials",
        value: "true",
    },
];

async function headers() {
    return [
        {
            source: "/(.*)",
            headers: [
                ...corsHeaders,
                {
                    key: "X-Content-Type-Options",
                    value: "nosniff",
                },
                {
                    key: "X-Frame-Options",
                    value: "DENY",
                },
                {
                    key: "X-XSS-Protection",
                    value: "1; mode=block",
                },
                {
                    key: "Referrer-Policy",
                    value: "strict-origin-when-cross-origin",
                },
                {
                    key: "Permissions-Policy",
                    value: "geolocation=(), microphone=(), camera=()",
                },
                {
                    key: "Content-Security-Policy",
                    value: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'; manifest-src 'self'",
                }
            ],
        },
    ];
}

const nextConfig = {
    async headers() {
        return headers();
    },
    images: {
        domains: ['itersv.com'],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });
        return config;
    },
}

module.exports = nextConfig
