/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, {dev}) {
    // OneDrive can move/delete Webpack's temporary pack files mid-rename.
    // Memory cache keeps development HMR stable in synced folders.
    if (dev) config.cache = false;
    return config;
  },
};

export default nextConfig;
