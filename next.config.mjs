/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

   devIndicators: {
    buildActivity: false,   // 🔥 N icon hide (try karega)
  },
}

export default nextConfig
