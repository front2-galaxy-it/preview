import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin("./src/app/localization/i18n.ts")

/** @type {import("next").NextConfig} */
const nextConfig = {
  // output: "export",
  // basePath: "/front_2/FittnesLeader",
  // assetPrefix: "/front_2/FittnesLeader",
  // distDir: "build",
  // trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "4040",
      },
    ],
  },
  sassOptions: {
    prependData: '@import "@/app/styles/scss-utils/index";',
  },
}

export default withNextIntl(nextConfig)
