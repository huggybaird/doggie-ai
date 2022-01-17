---
title: "Azure Static Web Apps - Step By Step"
cover: images/azure-static-web.JPG
coverAlt: "Azure Static Web Apps"
description: "The workflow of Azure Static Web Apps is tailored to a developer's daily workflow. Apps are built and deployed based off code changes."
category: "tech"
datePublished: "2022-01-15"
dateModified: "2022-01-15"
tags:
  - programming
  - azure
---


## Azure Static Web Apps - Step By Step
 The workflow of Azure Static Web Apps is tailored to a developer's daily workflow. Apps are built and deployed based off code changes.

When you create an Azure Static Web Apps resource, Azure interacts directly with GitHub or Azure DevOps to monitor a branch of your choice. Every time you push commits or accept pull requests into the watched branch, a build is automatically run and your app and API is deployed to Azure.

Static web apps are commonly built using libraries and frameworks like Angular, React, Svelte, Vue, or Blazor where server side rendering is not required. These apps include HTML, CSS, JavaScript, and image assets that make up the application. With a traditional web server, these assets are served from a single server alongside any required API endpoints.

With Static Web Apps, static assets are separated from a traditional web server and are instead served from points geographically distributed around the world. This distribution makes serving files much faster as files are physically closer to end users. In addition, API endpoints are hosted using a serverless architecture, which avoids the need for a full back-end server all together.

Key features
Web hosting for static content like HTML, CSS, JavaScript, and images.
Integrated API support provided by Azure Functions with the option to link an existing Azure Functions app using a standard account.
First-class GitHub and Azure DevOps integration where repository changes trigger builds and deployments.
Globally distributed static content, putting content closer to your users.
Free SSL certificates, which are automatically renewed.
Custom domains to provide branded customizations to your app.
Seamless security model with a reverse-proxy when calling APIs, which requires no CORS configuration.
Authentication provider integrations with Azure Active Directory, GitHub, and Twitter.
Customizable authorization role definition and assignments.
Back-end routing rules enabling full control over the content and routes you serve.
Generated staging versions powered by pull requests enabling preview versions of your site before publishing.
What you can do with Static Web Apps
Build modern web applications with JavaScript frameworks and libraries like Angular, React, Svelte, Vue, or using Blazor to create WebAssembly applications, with an Azure Functions back-end.
Publish static sites with frameworks like Gatsby, Hugo, VuePress.
Deploy web applications with frameworks like Next.js and Nuxt.js.
Next steps