module.exports = {
    theme: "cosmos",
    title: "Evmos Documentation",
    locales: {
      "/": {
        lang: "en-US",
      },
    },
    markdown: {
      extendMarkdown: (md) => {
        md.use(require("markdown-it-katex"));
      },
    },
    head: [
      [
        "link",
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css",
        },
      ],
      [
        "link",
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css",
        },
      ],
    ],
    base: process.env.VUEPRESS_BASE || "/",
    plugins: [
      ["vuepress-plugin-element-tabs"],
      [
        "@vuepress/google-analytics",
        {
          ga: process.env.GOOGLE_ANALYTICS_ID || '',
        },
      ],
    ],
    head: [
      // ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }],
      [
        "link",
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon32.png",
        },
      ],
      [
        "link",
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon16.png",
        },
      ],
      ["link", { rel: "manifest", href: "/site.webmanifest" }],
      ["meta", { name: "msapplication-TileColor", content: "#2e3148" }],
      ["meta", { name: "theme-color", content: "#ffffff" }],
      ["link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
      // ['link', { rel: "apple-touch-icon-precomposed", href: "/apple-touch-icon-precomposed.png" }],
    ],
    themeConfig: {
      repo: "evmos/evmos",
      docsRepo: "evmos/evmos",
      docsBranch: "main",
      docsDir: "docs",
      editLinks: true,
      custom: true,
      project: {
        name: "Evmos",
        denom: "Evmos",
        ticker: "EVMOS",
        binary: "evmosd",
        testnet_denom: "tEvmos",
        testnet_ticker: "tEVMOS",
        rpc_url: "https://eth.bd.evmos.org:8545",
        rpc_url_testnet: "https://eth.bd.evmos.dev:8545",
        rpc_url_local: "http://localhost:8545/",
        chain_id: "9001",
        testnet_chain_id: "9000",
        latest_version: "v10.0.0-rc1",
        mainnet_version: "v9.1.0",
        testnet_version: "v10.0.0-rc1",
        version_number: "2",
        testnet_version_number: "4",
        testnet_evm_explorer_url: "https://evm.evmos.dev",
        evm_explorer_url: "https://evm.evmos.org",
        testnet_cosmos_explorer_url: "https://explorer.evmos.dev/",
        cosmos_explorer_url: "https://www.mintscan.io/evmos",
      },
    },
  };
  