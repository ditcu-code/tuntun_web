/** @type {import('next').NextConfig} */

const nextConfig = {
  // Uncomment the line below to enable basePath, pages and
  // redirects will then have a path prefix (`/app` in this case)
  //
  // basePath: '/app',
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/testflight",
        destination: "https://testflight.apple.com/join/Nvyiuu27",
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
