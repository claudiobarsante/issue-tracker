/** @type {import('next').NextConfig} */
const nextConfig = {
  // - to avoid forbidden error when accessing the avatar of the user from the Google account
  async headers() {
    return [
      {
        source: "/:path*", // -- * all enpoints of the application
        headers: [{ key: "referrer-policy", value: "no-referrer" }],
      },
    ];
  },
  //--
};

module.exports = nextConfig;
