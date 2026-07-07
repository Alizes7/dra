/** @type {import('next').NextConfig} */

// ─── Security Headers ────────────────────────────────────────────────────────
// Applied at request-time by the hosting platform (Vercel / Netlify / Nginx).
// For static export, these go in the platform's config (vercel.json / _headers).
// We keep them here for reference AND output a _headers file for Netlify/Vercel.
const securityHeaders = [
  // Prevent clickjacking
  { key: "X-Frame-Options",        value: "SAMEORIGIN" },
  // Stop MIME-type sniffing
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Referrer: send origin only on same-site
  { key: "Referrer-Policy",        value: "strict-origin-when-cross-origin" },
  // Permissions API — disable camera/mic/geolocation by default
  { key: "Permissions-Policy",     value: "camera=(), microphone=(), geolocation=()" },
  // Force HTTPS (1 year, include subdomains)
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
  // Content-Security-Policy
  // Allows: self + Google Fonts + WhatsApp (wa.me) + Google Maps embed
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",           // Next.js requires unsafe-inline for static export
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https://images.unsplash.com https://*.google.com https://*.googleapis.com https://*.gstatic.com",
      "frame-src https://www.google.com",
      "connect-src 'self'",
      "form-action 'self' https://formspree.io",
      "upgrade-insecure-requests",
      "block-all-mixed-content",
    ].join("; "),
  },
];

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,

  // Headers only apply when using `next start` (server mode), not static export.
  // Kept here for documentation + server deployments.
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
