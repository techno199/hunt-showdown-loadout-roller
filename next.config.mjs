/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  redirects: async () => {
    return [
      {
        source: '/menu',
        destination: '/menu/loadout-creator',
        permanent: true
      }
    ]
  }
};

export default nextConfig;
