// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    RESEND_API_KEY2: process.env.RESEND_API_KEY,
  },
};

export default nextConfig;
