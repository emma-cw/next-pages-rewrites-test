/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async rewrites() {
    return {
      beforeFiles: [
        // These rewrites are checked after headers/redirects
        // and before all files including _next/public files which
        // allows overriding page files
        {
          source: '/user-query',
          has: [
            {
              type: 'query',
              key: 'name',
              value: '(?<name>.*)',
            },
          ],
          destination: '/user/:name',
        }
      ],
    };
  },
}

module.exports = nextConfig
