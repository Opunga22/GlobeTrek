const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isProjectPages = Boolean(repositoryName) && !repositoryName.endsWith('.github.io');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isProjectPages ? `/${repositoryName}` : '',
  assetPrefix: isProjectPages ? `/${repositoryName}/` : '',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

module.exports = nextConfig;