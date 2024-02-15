/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/about',
            destination: '/',
          },
        ]
      }
      // async redirects() {
      //   return [
      //     {
      //       source: '/about',
      //       destination: '/',
      //       permanent: true,
      //     },
      //   ]
      // },
};

export default nextConfig;
