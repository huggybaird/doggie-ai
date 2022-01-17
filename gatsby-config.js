module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "baird-gatsby-blog",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "ab",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "images",
    //     path: "./src/images/",
    //   },
    //   __key: "images",
    // },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-theme-amaranth`,
      options: {
        // Website configuration
        website: {
          title: "Zobo.dev", // Homepage title
          titleShort: "Zobo.dev", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation
          name: "Zobo.dev - Software, Robotics, Startups", // Website name used for homescreen (PWA) and SEO
          description: "Zobo.dev - A place for techies", // Website description used for RSS feeds/meta description tag
          language: "en", // Sets the global HTML lang attribute
          logoUrl: `/zobo-icon220x220.png`, //"/images/logo/zobo-logo600x110.jpg", // Logo used for SEO
          fbAppId: "1825356251115265", // FB Application ID for using app insights
          twitterName: "huggybaird2", // Twitter handle of the website
          url: "https://zobo.dev", // Domain of your website without the pathPrefix
          rss: "/rss.xml", // Path to the RSS file
          rssTitle: "Zobo.dev RSS feed", // Title of the RSS feed

          googleAnalyticsId: "UA-VALIDID", // GA tracking ID
          copyright: "© Copyright 2022 | Zobo", // Copyright string for the footer of the website and RSS feed.

          themeColor: "f5a104", //"#D83850", // Used for setting manifest and progress theme colors.
          backgroundColor: "#F7F7F7", // Used for setting manifest background color.
        },

        // User configuration
        user: {
          id: "Huggybaird", // Unique identifier of the user on the website. Used for OpenGraph SEO tags
          firstName: "Huggy", // Used for SEO
          lastName: "Baird", // Used for SEO
          twitterName: "huggybaird2", // Twitter username used for SEO
          linkedIn: "michael-baird-cfa-a02b881", // Used for contact information
          github: "huggybaird", // Used for contact information
          email: "", // Used for contact information and displayed in the RSS feed
          location: "Lakewood, OH", // User location used for SEO
          about: "A techie with a passion for startups and robotics!", // User information used for the author section
          avatar: "https://i.pravatar.cc/300", // User avatar used for the author section
        },

        // Organization information used for SEO
        organization: {
          name: "Zobo.dev",
          description: "Robotics & Technology",
          logoUrl: `/zobo-icon220x220.png`, //"/images/logo/zobo-logo600x110.jpg",
          url: "https://zobo.dev", // URL of the organization website
        },

        // Gatsby Configuration
        pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.

        contentDir: "blog", //undefined, // Directory for MDX posts. Defaults to "content".
        assetDir: undefined, // Asset directory. Defaults to "static".

        embeddedImageWidth: 768, // MDX embedded image width. Used by gatsby-plugin-image for optimization
        embeddedVideoWidth: 920, // MDX embedded video width in pixels

        iconPath: undefined, // Icon used for manifest icon creation.
        iconList: [  ], // Icons used for the web manifest. Can be used to override iconPath for a more pixel perfect control.
        iconCachePaths: undefined, // Glob pattern path for the icons to be cached by the gatsby-plugin-offline

        basePath: `/blog`, // Base path for mounting pages. Allows for multiple themes to be used in a single website.
      },
    },
  ],
};
