import type { GatsbyConfig } from "gatsby";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

const config: GatsbyConfig = {
  siteMetadata: {
    title: `wedding-website`,
    siteUrl: `https://www.yourdomain.tld`
  },
  pathPrefix: "/wedding-website",
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: '@mkitio/gatsby-theme-password-protect',
    options: {
      password: process.env.PASSWORD
    }
  }]
};

export default config;
