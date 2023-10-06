/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.abcnewsfe.com",
      },
      {
        protocol: "https",
        hostname: "s.abcnews.com",
      },
      {
        protocol: "https",
        hostname: "media.zenfs.com",
      },
      {
        protocol: "https",
        hostname: "cdn1.parksmedia.wdprapps.disney.com",
      },
      {
        protocol: "https",
        hostname: "techcrunch.com",
      },
      {
        protocol: "https",
        hostname: "s.yimg.com",
      },
      {
        protocol: "https",
        hostname: "s.yimg.com",
      },
    ],
  },
};

module.exports = nextConfig;
