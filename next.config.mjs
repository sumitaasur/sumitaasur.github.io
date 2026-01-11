/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "assets.aceternity.com",
      "images.unsplash.com",
      "api.microlink.io",
    ],
  },
  env: {
    NEXT_URL_SMTP_HOST: process.env.NEXT_URL_SMTP_HOST,
    NEXT_URL_SMTP_PORT: process.env.NEXT_URL_SMTP_PORT,
    NEXT_URL_SMTP_SECURE: process.env.NEXT_URL_SMTP_SECURE,
    NEXT_URL_SMTP_USER: process.env.NEXT_URL_SMTP_USER,
    NEXT_URL_SMTP_PASS: process.env.NEXT_URL_SMTP_PASS,
    NEXT_URL_RECEIVER_EMAIL: process.env.NEXT_URL_RECEIVER_EMAIL,
    NEXT_MONGODB_URI: process.env.NEXT_MONGODB_URI,
  },
  // output: "export",
};

export default nextConfig;
