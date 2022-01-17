module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"ab","head":false,"anonymize":false,"respectDNT":false,"exclude":[],"pageTransitionDelay":0,"enableWebVitalsTracking":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-image/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"extensions":[".mdx"],"defaultLayouts":{},"gatsbyRemarkPlugins":[],"lessBabel":false,"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"D:\\dev\\doggie-ai","commonmark":false},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":650,"linkImagesToOriginal":true,"showCaptions":false,"markdownCaptions":false,"backgroundColor":"white","quality":50,"withWebp":false,"withAvif":false,"tracedSVG":false,"loading":"lazy","decoding":"async","disableBgImageOnAlpha":false,"disableBgImage":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"gatsbyRemarkPlugins":[{"resolve":"D:/dev/doggie-ai/node_modules/gatsby-remark-embed-video","id":"c1c14df8-42f8-5391-ba49-7f6486fd0e03","name":"gatsby-remark-embed-video","version":"3.1.1","modulePath":"D:\\dev\\doggie-ai\\node_modules\\gatsby-remark-embed-video\\index.js","pluginOptions":{"plugins":[],"width":920},"nodeAPIs":[],"browserAPIs":[],"ssrAPIs":[]},{"resolve":"D:/dev/doggie-ai/node_modules/gatsby-remark-responsive-iframe","id":"14fa90d3-ae84-54a3-bb14-8c56bdcaa86e","name":"gatsby-remark-responsive-iframe","version":"5.5.0","modulePath":"D:\\dev\\doggie-ai\\node_modules\\gatsby-remark-responsive-iframe\\index.js","pluginOptions":{"plugins":[]},"nodeAPIs":[],"browserAPIs":[],"ssrAPIs":[]},{"resolve":"D:/dev/doggie-ai/node_modules/gatsby-remark-images","id":"495b6a56-94f4-5daa-92d2-523fcbf1928f","name":"gatsby-remark-images","version":"6.5.1","modulePath":"D:\\dev\\doggie-ai\\node_modules\\gatsby-remark-images\\index.js","pluginOptions":{"plugins":[],"maxWidth":768,"showCaptions":["title","alt"]},"nodeAPIs":["pluginOptionsSchema"],"browserAPIs":["onRouteUpdate"],"ssrAPIs":[]},{"resolve":"D:/dev/doggie-ai/node_modules/remark-codesandbox/gatsby","id":"23055c86-94f0-5482-b4a2-3a6374bd8aa0","modulePath":"D:\\dev\\doggie-ai\\node_modules\\remark-codesandbox\\gatsby\\index.js","pluginOptions":{"plugins":[],"mode":"button"},"nodeAPIs":[],"browserAPIs":[],"ssrAPIs":[]},{"resolve":"D:/dev/doggie-ai/node_modules/gatsby-remark-copy-linked-files","id":"cf104666-f93f-5e9d-9c2e-1bd9003e1e14","name":"gatsby-remark-copy-linked-files","version":"5.5.0","modulePath":"D:\\dev\\doggie-ai\\node_modules\\gatsby-remark-copy-linked-files\\index.js","pluginOptions":{"plugins":[]},"nodeAPIs":[],"browserAPIs":[],"ssrAPIs":[]},{"resolve":"D:/dev/doggie-ai/node_modules/gatsby-remark-prismjs","id":"1841ee65-40ba-5393-866b-415a9a2caa7f","name":"gatsby-remark-prismjs","version":"6.5.0","modulePath":"D:\\dev\\doggie-ai\\node_modules\\gatsby-remark-prismjs\\index.js","pluginOptions":{"plugins":[],"classPrefix":"language-","inlineCodeMarker":null,"aliases":{},"showLineNumbers":false,"noInlineHighlight":false,"prompt":{"user":"root","host":"localhost","global":false},"escapeEntities":{}},"nodeAPIs":[],"browserAPIs":[],"ssrAPIs":[]}],"remarkPlugins":[null,null,null],"defaultLayouts":{},"lessBabel":false,"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"D:\\dev\\doggie-ai","commonmark":false},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":768,"showCaptions":["title","alt"]},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-gtag/gatsby-browser.js'),
      options: {"plugins":[],"trackingIds":["UA-VALIDID"]},
    },{
      plugin: require('../node_modules/gatsby-plugin-nprogress/gatsby-browser.js'),
      options: {"plugins":[],"color":"f5a104"},
    },{
      plugin: require('../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-twitter/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Zobo.dev - Software, Robotics, Startups","short_name":"Zobo.dev","description":"Zobo.dev - A place for techies","start_url":"/","background_color":"#F7F7F7","theme_color":"f5a104","display":"minimal-ui","cache_busting_mode":"none","icons":[],"legacy":true,"theme_color_in_head":true,"crossOrigin":"anonymous","include_favicon":true,"cacheDigest":null},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[],"workboxConfig":{}},
    },{
      plugin: require('../node_modules/gatsby-plugin-netlify-cms/gatsby-browser.js'),
      options: {"plugins":[],"enableIdentityWidget":true,"publicPath":"admin","htmlTitle":"Content Manager","includeRobots":false},
    },{
      plugin: require('../node_modules/gatsby-theme-advanced/gatsby-browser.js'),
      options: {"plugins":[],"website":{"title":"Zobo.dev","titleShort":"Zobo.dev","name":"Zobo.dev - Software, Robotics, Startups","description":"Zobo.dev - A place for techies","language":"en","logoUrl":"/logos/logo-1024.png","fbAppId":"1825356251115265","twitterName":"Vagr9K","url":"https://zobo.dev","rss":"/rss.xml","rssTitle":"Zobo.dev RSS feed","googleAnalyticsId":"UA-VALIDID","copyright":"© Copyright 2022 | Zobo","themeColor":"f5a104","backgroundColor":"#F7F7F7"},"user":{"id":"Huggybaird","firstName":"Huggy","lastName":"Baird","twitterName":"huggybaird2","linkedIn":"michael-baird-cfa-a02b881","github":"huggybaird","email":"","location":"Lakewood, OH","about":"A techie with a passion for startups and robotics!","avatar":"https://i.pravatar.cc/300"},"organization":{"name":"Zobo.dev","description":"Robotics & Technology","logoUrl":"/images/logo/zobo-logo600x110.jpg","url":"https://zobo.dev"},"pathPrefix":"/","contentDir":"blog","embeddedImageWidth":768,"embeddedVideoWidth":920,"iconList":[],"basePath":"/blog"},
    }]
